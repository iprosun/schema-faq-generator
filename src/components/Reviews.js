import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    input : {
        width: "100%",
        marginBottom: "10px"
    },
    question:{
        margin: "20px 0",
        padding: "10px 30px",
        border: "1px solid #ccc",
    },
    removeBtn:{
        marginLeft: "auto",
        display: "block",
        marginTop:10,
        border:"none",
        fontWeight:"bolder",
        color:"white",
        fontSize:10,
        background:"#dc3545"
    },
    button:{
        marginTop:30
    }
}));

const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}

export function  Reviews(props){
    const {reviews, setReviews} = props
    const classes = useStyles();

    
    const addReview = () => {
        // Reviews: Date, Author, Review Body
        reviews.push({
            "@type": "Review",

            reviewRating: {
                "@type": "Rating",
                ratingValue: "",
            },
            datePublished: "",
            author: {
                "@type": "Person",
                name: ""
            },
            reviewBody: "",
        });
        setReviews([...reviews]);
        props.updateJsonBody([...reviews])
      };
    const deleteQuestion = (id) => {
        const newQ =  reviews.filter((el, index) => {
            return index !== id;
        })
        setReviews(newQ);
        props.updateJsonBody(newQ)
    }
    return(
        <div>
            {reviews.map((el, index) => {
                return(
                    <div key={index} className={classes.question}>
                        <TextField
                        key={"q_" + index}
                        id={"q_" + index}
                        label="Rating"
                        value={el.reviewRating.ratingValue}
                        className={classes.input}
                        onChange={(e)=>{
                            el.reviewRating.ratingValue = e.target.value
                            setReviews([...reviews])
                            props.updateJsonBody(reviews)
                        }}
                        />
                        <TextField
                        key={"d_" + index}
                        id={"d_" + index}
                        label="Date"
                        value={el.datePublished}
                        className={classes.input}
                        onChange={(e)=>{
                            el.datePublished = e.target.value
                            setReviews([...reviews])
                            props.updateJsonBody(reviews)
                        }}
                        />
                        <TextField
                        key={"a_" + index}
                        id={"a_" + index}
                        label="Author Name"
                        value={el.author.name}
                        className={classes.input}
                        onChange={(e)=>{
                            el.author.name = e.target.value
                            setReviews([...reviews])
                            props.updateJsonBody(reviews)
                        }}
                        />
                        <TextField
                        key={"r_" + index}
                        id={"r_" + index}
                        label="Review Body"
                        value={el.reviewBody}
                        className={classes.input}
                        onChange={(e)=>{
                            el.reviewBody = e.target.value
                            setReviews([...reviews])
                            props.updateJsonBody(reviews)
                        }}
                        />
                        <Button variant="contained" color="secondary" onClick={()=>{deleteQuestion(index)}} className={classes.removeBtn}>Delete Review</Button>
                    </div>
                );
            })}
            <Button variant="contained" color="primary" className={classes.button} onClick={addReview}>Add Review</Button>
        </div>
    )
}