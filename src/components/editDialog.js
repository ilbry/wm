import React, {useState} from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {Button, TextField} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';

const DialogStyle = makeStyles(theme => ({
    dialog: {
        minWidth: 400,
    },
    title: {
        backgroundColor: '#008000',
        color: '#fff',
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    content: {
        padding: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minWidth: 400,
    },
    actions: {
        padding: theme.spacing(2),
        justifyContent: 'center',
    },
    closeButton: {
        color: theme.palette.error.main,
    },
    saveButton: {
        backgroundColor: '#4CAF50',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#388E3C',
        },
    },
    labelText: {
        marginBottom: theme.spacing(1),
        fontWeight: 'bold',
        color: '#000',
    },
    label: {
        marginBottom: theme.spacing(1),
        fontWeight: 'bold',
        color: '#008000',
    },
    inputField: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
}));

const EditDialog = ({open, handleClose, dialogData}) => {
    const classes = DialogStyle();
    const [formData, setFormData] = useState(dialogData);

    const handleInputChange = (event, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: event.target.value
        });
    };

    const handleSave = () => {

        fetch(`http://localhost:8090/api/updateOperation/${dialogData.OperationID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {

                console.log(response);

                handleClose();
            })
            .catch(error => {

                console.error('Error:', error);
            });
    };

    return (
        <Dialog open={open} onClose={handleClose} className={classes.dialog}>
            <DialogTitle className={classes.title}>Edit</DialogTitle>
            <DialogContent className={classes.content}>
                <div className={classes.labelText}>
                    Operation ID: {formData.OperationID}
                </div>
                <div className={classes.label}>
                    Collection Location Name:
                </div>
                <TextField
                    className={classes.inputField}
                    value={formData.CollectionLocationName}
                    onChange={(e) => handleInputChange(e, "CollectionLocationName")}
                />
                <div className={classes.label}>
                    Collection Location Address:
                </div>
                <TextField
                    className={classes.inputField}
                    value={formData.CollectionLocationAdress}
                    onChange={(e) => handleInputChange(e, "CollectionLocationAdress")}
                />
                <div className={classes.label}>
                    Delivery Location Name:
                </div>
                <TextField
                    className={classes.inputField}
                    value={formData.DeliveryLocationName}
                    onChange={(e) => handleInputChange(e, "DeliveryLocationName")}
                />
                <div className={classes.label}>
                    Delivery Location Address:
                </div>
                <TextField
                    className={classes.inputField}
                    value={formData.DeliveryLocationAdress}
                    onChange={(e) => handleInputChange(e, "DeliveryLocationAdress")}
                />
                <div className={classes.label}>
                    Customer Name:
                </div>
                <TextField
                    className={classes.inputField}
                    value={formData.CustomerName}
                    onChange={(e) => handleInputChange(e, "CustomerName")}
                />
                <div className={classes.label}>
                    Driver Name:
                </div>
                <TextField
                    className={classes.inputField}
                    value={formData.DriverName}
                    onChange={(e) => handleInputChange(e, "DriverName")}
                />
                <div className={classes.label}>
                    Transport Number:
                </div>
                <TextField
                    className={classes.inputField}
                    value={formData.TransportNumber}
                    onChange={(e) => handleInputChange(e, "TransportNumber")}
                />
                <div className={classes.label}>
                    Schedule:
                </div>
                <TextField
                    className={classes.inputField}
                    value={formData.Schedule}
                    onChange={(e) => handleInputChange(e, "Schedule")}
                />
                <div className={classes.label}>
                    Price:
                </div>
                <TextField
                    className={classes.inputField}
                    value={formData.Price}
                    onChange={(e) => handleInputChange(e, "Price")}
                />
            </DialogContent>
            <DialogActions className={classes.actions}>
                <Button onClick={handleClose} color="primary" className={classes.closeButton}>
                    Close
                </Button>
                <Button onClick={handleSave} color="primary" className={classes.saveButton}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default EditDialog;
