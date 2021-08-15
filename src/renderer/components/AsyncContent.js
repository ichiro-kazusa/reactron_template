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

    return (
        <div className={classes.content}>
            {(omikuji === null && !error) ?
                <React.Fragment> <Typography variant='h2'>引いてね！</Typography>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button onClick={() => fetchOmikuji()} >引く！</Button>
                    </ButtonGroup>
                </React.Fragment>
                :
                (omikuji === undefined && !error) ?
                    <React.Fragment> <Typography variant='h4'>引いているよ</Typography>
                        <ButtonGroup color="primary" aria-label="outlined primary button group" disabled={true}>
                            <Button onClick={() => fetchOmikuji()} >引く！</Button>
                        </ButtonGroup>
                    </React.Fragment>
                    : (
                        (error) ?
                            <React.Fragment> <Typography variant='h4'>失敗したよ。もう一度引いてね</Typography>
                                <ButtonGroup color="primary" aria-label="outlined primary button group">
                                    <Button onClick={() => fetchOmikuji()} >引く！</Button>
                                </ButtonGroup>
                            </React.Fragment> :
                            <React.Fragment> <Typography variant='h2'>{omikuji}</Typography>
                                <ButtonGroup color="primary" aria-label="outlined primary button group">
                                    <Button onClick={() => fetchOmikuji()} >引く！</Button>
                                </ButtonGroup>
                            </React.Fragment>
                    )
            }
        </div>
    )
}