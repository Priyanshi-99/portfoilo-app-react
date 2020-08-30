import React from 'react'
import Navbar from "./Navbar"
import pdf from './Priyanshi.pdf'
import Pic from "./gslogo.png";






const Resume = () =>{
    
    return(
         <div> 
            <Navbar/>
            <div className="container" style={{textAlign: "center"}}>
            <img src ={Pic} style={{height: "240px", width:"300px"}}></img><br /><br />
            <a href = {pdf} className="btn btn-lg btn-primary" style={{justifyContent: "center", background: "black"}}>View My Resume</a>
            </div>
        </div>
        
        
        

    )
}
export default Resume;