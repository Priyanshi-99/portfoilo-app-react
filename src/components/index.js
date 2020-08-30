import React from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    particlesCanva:{
        position: "absolute",
        opacity: "0.5"
    }
})

const Home = () =>{

    const classes = useStyles();
    return (
      <>
       
       <Navbar/>
       <Header/>
       <Particles canvasClassName={classes.particlesCanva} params= {{
           particles:{
               number:{
                   value:45,
                   density:{
                       enable:false,
                       value_area : 1024
                   }
               },
               shape:{
                   type: "circle",
                   stroke:{
                       width:2,
                       color: "black"

                   }
               },
               size:{
                   value: 8,
                   random:true,
                   anim:{
                       enable:true,
                       speed:5,
                       size_min:0.1,
                       sync:true
                   }
               },
               opacity:{
                   value: 1,
                   random: true,
                   anim: {
                       enable: false,
                       speed:6
                   }
                
               }
           }
       }}
       />
      </>
    )
}
export default Home;