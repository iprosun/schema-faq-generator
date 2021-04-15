import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    input : {
        width: "45%",
        marginRight:"5%"
    },
    question:{
        margin: "20px 0",
        display: "flex"
    },
    removeBtn:{
        maxWidth:"48px !important",
        minWidth:"48px !important",
        borderRadius:"50%",
        border:"none",
        fontWeight:"bolder",
        color:"white",
        fontSize:20,
        background:"#dc3545"
    },
    button:{
        marginTop:30
    }
}));

const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

export function  Questions(props){
    const {questions, setQuestions} = props
    const classes = useStyles();
    const handleQuestionChange = () => {}

    const addQuestion = () => {
        questions.push({ question: "", answer:"" });
        setQuestions([...questions]);
        props.updateJsonBody()
      };
    const deleteQuestion = (id) => {
        const newQ =  questions.filter((el, index) => {
            return index !== id;
        })
        setQuestions(newQ);
        props.updateJsonBody(newQ)
    }
    return(
        <div>
            {questions.map((el, index) => {
                return(
                    <div className={classes.question}>
                        <TextField
                        key={"q_" + index}
                        id={"q_" + index}
                        label="Question"
                        value={el.question}
                        className={classes.input}
                        onChange={(e)=>{
                            questions[index].question = e.target.value
                            setQuestions([...questions])
                            props.updateJsonBody()
                        }}
                        />
                        <TextField
                        key={"a_" + index}
                        id={"a_" + index}
                        label="Answer"
                        value={el.answer}
                        className={classes.input}
                        onChange={(e)=>{
                            questions[index].answer = e.target.value
                            setQuestions([...questions])
                            props.updateJsonBody()
                        }}
                        />
                        <Button variant="contained" color="secondary" onClick={()=>{deleteQuestion(index)}} className={classes.removeBtn}>-</Button>
                    </div>
                );
            })}
            <Button variant="contained" color="primary" className={classes.button} onClick={addQuestion}>Add Question</Button>
        </div>
    )
}