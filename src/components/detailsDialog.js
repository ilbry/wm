import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {Button} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const DialogStyle = makeStyles(theme => ({
    dialog: {
        minWidth: 300,
    },
    title: {
        backgroundColor: '#008000',
        color: '#fff',
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    content: {
        padding: theme.spacing(2),
    },
    actions: {
        padding: theme.spacing(2),
        justifyContent: 'center',
    },
    closeButton: {
        color: theme.palette.error.main,
    },
    labelName: {
        fontWeight: 'bold',
        color: '#008000',
    },
    labelValue: {
        color: '#000',
    },
    labelContainer: {
        marginBottom: theme.spacing(2),
    },
}));

const DetailsDialog = ({open, handleClose, dialogData}) => {
    const classes = DialogStyle();

    return (
        <Dialog open={open} onClose={handleClose} className={classes.dialog}>
            <DialogTitle className={classes.title}>Details</DialogTitle>
            <DialogContent className={classes.content}>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Operation ID:   </span>
                    <span className={classes.labelValue}>{dialogData.OperationID}</span>
                </div>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Collection Location Name:   </span>
                    <span className={classes.labelValue}>{dialogData.CollectionLocationName}</span>
                </div>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Collection Location Address:    </span>
                    <span className={classes.labelValue}>{dialogData.CollectionLocationAdress}</span>
                </div>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Delivery Location Name: </span>
                    <span className={classes.labelValue}>{dialogData.DeliveryLocationName}</span>
                </div>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Delivery Location Address:  </span>
                    <span className={classes.labelValue}>{dialogData.DeliveryLocationAdress}</span>
                </div>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Customer Name:  </span>
                    <span className={classes.labelValue}>{dialogData.CustomerName}</span>
                </div>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Driver Name:    </span>
                    <span className={classes.labelValue}>{dialogData.DriverName}</span>
                </div>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Transport Number:   </span>
                    <span className={classes.labelValue}>{dialogData.TransportNumber}</span>
                </div>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Schedule:   </span>
                    <span className={classes.labelValue}>{dialogData.Schedule}</span>
                </div>
                <div className={classes.labelContainer}>
                    <span className={classes.labelName}>Price:  </span>
                    <span className={classes.labelValue}>{dialogData.Price}</span>
                </div>
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button onClick={handleClose} color="primary" autoFocus className={classes.closeButton}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default DetailsDialog;
