package com.bootx;

import com.aliyun.oss.OSS;
import com.aliyun.oss.OSSClientBuilder;
import com.aliyun.oss.model.DeleteObjectsRequest;
import com.aliyun.oss.model.DeleteObjectsResult;
import com.aliyun.oss.model.ListObjectsV2Result;
import com.aliyun.oss.model.OSSObjectSummary;
import com.bootx.app.chengyu.entity.Idiom;
import com.bootx.app.chengyu.entity.Word;
import com.bootx.util.JsonUtils;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.io.FilenameUtils;

import java.io.*;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class Demo {

    public static List<Idiom> idiom() {
        String path = "C:\\Users\\black\\Downloads\\chinese-xinhua-master\\data\\idiom.json";
        File file = new File(path);
        StringBuffer sb = new StringBuffer();
        BufferedReader reader = null;
        try {
            System.out.println("以行为单位读取文件内容，一次读一整行：");
            reader = new BufferedReader(new FileReader(file));
            String tempString = null;
            int line = 1;
            // 一次读入一行，直到读入null为文件结束
            while ((tempString = reader.readLine()) != null) {
                sb.append(tempString.replace(" ",""));
                line++;
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e1) {
                }
            }
        }
        List<Idiom> idioms = JsonUtils.toObject(sb.toString(), new TypeReference<List<Idiom>>() {
        });
        return idioms;
    }

    public static List<Word> word() {
        String path = "C:\\Users\\black\\Downloads\\chinese-xinhua-master\\data\\word.json";
        File file = new File(path);
        StringBuffer sb = new StringBuffer();
        BufferedReader reader = null;
        try {
            System.out.println("以行为单位读取文件内容，一次读一整行：");
            reader = new BufferedReader(new FileReader(file));
            String tempString = null;
            int line = 1;
            // 一次读入一行，直到读入null为文件结束
            while ((tempString = reader.readLine()) != null) {
                sb.append(tempString.replace(" ",""));
                line++;
            }
            reader.close();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e1) {
                }
            }
        }
        List<Word> idioms = JsonUtils.toObject(sb.toString(), new TypeReference<List<Word>>() {
        });
        return idioms;
    }



    public static void main1() {
        String word = "毫无疑义";
        char[] chars = word.toCharArray();
        System.out.println(chars.length);
    }

    public static void main(String[] args) {
        for (int i=0;i<100;i++){
            System.out.println("========================================================================================"+i);
            remove();
        }

    }


    private static void remove(){;
        String endpoint = "oss-cn-hangzhou.aliyuncs.com";
        String accessKeyId = "LTAI4GCjrkxGi8rcyoiy6i8Y";
        String accessKeySecret = "AEG4gBrjvNQvSJRSStrZfHfC4EJZOW";
        // 创建OSSClient实例。
        OSS ossClient = new OSSClientBuilder().build(endpoint, accessKeyId, accessKeySecret);
        // 列举文件。如果不设置KeyPrefix，则列举存储空间下的所有文件。如果设置KeyPrefix，则列举包含指定前缀的文件。
        ListObjectsV2Result result = ossClient.listObjectsV2("bootx-video");
        List<OSSObjectSummary> ossObjectSummaries = result.getObjectSummaries();
        List<String> keys = new ArrayList<>();
        for (OSSObjectSummary s : ossObjectSummaries) {
            keys.add(s.getKey());
        }

        DeleteObjectsResult deleteObjectsResult = ossClient.deleteObjects(new DeleteObjectsRequest("bootx-video").withKeys(keys));
        List<String> deletedObjects = deleteObjectsResult.getDeletedObjects();
        deletedObjects.forEach(item-> System.out.println("result:"+item));

        ossClient.shutdown();
    }
}
