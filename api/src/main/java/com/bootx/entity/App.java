package com.bootx.entity;

import com.bootx.common.BaseAttributeConverter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.commons.lang3.StringUtils;
import org.hibernate.validator.constraints.Length;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.Transient;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Entity
public class App extends BaseEntity<Long>{

    @NotNull
    @Column(nullable = false,updatable = false,unique = true)
    public String appId;

    @NotNull
    @Column(nullable = false,unique = true)
    private String appSecret;

    @NotNull
    @Column(nullable = false,updatable = false,unique = true)
    private String appToken;

    @NotNull
    @Length(max = 18,min = 18)
    @Column(length = 18,nullable = false,updatable = false,unique = true)
    private String appCode;

    @NotNull
    @Column(nullable = false,unique = true)
    private String appName;

    /**
     * 0: 微信待审核
     * 1：微信审核通过
     * 2：已禁用
     */
    @NotNull
    @Column(nullable = false)
    private Integer status;

    private String logo;

    @NotEmpty
    @Column(nullable = false,updatable = false,unique = true)
    private String username;

    /**
     * 密码
     */
    @NotEmpty(groups = Save.class)
    @Length(min = 4, max = 20)
    @Transient
    private String password;

    /**
     * 加密密码
     */
    @Column(nullable = false)
    private String encodedPassword;

    /**
     * 0：成语
     * 1：电影
     * 2：短视频
     * 3：图转文
     * 4：答题
     */
    @NotNull
    @Column(nullable = false,updatable = false)
    private Integer type;

    /**
     * 账号过期时间。
     */
    @NotNull
    @Column(nullable = false)
    private Date expireDate;

    @NotNull
    @Convert(converter = ConfigConfigConvert.class)
    @Column(length = 3000,nullable = false)
    private Map<String,String> config = new HashMap<>();


    /**
     * 广告配置
     */
    @NotNull
    @Convert(converter = AdConfigConvert.class)
    @Column(length = 3000,nullable = false)
    private Map<String,AdConfig> ads = new HashMap<>();

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getAppSecret() {
        return appSecret;
    }

    public void setAppSecret(String appSecret) {
        this.appSecret = appSecret;
    }

    public String getAppToken() {
        return appToken;
    }

    public void setAppToken(String appToken) {
        this.appToken = appToken;
    }

    public String getAppCode() {
        return appCode;
    }

    public void setAppCode(String appCode) {
        this.appCode = appCode;
    }

    public String getAppName() {
        return appName;
    }

    public void setAppName(String appName) {
        this.appName = appName;
    }

    public Map<String, AdConfig> getAds() {
        if(ads==null){
            ads = new HashMap<>();
        }
        return ads;
    }

    public void setAds(Map<String, AdConfig> ads) {
        this.ads = ads;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public Map<String, String> getConfig() {
        return config;
    }

    public void setConfig(Map<String, String> config) {
        this.config = config;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 获取密码
     *
     * @return 密码
     */
    public String getPassword() {
        return password;
    }

    /**
     * 设置密码
     *
     * @param password
     *            密码
     */
    public void setPassword(String password) {
        this.password = password;
        if (password != null) {
            setEncodedPassword(DigestUtils.md5Hex(password));
        }
    }

    /**
     * 获取加密密码
     *
     * @return 加密密码
     */
    public String getEncodedPassword() {
        return encodedPassword;
    }

    /**
     * 设置加密密码
     *
     * @param encodedPassword
     *            加密密码
     */
    public void setEncodedPassword(String encodedPassword) {
        this.encodedPassword = encodedPassword;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Date getExpireDate() {
        return expireDate;
    }

    public void setExpireDate(Date expireDate) {
        this.expireDate = expireDate;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class AdConfig implements Serializable {

        /**
         * Banner 广告
         */
        private String bannerId;

        /**
         * 激励视频广告
         */
        private String rewardedVideoAdId;

        /**
         * 插屏广告
         */
        private String interstitialAdId;

        /**
         * 视频广告
         */
        private String videoAdId;

        /**
         * 视频前贴广告(视频贴片广告)
         */
        private String videoFrontAdId;

        /**
         * 格子广告
         */
        private String gridAdId;

        /**
         * 原生模板广告
         */
        private String nativeAdId;

        public String getBannerId() {
            return bannerId;
        }

        public void setBannerId(String bannerId) {
            this.bannerId = bannerId;
        }

        public String getRewardedVideoAdId() {
            return rewardedVideoAdId;
        }

        public void setRewardedVideoAdId(String rewardedVideoAdId) {
            this.rewardedVideoAdId = rewardedVideoAdId;
        }

        public String getInterstitialAdId() {
            return interstitialAdId;
        }

        public void setInterstitialAdId(String interstitialAdId) {
            this.interstitialAdId = interstitialAdId;
        }

        public String getVideoAdId() {
            return videoAdId;
        }

        public void setVideoAdId(String videoAdId) {
            this.videoAdId = videoAdId;
        }

        public String getVideoFrontAdId() {
            return videoFrontAdId;
        }

        public void setVideoFrontAdId(String videoFrontAdId) {
            this.videoFrontAdId = videoFrontAdId;
        }

        public String getGridAdId() {
            return gridAdId;
        }

        public void setGridAdId(String gridAdId) {
            this.gridAdId = gridAdId;
        }

        public String getNativeAdId() {
            return nativeAdId;
        }

        public void setNativeAdId(String nativeAdId) {
            this.nativeAdId = nativeAdId;
        }
    }

    @Convert
    public static class AdConfigConvert extends BaseAttributeConverter<Map<String,AdConfig>>{

    }

    @Convert
    public static class ConfigConfigConvert extends BaseAttributeConverter<Map<String,String>>{

    }

    @Transient
    public boolean isValidCredentials(Object credentials) {
        return credentials != null && StringUtils.equals(DigestUtils.md5Hex(credentials instanceof char[] ? String.valueOf((char[]) credentials) : String.valueOf(credentials)), getEncodedPassword());
    }
}
