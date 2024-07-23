import '../App.css';
import NavBar from "../components/navBar";
import Grid from "../components/gridOperations";
import {createTheme , ThemeProvider, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Sidebar from "../components/sidebar";
import {useEffect, useState} from "react";

const theme = createTheme ({
    palette: {
        primary: {
            main: '#268b4d',
        },
        secondary: {
            main: '#71bd23',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
        ],
        h4: {
            fontWeight: 600,
            fontSize: 28,
            lineHeight: '2rem',
        },
        h5: {
            fontWeight: 100,
            lineHeight: '2rem',
        },
    },
});

const styles = makeStyles({
    wrapper: {
        width: "65%",
        margin: "auto",
        textAlign: "center"
    },
    bigSpace: {
        marginTop: "15rem"
    },
    littleSpace: {
        marginTop: "2.5rem",
    },
    grid: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
    },
})

export default function ContactPage() {
    const classes = styles();
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8090/api/Operations')
            .then(response => response.json())
            .then(data => {
                setOperations(data);
            })
            .catch(error => console.error('Error fetching operations:', error));
    }, []);

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <NavBar />
                <Sidebar />
                <Typography variant="h3" className={classes.bigSpace} color="primary">
                    Here you can see your current contracts. Click "Request change" if you are unhappy with
                    something
                </Typography>
                <div className={`${classes.grid} ${classes.bigSpace}`}>
                    {operations.map(operation => (
                        <Grid
                            icon={<LocalShippingIcon style={{ fill: "#71bd23", height: "125", width: "125" }} />}
                            CollectionLocationID={`CollectionLocationID: ${operation.CollectionLocationID}`}
                            CustomerID={`CustomerID: ${operation.CustomerID}`}
                            DeliveryLocationID={`DeliveryLocationID: ${operation.DeliveryLocationID}`}
                            DriverID={`DriverID: ${operation.DriverID}`}
                            OperationID={`OperationID: ${operation.OperationID}`}
                            Price={`Price: ${operation.Price}`}
                            Schedule={`Schedule: ${operation.Schedule}`}
                            TransportID={`TransportID: ${operation.TransportID}`}
                            btnTitle="Request change"
                        />
                    ))}
                </div>
                <div className={classes.bigSpace}>
                </div>
            </ThemeProvider>
        </div>
    );
}