import React from 'react'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import CustomBtn from './customBtn'

const styles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 5rem 0 5rem"
    },
    item: {
        paddingTop: "1rem"
    }
})

function Grid(props) {
    const {icon, wasteType, location, schedule, title, btnTitle} = props;
    const classes = styles();
    return (
        <div className={classes.wrapper}>
            <div className={classes.item}>{icon}</div>
            <Typography className={classes.item} variant="h4">{title}</Typography>
            <Typography className={classes.item} variant="h5">{wasteType}</Typography>
            <Typography className={classes.item} variant="h5">{location}</Typography>
            <Typography className={classes.item} variant="h5">{schedule}</Typography>
            <div className={classes.item}>
                <CustomBtn  txt={btnTitle}/>
            </div>
        </div>
    )
}

export default Grid
