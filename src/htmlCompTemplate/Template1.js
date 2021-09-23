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
    const { questions } = props;

    return (
        <section>
            <style>
                {`body {
                margin:0;
                padding:0;
                font-family: 'arial', sans-serif;
            
            }
            
            
            
            .faq-list {
                list-style: none;
                padding: 0;
            }
            
            .faq-list li {
                margin: 30px 0;
                border: 1px solid rgb(205, 205, 205);
                padding: 27px 30px;
                margin: 0px auto 30px;
                text-align: left;
                width: 550px;
            }
            
            
            .faq-list .faq-heading::before {
                content: '+';
                font-size: 40px;
                display: block;
                position: absolute;
                right:0;
                top: -8px;
                color:#c2c2c2;
            }
            
            .faq-list .the-active .faq-heading::before {
                content: '-';
                
            }
            
            .faq-heading {
                position: relative;
                cursor: pointer;
                font-size: 18px;
                font-weight: 400;
                margin:0;
            }
            
            .faq-heading:hover {
                color: var(--theme-color);
            }
            
            .faq-text {
                display: none;
            }
            .container {
                width: 1200px;
                margin: auto;
            }
            .art-box svg {
                width:100%;
            }
            .row {
                display:flex;
            }
            .row .col {
                flex-basis: 50%;
            }
            .read {
                color: rgb(100, 100, 100);
                font-size: 16px;
                line-height: 1.5;
                margin-top: 25px;
            }`}
            </style>
            <script>
            </script>
            <div className="">

                <ul className="faq-list">
                    {questions.map((el, index) => {
                        return (

                            <li key={index}>
                                <h4  onClick={(e)=>{$(e.target).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();}} className="faq-heading"> {el.question}</h4>
                                <p className="read faq-text">
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
    $('.faq-heading').click(function () {
    
        $(this).parent('li').toggleClass('the-active').find('.faq-text').slideToggle();
    });
`;