import React, { useState } from 'react';
import { Typography, Paper, TextField, Box, AppBar, Tabs, Tab } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Template1 from "../htmlCompTemplate/Template1";
import { Questions } from "../components/Question"



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

const useStyles = makeStyles((theme) => ({
    body: {
        background:"red"
    }
}));

export default function Home() {
    const classes = useStyles();
    const [tabValue,setTabValue] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [htmlBody, setHtmlBody] = useState("");
    const updateHtmlBody = (q) =>{
        setHtmlBody(JSON.stringify(q));
    }

    //Htmlst [title, setTitle] = useState("");
    return (
        <div>
        <Typography variant="h3" component="h3">
                SEO Schema generator
            </Typography>
            <hr />
        <Grid container spacing={3}>
                <Grid item md={6}>
                    <Paper className={classes.paper}>
                        <AppBar position="static">
                            <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} aria-label="simple tabs example">
                                <Tab label="Builder" {...a11yProps(0)} />
                                <Tab label="HTML" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        
                        <TabPanel value={tabValue} index={0}>
                            <Questions questions={questions} updateJsonBody={updateHtmlBody} setQuestions={setQuestions} />
                        </TabPanel>
                        <TabPanel value={tabValue} index={1}>
                            <h1>bb</h1>
                        </TabPanel>
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <Template1 questions={questions} />
                </Grid>
            </Grid>
            </div>
    )
}