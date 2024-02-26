import React from 'react'
import CustomBtn from './customBtn'
import logo from '../logo.svg'
import logoMobile from '../logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar: {
        paddingTop: "1.15rem",
        backgroundColor: "#95EDA0",
        '@media (max-width:780px)': {
            flexDirection: "column"
        }
    },
    logo: {
        width: "5%",
        '@media (max-width:780px)': {
            display: "none"
        }
    },
    logoMobile: {
        width: "100%",
        display: "none",
        '@media (max-width:780px)': {
            display: "inline-block"
        }
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        "&:hover": {
            color: "#4f25c8"
        },
        '@media (max-width:780px)': {
            paddingBottom: "1rem"
        }
    }
})

function NavBar() {
    const classes = styles()
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <img src={logo} className={classes.logo} alt={'error'}/>
            <img src={logoMobile} className={classes.logoMobile} alt={'error'}/>
        </Toolbar>
    )
}

export default NavBar
