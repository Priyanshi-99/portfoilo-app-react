import React from 'react'
import { makeStyles } from '@material-ui/core'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';

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
             icon={<Facebook/>}
            />
            <BottomNavigationAction className={classes.root} style={{padding:0}}
             icon={<Instagram/>}
            />
            <BottomNavigationAction className={classes.root} style={{padding:0}}
             icon={<Twitter/>}
             
            />
            {/* <BottomNavigationAction className={classes.root} style={{padding:0}}
             icon={<Github/>}
            /> */}
                

        </BottomNavigation>
    )
}


export default Footer;