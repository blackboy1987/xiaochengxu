package com.bootx;

import com.bootx.app.chengyu.entity.Idiom;
import com.bootx.app.chengyu.entity.Word;
import com.bootx.util.JsonUtils;
import com.bootx.util.WebUtils;
import com.fasterxml.jackson.core.type.TypeReference;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.List;

public class Demo {

    public static List<Idiom> idiom() {
        String path = "C:\\Users\\black\\Downloads\\chinese-xinhua-master\\data\\idiom.json";
        File file = new File(path);
        StringBuffer sb = new StringBuffer();
        BufferedReader reader = null;
        try {
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

    public static String getSql(Integer id){
        String url="https://www.hnymwl.com/"+id+".html";
        String result = WebUtils.get(url, null);
        if(StringUtils.isBlank(result)){
            return "";
        }
        Document root = Jsoup.parse(result);
        String title = "";
        Elements titles = root.getElementsByClass("midTitle");
        if(titles!=null&&titles.size()>0){
            title = titles.first().getElementsByTag("h1").first().text();
        }
        Element contentDom = root.getElementById("contentstart");
        if(contentDom==null){
            return "";
        }
        Element erphpdown = contentDom.getElementById("erphpdown");
        if(erphpdown!=null){
            erphpdown.remove();
        }
        Elements ceoAd = contentDom.getElementsByClass("ceo-ad");
        if(ceoAd!=null&&ceoAd.size()>0){
            ceoAd.remove();
        }
        Elements ceoVideoS = contentDom.getElementsByClass("ceo-video-s");
        if(ceoVideoS!=null&&ceoVideoS.size()>0){
            ceoVideoS.remove();
        }
        String content = contentDom.html().replace("<!--内页顶部广告位-->  <!--内页顶部广告位-->  ", "");
        if(StringUtils.isBlank(title)){
            return "";
        }

        String sql="INSERT INTO cms5.cms_posts (" +
                "ID, " +
                "post_author, " +
                "post_date, " +
                "post_date_gmt, " +
                "post_content, " +
                "post_title, " +
                "post_excerpt, " +
                "post_status, " +
                "comment_status, " +
                "ping_status, " +
                "post_password, " +
                "post_name, " +
                "to_ping, " +
                "pinged, " +
                "post_modified, " +
                "post_modified_gmt, " +
                "post_content_filtered, " +
                "post_parent, guid, " +
                "menu_order, " +
                "post_type, " +
                "post_mime_type, " +
                "comment_count" +
                ") VALUES (" +
                ""+id+", " +
                "1, " +
                "'2021-02-13 23:16:20', " +
                "'2021-02-13 15:16:20', " +
                "'"+content+"', " +
                "'"+title+"', " +
                "'', " +
                "'publish', " +
                "'open', " +
                "'open', " +
                "'', " +
                "'"+title+"', " +
                "'', " +
                "'', " +
                "'2021-02-13 23:16:20', " +
                "'2021-02-13 15:16:20', " +
                "''," +
                " 0, " +
                "'http://cms.i-gomall.com/?page_id="+id+"', " +
                "0, " +
                "'post', " +
                "'', " +
                "0" +
                ");";

        return sql;
    }
}
