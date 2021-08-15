import React from "react";
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonGroup } from "@material-ui/core";
import { Add as AddIcon, Remove as RemoveIcon } from "@material-ui/icons";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function CustomerContent({counter, incrementCounter, decrementCounter, resetCounter}) {
    const classes = useStyles()

    return (
        <div className={classes.content}>
            <Typography variant='h2'>
                {counter}
            </Typography>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => decrementCounter()} > <RemoveIcon /></Button>
                <Button onClick={() => incrementCounter()} ><AddIcon /></Button>
                <Button onClick={() => resetCounter()} >RESET</Button>
            </ButtonGroup>
        </div >
    )
}