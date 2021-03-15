package com.bootx.app.zhaocha;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;


@JsonIgnoreProperties(ignoreUnknown = true)
public class Result implements Serializable {

    private Object data;

    private int code;

    private String msg;


    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }



    /**
     * 构造方法
     */
    public Result() {
    }

    public Result(Integer code, String msg, Object data) {
        this.code = code;
        this.msg = msg;
        this.data = data;
    }

    public static com.bootx.common.Result success(String msg, Object data) {
        return new com.bootx.common.Result(0, msg, data);
    }

    public static com.bootx.common.Result success(Object data) {
        return new com.bootx.common.Result(0, "成功", data);
    }

    public static com.bootx.common.Result error(String msg) {
        return new com.bootx.common.Result(-1, msg, null);
    }

    public static com.bootx.common.Result error(Integer code, String msg) {
        return new com.bootx.common.Result(code, msg, null);
    }
    public static com.bootx.common.Result error(Integer code, String msg, Object data) {
        return new com.bootx.common.Result(code, msg, data);
    }
}
