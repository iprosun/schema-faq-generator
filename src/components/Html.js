import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    textField:{
        width:'100%'
    },
    button:{
        marginTop:30
    }
}));




export function Html(props) {
    const classes = useStyles();
    const [text, setText] = useState("");
    const {questions, setQuestions, updateJsonBody} = props;
    
    const generateHTML = (text)=>{
        const questionRegex = "<h3>(.|\n)*?<\/h3>";    
        const answerRegex = "<\/h3>(.|\n)*?<h3>";
        text = text.replace(/(\r\n|\n|\r)/gm, "");
        console.log(text);
        const questionsRes = [...text.matchAll(questionRegex)].map(el=>{return el[0].replace(/<\/?h3>/g,'');})
        const answersRes = [...text.matchAll(answerRegex)].map(el=>{return el[0].replace(/<\/?h3>/g,'');})
        let newQuestions = []
        questionsRes.forEach((el, indx) => {
            newQuestions.push({
                question: el,
                answer: answersRes[indx]
            })
        })
        setQuestions(newQuestions);
        updateJsonBody(newQuestions);
    }
    return (
        <div>
            <TextField
                id="filled-multiline-static"
                label="HTML"
                multiline
                rows={20}
                value={text}
                className={classes.textField}
                variant="filled"
                onChange={(el)=>{setText(el.target.value)}}
            />
            <Button variant="contained" className={classes.button} color="primary" onClick={() => {generateHTML(text + "<h3>")}}>Generate</Button>

        </div>
    )
}