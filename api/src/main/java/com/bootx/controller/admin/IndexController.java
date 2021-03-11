package com.bootx.controller.admin;

import com.bootx.StsServiceSample;
import com.bootx.common.Result;
import com.bootx.controller.BaseController;
import com.bootx.entity.App;
import com.bootx.entity.BaseEntity;
import com.bootx.member.entity.Member;
import com.bootx.service.AppService;
import com.bootx.util.CodeUtils;
import com.bootx.util.DateUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@RestController("apiAdminIndexController")
@RequestMapping("/api")
public class IndexController extends BaseController {

    @Resource
    private AppService appService;

    @PostMapping("/currentUser")
    private Result currentUser(HttpServletRequest request) {
        App app = appService.get1(request);
        if(app==null){
            return Result.error("非法访问");
        }
        Map<String,Object> data = new HashMap<>();
        data.put("id",app.getId());
        data.put("appName", app.getAppName());
        data.put("logo", app.getLogo());
        data.put("username", app.getUsername());
        return Result.success(data);
    }

    @PostMapping("/download")
    private Result download(HttpServletRequest request) {
        App app = appService.get1(request);
        Map<String,Object> data = new HashMap<>();
        if(app==null){
            return Result.error("非法访问");
        }
        if(app.getType()==1){
            data.put("code",0);
            data.put("downloadUrl",StsServiceSample.getUrl("movie.zip"));
        }else{
            data.put("code",-1);
            data.put("msg","暂无该小程序源码");
        }
        return Result.success(data);
    }

}
