import React, { useState } from "react";
import axios from 'axios';
import safe from './safe.svg';
import safe2 from './safe2.svg';
import lock from './lock.svg';


function About() {
    if (localStorage.getItem("Page") === "main"){
        return (
            <div className="anout">
                <div className="aboutus">
                    <div className="TitleAb">
                        <p>Welcome</p>
                    </div>
                </div>
                
                <div className="oictures">
                    
                    <div className="infoAb">
                        
                        <p>
                        Your safety comes first for us.<br/><hr /><br/> Save the password once and it will be instantly available on all your devices.<br/><hr /><br/>
                        We store passwords in encrypted form.<br/><hr /><br/> Encryption and decryption takes place already at the client.<br/><hr />
                        </p>
                        <div className="dfg">
                    <img src={lock} alt="" sstyle={{ background : "white"}} />
                    <img src={safe2} alt="" style={{background: "blue"}}/>
                    <img src={safe} alt="" style={{background: "red"}}/>
                </div>
                    </div>
                    
                </div>
                
                
                
            </div>
            
        )
    }
}

export default About
