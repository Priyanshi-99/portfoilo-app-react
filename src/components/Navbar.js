import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Footer from './Footer'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import{
    AppBar,Toolbar,ListItem,IconButton,ListItemText,ListItemIcon,Divider,List,Typography,Box
} from '@material-ui/core'

import {
    AssignmentInd,
    Home,ContactMail
} from '@material-ui/icons'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    menuSlider: {
        width:250,
        background: 'linear-gradient(to right bottom, #ED4264, #FFEDBC)',
        height: "100%"
    },
    text:{
        color:"white" 
    }
    
})

const menuItems = [
    {
        listIcon: <Home />,
        listtext: "Home",
        listpath: "/"
        
    },
    {
        listIcon: <AssignmentInd />,
        listtext: "Resume",
        listpath: "/resume"
    },
    {
        listIcon: <ContactMail />,
        listtext: "Contacts",
        listpath: "/contacts"
    }
    
]


const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = ((slider, open) => {
        setState({...state, [slider]: open});

    });
    const classes = useStyles();
    const slidelist = slider => (
        <Box className={classes.menuSlider} component="div">
            <Divider/>
               <List>
                    {menuItems.map((lsitem,key) =>(
                        <ListItem button key={key} component={Link} to={lsitem.listpath}>
                            <ListItemIcon className={classes.text} >
                            {lsitem.listIcon}
                            </ListItemIcon>
                            <ListItemText primary={lsitem.listtext} className={classes.text}/>
                        </ListItem>
                    )
                    )}
            
                </List>
        </Box>

    )
    return (
       <>
            
            <Box component='nav'>
                <AppBar position='static' style={{background: "black"}}>
                        <Toolbar>
                            <IconButton onClick ={() => toggleSlider("right", true)}>
                                <MenuIcon style={{color:"tomato"}}>
                                
                                </MenuIcon>
                            </IconButton>
                            <Typography Varient ="h6" style={{ color: "Grey"}}>Portfolio
                            </Typography>
                             <MobileRightMenuSlider anchor="right" open={state.right} onClose={() => toggleSlider("right", false)}>
                                 {slidelist("right")}

                                 <Footer/>
                             </MobileRightMenuSlider>
                        </Toolbar>
                </AppBar>
              </Box>
        </>
    )

}
export default Navbar;