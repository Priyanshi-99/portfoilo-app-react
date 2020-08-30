import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import Footer from './Footer'
import MobileRightMenuSlider from '@material-ui/core/Drawer'
import{
    AppBar,Toolbar,ListItem,IconButton,ListItemText,ListItemIcon,Divider,List,Typography,Box
} from '@material-ui/core'

import {
    ArrowBack,
    AssignmentInd,
    Home,ContactMail
} from '@material-ui/icons'

const useStyles = makeStyles({
    menuSlider: {
        width:250,
        background: 'linear-gradient(to right bottom, #FE6B8B, #FF8E53)',
        height: "100%"
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
                            <ListItemIcon>
                            {lsitem.listIcon}
                            </ListItemIcon>
                            <ListItemText primary={lsitem.listtext}/>
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
                                <ArrowBack style={{color:"tomato"}}>
                                
                                </ArrowBack>
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