import React from 'react';
import { Typography, Box, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DetailsBtn from './DetailsBtn';
import EditBtn from './EditBtn';

const useStyles = makeStyles(() => ({
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        textAlign: 'center',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
            transform: 'scale(1.02)',
        },
    },
    iconWrapper: {
        marginBottom: '1rem',
    },
    text: {
        marginBottom: '0.4rem',
    },
    buttons: {
        marginTop: '1rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
    },
}));

const GridOperations = ({ icon, OperationID, CustomerName, DriverName, id }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.card} elevation={3}>
            <Box className={classes.iconWrapper}>{icon}</Box>
            <Typography variant="subtitle1" className={classes.text}>
                OperationID: {OperationID}
            </Typography>
            <Typography variant="body1" className={classes.text}>
                Customer: {CustomerName}
            </Typography>
            <Typography variant="body1" className={classes.text}>
                Driver: {DriverName}
            </Typography>
            <Divider style={{ width: '100%', margin: '1rem 0' }} />
            <div className={classes.buttons}>
                <DetailsBtn operationID={id} />
                <EditBtn operationID={id} />
            </div>
        </Paper>
    );
};

export default GridOperations;
