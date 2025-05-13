import React, { useEffect, useState } from "react";
import "../App.css";
import NavBar from "../components/navBar";
import GridOperations from "../components/gridOperations";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Sidebar from "../components/sidebar";
import { createTheme, ThemeProvider, Typography, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

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

const operationsStyles = makeStyles((theme) => ({
    wrapper: {
        width: "90%",
        margin: "auto",
        textAlign: "center"
    },
    bigSpace: {
        marginTop: "4rem"
    },
    mediumSpace: {
        marginTop: "2rem"
    },
    grid: {
        display: "grid",
        gap: "4.5rem",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        padding: "0 2rem",
        justifyItems: "center"
    },
    searchBar: {
        width: "50%",
        margin: "2rem auto"
    },
    contentWrapper: {
        display: "flex",
        flexDirection: "column",
        marginLeft: 240, 
        padding: "1rem",
        flexGrow: 1
    }
}));

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
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
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
                <NavBar />
                <Sidebar />
                <div className={classes.contentWrapper}>
                    <Typography variant="h4" className={classes.bigSpace} color="primary">
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
                    <div className={classes.grid}>
                        {filteredOperations.map((operation) => (
                            <GridOperations
                                key={operation.OperationID}
                                icon={<LocalShippingIcon style={{ fill: "#71bd23", height: 125, width: 125 }} />}
                                OperationID={operation.OperationID}
                                CustomerName={operation.CustomerName}
                                DriverName={operation.DriverName}
                                id={operation.OperationID}
                            />
                        ))}
                    </div>
                </div>
            </ThemeProvider>
        </div>
    );
}
