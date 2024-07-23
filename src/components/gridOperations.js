import React from 'react'
import { Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import DetailsBtn from './DetailsBtn'
import EditBtn from './EditBtn'

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

    const GridOperations = (props) => {
        const {icon, OperationID, CustomerName, DriverName, id} = props;
        const classes = styles();

        return (
            <div className={classes.wrapper}>
                <div className={classes.item}>{icon}</div>
                <Typography className={classes.item} variant="h5">{OperationID}</Typography>
                <Typography className={classes.item} variant="h5">{CustomerName}</Typography>
                <Typography className={classes.item} variant="h5">{DriverName}</Typography>
                <DetailsBtn operationID={id}/>
                <EditBtn operationID={id} />
            </div>
        );
    }

export default GridOperations;
