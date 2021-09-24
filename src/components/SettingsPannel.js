import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, FormControl, FormLabel } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { ColorPicker } from 'material-ui-color';

const useStyles = makeStyles((theme) => ({
    input: {
        width: "45%",
        marginRight: "5%"
    },
    question: {
        margin: "20px 0",
        display: "flex"
    },
    removeBtn: {
        maxWidth: "48px !important",
        minWidth: "48px !important",
        borderRadius: "50%",
        border: "none",
        fontWeight: "bolder",
        color: "white",
        fontSize: 20,
        background: "#dc3545"
    },
    button: {
        marginTop: 30
    }
}));

const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
}

export function SettingsPannel(props) {
    const { setSettings, settings } = props;
    const [defaultValues, setDefaultValues] = useState({
        textColor: (settings.textColor || "#000000"),
        backgroundColor: (settings.backgroundColor || "#ffffff"),
        borderColor: (settings.borderColor || "#000000"),
    });

    const timeoutFunction = (func) => {
        if (window.currentRunningFunc) {
            clearTimeout(window.currentRunningFunc);
        }
        window.currentRunningFunc = setTimeout(() => {
            func();
            window.currentRunningFunc = false;
        }, 100);

    }

    const handleOnChange = async (key, val) => {
        setDefaultValues({ ...defaultValues, [key]: val });
        setSettings({ ...settings, [key]: "#" + val.hex });
    }
    return (
        <FormControl>
            <FormControlLabel value="Font color" control={<ColorPicker
                name='color'
                value={defaultValues.textColor}
                onChange={color => timeoutFunction(() => { handleOnChange("textColor", color) })}

            />
            }labelPlacement='start' label="Font color" />
            <FormControlLabel value="Background color" control={<ColorPicker
                name='color'
                value={defaultValues.backgroundColor}
                onChange={color => timeoutFunction(() => { handleOnChange("backgroundColor", color) })}

            />
            }labelPlacement='start' label="Background color" />

            <FormControlLabel value="Border color" control={<ColorPicker
                name='color'
                value={defaultValues.borderColor}
                onChange={color => timeoutFunction(() => { handleOnChange("borderColor", color) })}

            />
            }labelPlacement='start' label="Border color" />
            
           

        </FormControl>
    );
}