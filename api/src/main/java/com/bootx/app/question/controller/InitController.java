package com.bootx.app.question.controller;

import com.bootx.app.question.entity.Subject;
import com.bootx.app.question.pojo.JsonRootBean;
import com.bootx.app.question.pojo.Question;
import com.bootx.app.question.service.SubjectService;
import com.bootx.util.JsonUtils;
import com.bootx.util.WebUtils;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.ArrayList;

@RestController("apiQuestionInitController")
@RequestMapping("/api/question")
public class InitController {

    @Resource
    private SubjectService subjectService;

    @Resource
    private StringRedisTemplate stringRedisTemplate;


    @GetMapping("/init")
    public String init1(){
        int count = 100000;
        int i = 0;
        while (i<count){
            i++;
            System.out.println("=========================================="+i);
            init();
        }

        return "ok";
    }

    private void init() {
        String url="https://wx.haijiyungui.com/app/index.php?i=8&t=0&v=1.3.3&from=wxapp&c=entry&a=wxapp&do=question&sign=98ac5889af227ff3a48fa3688a34bf71&m=skai_tooli&dopost=getquestion";
        String s = WebUtils.get(url, null);
        JsonRootBean jsonRootBean = JsonUtils.toObject(s,JsonRootBean.class);
        Question question = jsonRootBean.getQuestion();
        com.bootx.app.question.entity.Subject subject = new com.bootx.app.question.entity.Subject();
        Boolean aBoolean = stringRedisTemplate.hasKey(question.getTitle());
        if(aBoolean){
            return;
        }

        subject.setImage(question.getImage());
        subject.setTitle(question.getTitle());
        subject.setAnswers(new ArrayList<>());

        question.getAnswers().stream().forEach(item->{

            Subject.Answer answer = new Subject.Answer();
            answer.setAnswer(item.getAnswer());
            answer.setIsRight(item.getIstrue()==1);
            subject.getAnswers().add(answer);
        });
        try {
            new Thread(()->{
                subjectService.save(subject);
                System.out.println("===================================================================================================================="+subject.getTitle());
                stringRedisTemplate.opsForValue().set(subject.getTitle(),subject.getTitle());
            }).start();
        }catch (Exception ignored){
        }
    }


}
