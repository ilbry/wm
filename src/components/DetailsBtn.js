import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DetailsDialog from './detailsDialog';

const StyledButton = withStyles({
    root: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "44px",
        padding: "0 25px",
        boxSizing: "border-box",
        borderRadius: 0,
        background: "#008000",
        color: "#FFFFFF",
        margin: '10px',
        transform: "none",
        boxShadow: "6px 6px 0 0 #c7d8ed",
        transition: "background .3s,border-color .3s,color .3s",
        "&:hover": {
            backgroundColor: "#4f25f7"
        },
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

function DetailsBtn({ operationID }) {
    const [open, setOpen] = useState(false);
    const [dialogData, setDialogData] = useState(null);

    const handleClickToOpen = async () => {
        try {
            const response = await fetch(`http://localhost:8090/api/getOperation/${operationID}`);
            const data = await response.json();
            setDialogData(data[0]);
            setOpen(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <StyledButton variant="outlined" color="primary" onClick={handleClickToOpen}>
                Details
            </StyledButton>
            {dialogData && (
                <DetailsDialog open={open} handleClose={handleClose} dialogData={dialogData} />
            )}
        </div>
    );
}

export default DetailsBtn;
