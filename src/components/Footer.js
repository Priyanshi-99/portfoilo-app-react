import React from 'react'
import { makeStyles } from '@material-ui/core'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root: {
        "& .MulBottomNavigation": {
            minwidth:0,
            maxwidth:250,

        },
        "& .MuiSvgIcon-root":{
            fill: "tan",
            "&:hover":{
                fill:"tomato",
                fontSize: "1.8rem",

            },
        }
    }

})
const Footer = () =>{

    const classes = useStyles();
    
    return(
        
        <BottomNavigation width="auto" style={{background:"black"}}>
            <BottomNavigationAction className={classes.root} style={{padding:0}}
             icon={<Facebook/>} target="_blank" href="https://www.facebook.com/pnpriyanshi"
            />
            <BottomNavigationAction className={classes.root} style={{padding:0}}
             icon={<LinkedInIcon/>} target="_blank" href="https://www.linkedin.com/in/priyanshi-nigam-bb21ab14b/"
            />
            <BottomNavigationAction className={classes.root} style={{padding:0}}
             icon={<GitHubIcon/>} target="_blank" href="https://github.com/Priyanshi-99"
             
            />
            {/* <BottomNavigationAction className={classes.root} style={{padding:0}}
             icon={<Github/>}
            /> */}
                
                

        </BottomNavigation>
    )
}


export default Footer;