package com.bootx.controller;

import com.bootx.common.Result;
import com.bootx.entity.App;
import com.bootx.entity.BaseEntity;
import com.bootx.entity.RewardType;
import com.bootx.member.entity.Member;
import com.bootx.member.entity.PointLog;
import com.bootx.member.service.MemberService;
import com.bootx.service.AppService;
import com.bootx.util.*;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController("apiRegisterController")
@RequestMapping("/api/register")
public class RegisterController extends BaseController{

    @Resource
    private AppService appService;

    @PostMapping("/submit")
    private Result login(String appId,String appSecret,String appName,String username,String password) {
        if (!isValid(Member.class, "username", username, BaseEntity.Save.class)
                || !isValid(Member.class, "password", password, BaseEntity.Save.class)
                || !isValid(Member.class, "appId", appId, BaseEntity.Save.class)
                || !isValid(Member.class, "appSecret", appSecret, BaseEntity.Save.class)
                || !isValid(Member.class, "appName", appName, BaseEntity.Save.class)
        ) {
            return Result.error("参数校验错误");
        }
        if (appService.appIdExists(appId)) {
            return Result.error("member.register.appId");
        }
        if (appService.appSecretExists(appSecret)) {
            return Result.error("member.register.appSecret");
        }
        if (appService.appNameExists(appName)) {
            return Result.error("member.register.appName");
        }
        if (appService.usernameExists(username)) {
            return Result.error("member.register.username");
        }
        App app = new App();
        app.setAppId(appId);
        app.setAppSecret(appSecret);
        app.setAppName(appName);
        app.setUsername(username);
        app.setPassword(password);
        app.setAppCode(CodeUtils.getCode(12));
        while (appService.appCodeExists(app.getAppCode())){
            app.setAppCode(CodeUtils.getCode(12));
        }
        app.setAppToken(app.getAppId()+"-"+app.getAppSecret()+"-"+app.getAppCode()+"-"+System.currentTimeMillis());
        while (appService.appTokenExists(app.getAppCode())){
            app.setAppToken(app.getAppToken());
        }
        app.setStatus(0);
        app.setExpireDate(DateUtils.getNextDay(7));
        appService.save(app);
        return Result.success("ok");
    }



}
