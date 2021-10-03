import React, { useState } from 'react';
import { TextField, Button, FormControlLabel, FormControl, FormLabel, Switch } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'
import { ColorPicker } from 'material-ui-color';
import defaultSettings from "../pages/defaultSettings"

const useStyles = makeStyles((theme) => ({
    fieldRow: {
        justifyContent: 'start',
        '& > .MuiFormControlLabel-label': {
            width: '50%'
        }
    }
}));


export function SettingsPannel(props) {
    const classes = useStyles();
    const { setSettings, settings } = props;
    const [defaultValues, setDefaultValues] = useState({
        ...defaultSettings, ...settings
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
        setSettings({ ...settings, [key]: val });
    }
    return (
        <FormControl>

            <FormControlLabel value="Keep only one active" className={classes.fieldRow} control={
                <Switch
                    value={settings.oneActive}
                    defaultChecked={defaultValues.oneActive}
                    onChange={(event) => handleOnChange('oneActive', event.target.checked)}
                />
            } labelPlacement='start' label="Keep only one active" />

            <FormControlLabel value="" className={classes.fieldRow} control={
                <TextField
                    value={settings.qFontSize}
                    defaultChecked={defaultValues.qFontSize}
                    onChange={(event) => handleOnChange('qFontSize', event.target.value)}
                />
            } labelPlacement='start' label="Question Font Size" />

            <FormControlLabel value="" className={classes.fieldRow} control={
                <TextField
                    value={settings.aFontSize}
                    defaultChecked={defaultValues.aFontSize}
                    onChange={(event) => handleOnChange('aFontSize', event.target.value)}
                />
            } labelPlacement='start' label="Answer Font Size" />

            <FormControlLabel value="Font color" className={classes.fieldRow} control={<ColorPicker
                name='color'
                value={settings.textColor}
                onChange={color => timeoutFunction(() => { handleOnChange("textColor", "#" + color.hex) })}

            />
            } labelPlacement='start' label="Font color" />

            <FormControlLabel value="Background color" className={classes.fieldRow} control={<ColorPicker
                name='color'
                value={settings.backgroundColor}
                onChange={color => timeoutFunction(() => { handleOnChange("backgroundColor", "#" + color.hex) })}

            />
            } labelPlacement='start' label="Background color" />

            <FormControlLabel value="Border color" className={classes.fieldRow} control={<ColorPicker
                name='color'
                value={settings.borderColor}
                onChange={color => timeoutFunction(() => { handleOnChange("borderColor", "#" + color.hex) })}

            />
            } labelPlacement='start' label="Border color" />



        </FormControl>
    );
}