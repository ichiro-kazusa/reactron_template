import React from "react";
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Button, ButtonGroup } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function AsyncContent({ error, omikuji, fetchOmikuji }) {
    const classes = useStyles()

    let commState = 0; // communication status

    if (error) { commState = 3 } // drawing error
    else if (omikuji === null) { commState = 1 } // initial condition
    else if (omikuji === undefined) { commState = 2 } // drawing lottery
    else { commState = 4 } // finish drawing

    function switchTitle(state) {
        switch (state) {
            default:
            case 1: return (<Typography variant='h2'>引いてね！</Typography>)
            case 2: return (<Typography variant='h4'>通信中...</Typography>)
            case 3: return (<Typography variant='h4'>失敗したよ。もう一度引いてね</Typography>)
            case 4: return (<Typography variant='h2'>{omikuji}</Typography>)
        }
    }

    return (
        <div className={classes.content}>
            {switchTitle(commState)}
            <ButtonGroup color="primary" aria-label="outlined primary button group" disabled={commState == 2 ? true : false}>
                <Button onClick={() => fetchOmikuji()} >引く！</Button>
            </ButtonGroup>
        </div>
    )
}