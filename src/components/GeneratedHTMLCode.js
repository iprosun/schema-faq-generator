import { makeStyles } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


const useStyles = makeStyles((theme) => ({
    // generatedCode:{
    //     minHeight:100
    // },
    generatedCodeWrapper: {
        background:"#1e1e1e",
        color:"white"
    }
}));

export function GeneratedHTMLCode(props){
    const classes = useStyles();
    return(
        <div className={classes.generatedCodeWrapper}>
            
            <SyntaxHighlighter language="html" style={dark}>
                {props.codeString}
            </SyntaxHighlighter>

            
        </div>
        )
}