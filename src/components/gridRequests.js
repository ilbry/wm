import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import DetailsBtn from './DetailsBtn'

const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 5rem 0 5rem"
    },
    item: {
        paddingTop: "1rem",
        width: '100%',
        display: 'inline-block',
        border: '2px solid #ECF0F1',
        margin:0
    }
})

function GridRequests(props) {
    const {icon, UserID, RequestText, btnTitle } = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variant="h5">{UserID}</Typography>
            <Typography className={classes.item} variant="h5">{RequestText}</Typography>
            <div className={classes.item}>
                <DetailsBtn txt={btnTitle}/>
            </div>
        </div>
    )
}

export default GridRequests
