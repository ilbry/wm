import './App.css';
import NavBar from "./components/navBar";
import Grid from "./components/grid";
import Footer from "./components/footer";
import {createMuiTheme, ThemeProvider, Typography} from "@mui/material";
import {makeStyles} from "@material-ui/core/styles";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Sidebar from "./components/sidebar";

const theme = createMuiTheme({
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

function App() {
    const classes = styles();

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <NavBar/>
                <Sidebar/>
                <div className={classes.wrapper}>
                    <Typography variant="h3" className={classes.bigSpace} color="primary">
                        Here you can see your current contracts. Click "Request change" if you are unhappy with
                        something
                    </Typography>
                </div>
                <div className={`${classes.grid} ${classes.bigSpace}`}>
                    <Grid icon={<LocalShippingIcon style={{fill: "#71bd23", height: "125", width: "125"}}/>}
                          title="Contract1" wasteType='Waste type: organic' location='Location: Wood st 2'
                          schedule='Schedule: Thursday 8:00' btnTitle="Request change"/>
                    <Grid icon={<LocalShippingIcon style={{fill: "#71bd23", height: "125", width: "125"}}/>}
                          title="Contract2" wasteType='Waste type: paper' location='Location: Western ave 4'
                          schedule='Schedule: Monday 6:00' btnTitle="Request change"/>
                    <Grid icon={<LocalShippingIcon style={{fill: "#71bd23", height: "125", width: "125"}}/>}
                          title="Contract3" wasteType='Waste type: wood' location='Location: Twyn Sych 1'
                          schedule='Schedule: Friday 7:00' btnTitle="Request change"/>
                </div>
                <div className={classes.bigSpace}>
                    <Footer/>
                </div>
            </ThemeProvider>
        </div>
    );
}

export default App;
