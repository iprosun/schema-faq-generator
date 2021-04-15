import { makeStyles } from '@material-ui/core';
import Highlight from 'react-highlight'
var JSONPrettyMon = require('react-json-pretty/dist/1337');
var JSONPretty = require('react-json-pretty');


const useStyles = makeStyles((theme) => ({
    // generatedCode:{
    //     minHeight:100
    // },
    generatedCodeWrapper: {
        background:"#1e1e1e",
        color:"white"
    }
}));

export function GeneratedCode(props){
    const classes = useStyles();
    return(
        <div className={classes.generatedCodeWrapper}>
            <Highlight innerHTML={false}>{`<title>${props.title} - Frequently Asked Questions(FAQ)</title>`}</Highlight>
            <Highlight innerHTML={false}>{`<script type="application/ld+json">`}</Highlight>
            <JSONPretty className={classes.generatedCode}  theme={JSONPrettyMon} id="json-pretty" data={props.questions}></JSONPretty>
            <Highlight innerHTML={false}>{`</script>`}</Highlight>
            
        </div>
        )
}