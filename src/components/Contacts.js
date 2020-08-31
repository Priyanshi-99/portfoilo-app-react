import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TextField, Typography,Grid, Button, Box} from '@material-ui/core'
import SendIcon from "@material-ui/icons/Send"
import Navbar from './Navbar'

const useStyles = makeStyles(theme =>({
    form: {
        top: "20%",
        bottom: "50%",
        justify: "center",
        transform: "translate("-50%","-50%")",
        position: "absolute",
        
    },
    button:{
        marginTop: "1rem",
        borderColor: "red",
        color: "red"
    }
}))


const InputField = withStyles({

    
    root: {
        "& label,Mui-focused":{
            color:"tomato"
            
        },
        "& label":{
            color: "tan"
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset" :{
                borderColor: "tan",
            },
        "&:hover fieldset":{
            borderColor:"tan"
        },
        "& .Mui-focused-fieldset":{
            borderColor: "tan"


        },
        

        },
}})(TextField);
const Contacts = () =>{

    const classes = useStyles()
    return(
        
        <div >
            <Navbar/>
            <Box component="div">
                <Grid container justify='center'>
                    <Box component='form' className={classes.form}>
                        
                        <Typography variant = "h5" style={{color: "white", textAlign:"center", textTransform:"uppercase"}}>
                            Hire or Contact Me
                        </Typography>
                        <InputField
                        fullwidth={true}
                        label="Name"
                        variant="outlined"
                        inputProps={{style:{color:"white",width:"240px"}}}
                        margin="dense" size="large"/><br></br>
                        <InputField
                        fullwidth={true}
                        label="Email"
                        variant="outlined"
                        inputProps={{style:{color:"white",width:"240px"}}}
                        margin="dense" size="large"
                        /><br></br>                        
                        <InputField
                        fullwidth={true}
                        label="Company Name"
                        variant="outlined"
                        inputProps={{style:{color:"white",width:"240px"}}}
                        margin="dense" size="large"
                        /><br></br>
                        <Button variant="outlined" fullWidth={true} endIcon={<SendIcon />} className={classes.button}>Contact Me</Button>
                        
                    </Box>
                </Grid>

            </Box>
        </div>

    )
}

export default Contacts;