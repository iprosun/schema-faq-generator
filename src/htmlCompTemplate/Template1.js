import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import a from "./css/template1.css"
import $ from 'jquery'

// const useStyles = makeStyles((theme) => ({
//     textField:{
//         width:'100%'
//     },
//     button:{
//         marginTop:30
//     }
// }));




export default function template(props) {
    const { questions, settings } = props;

    return (
        
        <section id="code-wrapper">
            <style>
                {CSS}
            </style>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script>
                {javascript}
            </script>
            <div className="" >

                <ul className="t1-faq-list" style={{color: settings.textColor}}>
                    {questions.map((el, index) => {
                        return (

                            <li key={index} style={{borderColor: settings.borderColor, backgroundColor: settings.backgroundColor}} >
                                <h3  onClick={(e)=>{$(e.target).parent('li').toggleClass('t1-the-active').find('.t1-faq-text').slideToggle();}} className="t1-faq-heading"> {el.question}</h3>
                                <p className="t1-read t1-faq-text">
                                   {el.answer}
                                </p>
                            </li>
                        )
                    })}

                </ul>
            </div>
        </section>
    )
}

const javascript = `
    $(()=>{
        $('.t1-faq-heading').click(function () {
        $(this).parent('li').toggleClass('t1-the-active').find('.t1-faq-text').slideToggle();
        });
    })
`;
const CSS =`body {
    margin:0;
    padding:0;
    font-family: 'arial', sans-serif;

}
.t1-faq-list {
    list-style: none;
    padding: 0;
}
.t1-faq-list li {
    margin: 30px 0;
    border: 1px solid rgb(205, 205, 205);
    padding: 27px 30px;
    margin: 0px auto 30px;
    text-align: left;
}
.t1-faq-list .t1-faq-heading::before {
    content: '+';
    font-size: 40px;
    display: block;
    position: absolute;
    right:0;
    top: -8px;
}
.t1-faq-list .t1-the-active .t1-faq-heading::before {
    content: '-'; 
}
.t1-faq-heading {
    position: relative;
    cursor: pointer;
    font-size: 22px;
    font-weight: 600;
    margin:0;
}
.t1-faq-heading:hover {
}
.t1-faq-text {
    display: none;
}
.t1-container {
    width:500px;
    max-width: 1200px;
    margin: auto;
}
.t1-art-box svg {
    width:100%;
}
.t1-row {
    display:flex;
}
.t1-row .t1-col {
    flex-basis: 50%;
}
.t1-read {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 25px;
}`