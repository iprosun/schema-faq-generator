import React, { useState } from 'react';
import { TextField, Button, InputLabel, MenuItem, Select, FormControl } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%'
    },
    button: {
        marginTop: 30
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      }
}));




export function Html(props) {
    const classes = useStyles();
    const [text, setText] = useState("");
    const [qtype, setQtype] = useState("h3");
    const { questions, setQuestions, updateJsonBody } = props;

    const generateHTML = (text) => {
        let newQuestions = []
        if(qtype == "h3"){
            text+="</h3>";
            const questionRegex = "<h3>(.|\n)*?<\/h3>";
            const answerRegex = "<\/h3>(.|\n)*?<h3>";
            text = text.replace(/(\r\n|\n|\r)/gm, "");
            const questionsRes = [...text.matchAll(questionRegex)].map(el => { return el[0].replace(/<\/?h3>/g, ''); })
            const answersRes = [...text.matchAll(answerRegex)].map(el => { return el[0].replace(/<\/?h3>/g, ''); })
            questionsRes.forEach((el, indx) => {
                newQuestions.push({
                    question: el,
                    answer: answersRes[indx]
                })
            })
        }
        else if(qtype == "p"){
            text = text.replaceAll(/(\r\n|\n|\r)/gm, "");
            text = text.replaceAll("?</p>", "?</p>\n");
            const lines = text.split("\n");
            const questionsRes = lines.filter(el => { return el.includes("?</p>")}).map( el => {return el.replace(/<\/?p>/g, '')});
            const answersRes = lines.filter(el => { return !el.includes("?</p>")});
            console.log(lines);
            questionsRes.forEach((el, indx) => {
                newQuestions.push({
                    question: el,
                    answer: answersRes[indx]
                })
            })
        }
        
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
                onChange={(el) => { setText(el.target.value) }}
            />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Element Type</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={qtype}
                    onChange={(el) => { setQtype(el.target.value) }}
                    label="Question Element Type"
                >
                    <MenuItem value={"h3"}>{"<h3>"}</MenuItem>
                    <MenuItem value={"p"}>{"<p>"}</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained" className={classes.button} color="primary" onClick={() => { generateHTML(text) }}>Generate</Button>

        </div>
    )
}