import React from 'react'
import Typed from 'react-typed'
import { makeStyles } from '@material-ui/core/styles'
import{ Typography } from '@material-ui/core'
import Box from '@material-ui/core/Box';
import Logo from './dp.jpg'


const useStyles = makeStyles(theme =>({
    
    title: {
        color: "#ED4264",
        fontFamily: "Courier" 
        
    },
    subtitle:{
        color: "white",
        marginBottom: "3rem",
        fontFamily: "Verdana"
    },
    typedContainer:{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign:"center",
        
    }
}))


const Header = () =>{
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <img src ={Logo} style={{height: "300px", width:"300px"}}></img><br /><br />
            
            <Typography className={classes.title} variant="h4" >
               <Typed strings={["(Hello World); I am Priyanshi Nigam...."]} typeSpeed={40}></Typed>

            </Typography>
            <br />
            <br />
            <Typography variant="h5" className={classes.subtitle}>
               <Typed strings={["Web Developer", "Web Designer","Big Data Engineer",]} typeSpeed={40} backSpeed={60} loop
               />
                
            </Typography>
        </Box>
    )
}
export default Header;