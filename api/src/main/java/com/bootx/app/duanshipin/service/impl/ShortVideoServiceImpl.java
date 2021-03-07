
package com.bootx.app.duanshipin.service.impl;

import cn.hutool.crypto.digest.MD5;
import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.bootx.app.duanshipin.dao.ShortVideoDao;
import com.bootx.app.duanshipin.entity.ShortVideo;
import com.bootx.app.duanshipin.entity.ShortVideoChannel;
import com.bootx.app.duanshipin.pojo.JsonRootBean;
import com.bootx.app.duanshipin.pojo.JsonRootBean1;
import com.bootx.app.duanshipin.pojo.JsonRootBean2;
import com.bootx.app.duanshipin.pojo.RetStr;
import com.bootx.app.duanshipin.service.ShortVideoChannelService;
import com.bootx.app.duanshipin.service.ShortVideoService;
import com.bootx.service.RedisService;
import com.bootx.service.impl.BaseServiceImpl;
import com.bootx.util.JsonUtils;
import com.bootx.util.WebUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.tomcat.util.net.openssl.ciphers.MessageDigest;
import org.bouncycastle.crypto.digests.MD5Digest;
import org.bouncycastle.jcajce.provider.digest.SHA512;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.util.Date;
import java.util.List;

/**
 * Service - 素材目录
 * 
 * @author blackboy
 * @version 1.0
 */
@Service
public class ShortVideoServiceImpl extends BaseServiceImpl<ShortVideo, Long> implements ShortVideoService {

    @Resource
    private ShortVideoChannelService shortVideoChannelService;

    @Resource
    private ShortVideoDao shortVideoDao;
    @Resource
    private RedisService redisService;

    @Override
    public void sync(Integer start,Integer end){
        List<ShortVideoChannel> list = shortVideoChannelService.findAll();
        for (int i = start; i < end; i++) {
            for (ShortVideoChannel shortVideoChannel:list) {
                sync(shortVideoChannel,i);
            }
        }
    }

    @Override
    public boolean exist(String videoId) {
        return shortVideoDao.exists("videoId",videoId);
    }

    private boolean sync(ShortVideoChannel shortVideoChannel, Integer page){
        String s = WebUtils.get("https://weixinapi.baomihua.com/getrecommend.ashx?dataType=rec&pageIndex="+page+"&pageSize=5&sceneType=weixin_channel&clientId=&channelId="+shortVideoChannel.getChannelId()+"&wxnum=1000&pmhUserId=&version=v7.0.4",null);
        JsonRootBean jsonRootBean = JsonUtils.toObject(s, JsonRootBean.class);
        List<RetStr> retStr = jsonRootBean.getRetStr();
        for (RetStr item:retStr){
            if(exist(item.getVideoid())){
                System.out.println(item.getVideoid()+"=============================================存在");
                return false;
            }

            ShortVideo shortVideo = new ShortVideo();
            shortVideo.setShortVideoChannel(shortVideoChannel);
            shortVideo.setChannelId(shortVideoChannel.getChannelId());
            shortVideo.setTime(item.getTime());
            shortVideo.setVideoId(item.getVideoid());
            shortVideo.setTitle(item.getVideoname());
            shortVideo.setVideoImage(item.getVideoimgurl());
            super.save(shortVideo);
            System.out.println(item.getVideoid()+"==============================ok");



            detail1(shortVideo);
            detail2(shortVideo);

            try{
                super.update(shortVideo);
            }catch (Exception e){

            }
           new Thread(()->{
               // upload(shortVideo);
           }).start();
        }

        return true;
    }

    @Override
    public boolean sync1(Long videoId){
        if(exist(videoId+"")){
            System.out.println(videoId+"=============================================存在");
            redisService.set("videoId",videoId+"");
            return true;
        }

        ShortVideo shortVideo = new ShortVideo();
        shortVideo.setVideoId(videoId+"");
        boolean flag = detail2(shortVideo);
        if(flag){
            detail1(shortVideo);
            super.save(shortVideo);
            System.out.println(shortVideo.getVideoId()+"==========================================================================ok");
            redisService.set("videoId",videoId+"");
        }else{
            System.out.println(shortVideo.getVideoId()+"==============================wu");
        }
        return flag;

    }

    private void upload(ShortVideo shortVideo) {
        try {
            upload(shortVideo.getVideoImage(),shortVideo.getVideoId(),shortVideo.getVideoId());
            upload(shortVideo.getVideoUrl(),shortVideo.getVideoId(),shortVideo.getVideoId());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private boolean detail2(ShortVideo shortVideo) {
        String s2 = WebUtils.get("https://push-common.baomihua.com:8081/api/video/getVideoInfo?videoId="+shortVideo.getVideoId(), null);
        JsonRootBean2 jsonRootBean2 = JsonUtils.toObject(s2,JsonRootBean2.class);
        try {
            shortVideo.setDescription(jsonRootBean2.getData().getDescription());
        }catch (Exception e){
            return false;
        }
        try {
            shortVideo.setTags(jsonRootBean2.getData().getTags());
        }catch (Exception e){
            return false;
        }
        return true;
    }

    private boolean detail1(ShortVideo shortVideo) {

        String s1 = WebUtils.get("https://weixinapi.baomihua.com/getvideourl.aspx?flvid="+shortVideo.getVideoId()+"&devicetype=wap&dataType=json", null);
        JsonRootBean1 jsonRootBean1 = JsonUtils.toObject(s1,JsonRootBean1.class);
        if(StringUtils.isBlank(jsonRootBean1.getFlvid())){
            return false;
        }


        if(jsonRootBean1.getAlipalyurl().indexOf("http")==0){
            shortVideo.setVideoUrl(jsonRootBean1.getAlipalyurl());
        }else{
            shortVideo.setVideoUrl("https://"+jsonRootBean1.getAlipalyurl());
        }
        try{
            shortVideo.setUploadTime(new Date(jsonRootBean1.getUploadTime()*1000));
        }catch (Exception e){
        }
        shortVideo.setDuration(jsonRootBean1.getTotaltime());
        shortVideo.setSize(jsonRootBean1.getVideofilesize());
        shortVideo.setChannelId(jsonRootBean1.getChannelid());
        shortVideo.setVideoImage(jsonRootBean1.getVideo_img().replace("x", "640_360"));

        shortVideo.setDuration(jsonRootBean1.getTotaltime());
        shortVideo.setTime(setTime(shortVideo.getDuration()));
        shortVideo.setTitle(jsonRootBean1.getTitle());
        return true;
    }

    private String setTime(Long duration) {
        long mins = duration/60;
        long seconds = duration-mins*60;
        String time = "";
        if(mins<10){
            time = time+"0"+mins;
        }else{
            time =time+mins;
        }
        if(seconds<10){
            time=time+":0"+seconds;
        }else{
            time=time+":"+seconds;
        }
        return time;
    }


    private static void upload(String url,String filePath,String fileName) throws IOException {;
        String extension = FilenameUtils.getExtension(url);
        String endpoint = "oss-cn-hangzhou.aliyuncs.com";
        String accessKeyId = "LTAI4GCjrkxGi8rcyoiy6i8Y";
        String accessKeySecret = "AEG4gBrjvNQvSJRSStrZfHfC4EJZOW";
        OSS ossClient = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);
        System.out.println(url);
        InputStream inputStream = new URL(url).openStream();
        ossClient.putObject("bootx-video", filePath+"/"+ fileName +"."+extension, inputStream);
        ossClient.shutdown();
    }

    public static void main(String[] args) throws IOException {
        upload("https://img.baomihua.com/v1/head/3f5b7770-15c9-4d99-8ada-5850a42d1388_61562606.jpg","1234","345");
    }
}