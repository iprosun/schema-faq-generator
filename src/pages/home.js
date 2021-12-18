import React, { useState } from 'react';
import { Typography, Paper, TextField, Box, AppBar, Tabs, Tab } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import { Questions } from "../components/Question"
import { GeneratedSchema } from '../components/GeneratedSchema';
import { Html } from '../components/Html';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    input: {
        width: "100%"
    },
    titleInput: {
        width: "90%",
        margin:'5%'
    }
}));
const jsonBodyStructure = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": []
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Home() {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    const handleTitleChange = (v) => {
        console.log(v);
    }

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const [title, setTitle] = useState("");
    const [questions, setQuestions] = useState([]);
    const [jsonBody, setJsonBody] = useState(jsonBodyStructure)
    const updateJsonBody = (q) => {
        jsonBody.mainEntity = (q || questions).map(el => {
            return {
                "@type": "Question",
                "name": el.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": el.answer
                }
            }
        })
        setJsonBody(jsonBody)
    }

    return (
        <div>
            <Typography variant="h3" component="h3">
                FAQ Schema generator
            </Typography>
            <hr />
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper}>
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleTabChange} aria-label="simple tabs example">
                                <Tab label="Builder" {...a11yProps(0)} />
                                <Tab label="HTML" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TextField
                                id="page-title"
                                label="Title"
                                className={classes.titleInput}
                                value={title}
                                onChange={(v) => { setTitle(v.target.value); console.log(v) }}
                            />
                        <TabPanel value={value} index={0}>
                            <Questions questions={questions} updateJsonBody={updateJsonBody} setQuestions={setQuestions} />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Html questions={questions} updateJsonBody={updateJsonBody} setQuestions={setQuestions} />
                    </TabPanel>
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <GeneratedSchema title={title + ' - Frequently Asked Questions(FAQ)'} questions={jsonBody} />
                </Grid>
            </Grid>
        </div>
    )
}