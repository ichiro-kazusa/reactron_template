import React from "react";
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonGroup } from "@material-ui/core";
import { Add as AddIcon, Remove as RemoveIcon } from "@material-ui/icons";
import { incrementCounter, decrementCounter, resetCounter } from "@/actions/counter";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function CustomerContent(props) {
    const classes = useStyles()
    const { counter } = props.store.getState().counterReducer

    return (
        <div className={classes.content}>
            <Typography variant='h2'>
                {counter}
            </Typography>
            <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button onClick={() => props.store.dispatch(decrementCounter())} > <RemoveIcon /></Button>
                <Button onClick={() => props.store.dispatch(incrementCounter())} ><AddIcon /></Button>
                <Button onClick={() => props.store.dispatch(resetCounter())} >RESET</Button>
            </ButtonGroup>
        </div >
    )
}