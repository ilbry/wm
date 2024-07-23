import React, {useEffect, useState} from "react";
import "../App.css";
import NavBar from "../components/navBar";
import GridOperations from "../components/gridOperations";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Sidebar from "../components/sidebar";
import {createTheme, ThemeProvider, Typography, TextField} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#268b4d"
        },
        secondary: {
            main: "#71bd23"
        }
    },
    typography: {
        fontFamily: ["Roboto"],
        h4: {
            fontWeight: 600,
            fontSize: 28,
            lineHeight: "2rem"
        },
        h5: {
            fontWeight: 100,
            lineHeight: "2rem"
        }
    }
});

const operationsStyles = makeStyles({
    wrapper: {
        width: "40%",
        margin: "auto",
        textAlign: "center"
    },
    bigSpace: {
        marginTop: "15rem"
    },
    mediumSpace: {
        marginTop: "5rem"
    },
    grid: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        "@media (max-width: 770px)": {
            width: "33.33%"
        },
        "@media (max-width: 580px)": {
            width: "100%"
        }
    },
    gridItem: {
        width: "25%",
        margin: "0.09rem",
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "1rem",
        "@media (max-width: 768px)": {
            width: "45%"
        },
        "@media (max-width: 576px)": {
            width: "100%"
        }
    },
    searchBar: {
        width: "50%",
        margin: "auto",
        marginBottom: "2rem",
        marginTop: "2rem"
    }
});

export default function OperationsPage() {
    const classes = operationsStyles();
    const [operations, setOperations] = useState([]);
    const [filteredOperations, setFilteredOperations] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {

            return;
        }

        fetch("http://localhost:8090/api/getShortOperations", {
        })
            .then((response) => {
                if (!response.ok) {

                    throw new Error('Unauthorized');
                }
                return response.json();
            })
            .then((data) => {
                setOperations(data);
                setFilteredOperations(data);
            })
            .catch((error) => console.error("Error fetching operations:", error));
    }, []);

    const handleSearch = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const filtered = operations.filter((operation) =>
            operation.OperationID.toString().toLowerCase().startsWith(searchTerm)
        );
        setFilteredOperations(filtered);
    };

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <NavBar/>
                <Sidebar/>
                <Typography variant="h3" className={classes.bigSpace} color="primary">
                    Here you can see your current contracts.
                </Typography>
                <div className={classes.searchBar}>
                    <TextField
                        id="search"
                        label="Search"
                        variant="outlined"
                        fullWidth
                        onChange={handleSearch}
                    />
                </div>
                <div className={`${classes.grid} ${classes.mediumSpace}`}>
                    {filteredOperations.map((operation) => (
                        <div key={operation.OperationID} className={classes.gridItem}>
                            <GridOperations
                                icon={
                                    <LocalShippingIcon
                                        style={{fill: "#71bd23", height: "125", width: "125"}}
                                    />
                                }
                                OperationID={`OperationID: ${operation.OperationID}`}
                                CustomerName={`CustomerName: ${operation.CustomerName}`}
                                DriverName={`DriverName: ${operation.DriverName}`}
                                id={`${operation.OperationID}`}
                            />
                        </div>
                    ))}
                </div>
                <div className={classes.bigSpace}>
                </div>
            </ThemeProvider>
        </div>
    );
}
