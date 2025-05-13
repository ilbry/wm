import logo from '../logo.svg';
import logoMobile from '../logoMobile.svg';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appBar: {
        backgroundColor: '#95EDA0',
    },
    bar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0.5rem 2rem',
        '@media (max-width:780px)': {
            flexDirection: 'column',
        },
    },
    logo: {
        width: '5%',
        '@media (max-width:780px)': {
            display: 'none',
        },
    },
    logoMobile: {
        width: '100%',
        display: 'none',
        '@media (max-width:780px)': {
            display: 'inline-block',
        },
    },
    menuItem: {
        cursor: 'pointer',
        flexGrow: 1,
        '&:hover': {
            color: '#4f25c8',
        },
        '@media (max-width:780px)': {
            paddingBottom: '1rem',
        },
    },
});

function NavBar() {
    const classes = useStyles();

    return (
        <AppBar position="sticky" className={classes.appBar} elevation={0}>
            <Toolbar className={classes.bar}>
                <img src={logo} className={classes.logo} alt="desktop logo" />
                <img src={logoMobile} className={classes.logoMobile} alt="mobile logo" />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
