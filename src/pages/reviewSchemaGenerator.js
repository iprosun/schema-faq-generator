import React, { useState } from "react";
import {
    Typography,
    Paper,
    TextField,
    Box,
    AppBar,
    Tabs,
    Tab,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { Reviews } from "../components/Reviews";
import { GeneratedSchema } from "../components/GeneratedSchema";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    input: {
        width: "100%",
    },
    wideInput: {
        width: "90%",
        margin: "10px 5%",
    },
}));

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
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const jsonBodyStructure = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "",
    brand: "",
    model: "",
    description: "",
    priceRange: "$$",
    review: [],
};



export default function ReviewSchemaGenerator() {
    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [reviews, setReviews] = useState([]);
    const [value, setValue] = useState(0);
    const classes = useStyles();

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };
    const [jsonBody, setJsonBody] = useState(jsonBodyStructure);


    const updateJsonStructure = (key, val, func) => {
        // Assign value to key  
        jsonBody[key] = val;
        // callback set function
        func(val);
    }

    const updateJsonBody = (q) => {
        jsonBody.review = (q || reviews)

        // Escape from array if only one review
        if (jsonBody.review.length === 1) {
            jsonBody.review = jsonBody.review[0];
        }
        setJsonBody(jsonBody);
    };

    return (
        <div>
            <Typography variant="h3" component="h3">
                Review Schema generator
            </Typography>
            <hr />
            <Grid container spacing={3}>
                <Grid item md={6}>
                    <Paper className={classes.paper}>
                        <AppBar position="static">
                            <Tabs
                                value={value}
                                onChange={handleTabChange}
                                aria-label="simple tabs example"
                            >
                                <Tab label="Builder" {...a11yProps(0)} />
                            </Tabs>
                        </AppBar>

                        <TextField
                            id="page-name"
                            label="Name"
                            className={classes.wideInput}
                            value={name}
                            onChange={(v) => {
                                updateJsonStructure("name", v.target.value, setName);
                            }}
                        />

                        <TextField
                            id="page-title"
                            label="Make"
                            className={classes.wideInput}
                            value={make}
                            onChange={(v) => {
                                updateJsonStructure("brand", v.target.value, setMake);
                            }}
                        />
                        <TextField
                            id="page-title"
                            label="Model"
                            className={classes.wideInput}
                            value={model}
                            onChange={(v) => {
                                updateJsonStructure("model", v.target.value, setModel);
                            }}
                        />
                        <TextField
                            id="page-title"
                            label="Description"
                            className={classes.wideInput}
                            value={description}
                            onChange={(v) => {
                                updateJsonStructure('description', v.target.value, setDescription);
                            }}
                        />
                        
                        <TabPanel value={value} index={0}>
                            <Reviews
                                reviews={reviews}
                                updateJsonBody={updateJsonBody}
                                setReviews={setReviews}
                            />
                        </TabPanel>
                    </Paper>
                </Grid>
                <Grid item md={6}>
                    <GeneratedSchema title={name} questions={jsonBody} />
                </Grid>
            </Grid>
        </div>
    );
}
