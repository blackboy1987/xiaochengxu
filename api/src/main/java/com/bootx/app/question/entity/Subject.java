package com.bootx.app.question.entity;

import com.bootx.common.BaseAttributeConverter;
import com.bootx.entity.BaseEntity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "question_subject")
public class Subject extends BaseEntity<Long> {

    @NotEmpty
    @Column(nullable = false,unique = true)
    private String title;

    private String image;

    @NotEmpty
    @Column(length = 1000,nullable = false)
    @Convert(converter = AnswerConverter.class)
    private List<Answer> answers = new ArrayList<>();

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Answer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Answer> answers) {
        this.answers = answers;
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static class Answer implements Serializable {

        private String answer;

        private Boolean isRight;

        public String getAnswer() {
            return answer;
        }

        public void setAnswer(String answer) {
            this.answer = answer;
        }

        public Boolean getIsRight() {
            return isRight;
        }

        public void setIsRight(Boolean isRight) {
            this.isRight = isRight;
        }
    }

    @Converter
    public static class AnswerConverter extends BaseAttributeConverter<List<Answer>>{

    }
}
