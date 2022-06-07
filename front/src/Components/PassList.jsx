import React, { useState } from "react";
import axios from 'axios';
import ediyt from './ediyt.svg';
import eye from './eye.svg';

function opa(asd){
    localStorage.setItem("Page", asd)
    window.location.reload();
}

function updates(){
    localStorage.setItem("Page", "passes");
	localStorage.removeItem('getpass');
	localStorage.removeItem('Count');
	window.location.reload();
}
function addform(){
    localStorage.setItem("Page", "add");
	localStorage.removeItem('getpass');
    localStorage.removeItem('Count');
	window.location.reload();
}
function refSecret(){
    localStorage.setItem("Page", "Phrase");
	localStorage.removeItem('Phr');
    localStorage.removeItem('getpass');
    localStorage.removeItem('Count');
	window.location.reload();
}
function dec(pas){
    require("pidcrypt/seedrandom")
    var pidCrypt = require("pidcrypt")
    require("pidcrypt/aes_cbc")
    var aes = new pidCrypt.AES.CBC()
    var decrypted = aes.decryptText(pas, localStorage.getItem("Phr"));
    return decrypted
}
function del(id){
    axios.delete("http://185.45.192.200:8000/api/v1/passwordstorage/passcell/detail/" + id + "/", {headers: {
            Authorization: "Token " + localStorage.getItem("Token "),
        }})
        .then(res => {
            localStorage.setItem("Page", "passes");
            localStorage.removeItem('getpass');
            localStorage.removeItem('Count');
            window.location.reload();
        })
        .catch(err => {
            console.log(err);
        });
}

function PassList() {
    const [PassL, setPassl] = useState([]);
    const [curPass, setcurPass] = useState();

    if (localStorage.getItem('Token ') === null){
        return
    }
    console.log(localStorage.getItem("Count"))
    if(PassL.length === 0 && localStorage.getItem("Page") === "passes" && (localStorage.getItem("Count") == null || localStorage.getItem("Count") == undefined) && localStorage.getItem("getpass") == undefined){
        axios.get("http://185.45.192.200:8000/api/v1/passwordstorage/all/", {headers: {
            Authorization: "Token " + localStorage.getItem("Token "),
        }})
        .then(res => {
            setPassl(res.data);
            localStorage.setItem("Count", res.data.length);
            localStorage.setItem("getpass", "ok");
        })
        .catch(err => {
            console.log(err);
        });
        return
    }
    if(curPass == undefined && localStorage.getItem("Page") != "passes" && localStorage.getItem("Page") != "add" && localStorage.getItem("Page") != "Phrase"){
        axios.get("http://185.45.192.200:8000/api/v1/passwordstorage/passcell/detail/" + localStorage.getItem("Page") + "/", {headers: {
            Authorization: "Token " + localStorage.getItem("Token "),
        }})
        .then(res => {
            setcurPass(res.data)
        })
        .catch(err => {
            console.log(err);
        });
        return
    }
    if(curPass != undefined && localStorage.getItem("Page") != "passes" && localStorage.getItem("getpass") == "ok"){
        return(
            <div className="detPass">
                <div className="passTitle">
                    <p>
                        Detail Password
                    </p>
                </div>
                <div className="detailPass">

                    <div className="ppTitle">
                        <p>
                            Current Password
                        </p>
                    </div>
                    <div className="ppInfo">
                        <p onClick={() => window.navigator.clipboard.writeText(curPass.service)}><span>Service:&nbsp;&nbsp;</span>{curPass.service}</p>
                        <p onClick={() => window.navigator.clipboard.writeText(curPass.login)}><span>Login:&nbsp;&nbsp;</span>{curPass.login}</p>
                        <p onClick={() => window.navigator.clipboard.writeText(curPass.user_password)}><span>Password:&nbsp;&nbsp;</span>{dec(curPass.user_password)}</p>
                        <p onClick={() => window.navigator.clipboard.writeText(curPass.notes)} ><span>Notes:&nbsp;&nbsp;</span>{curPass.notes}</p>
                    </div>
                    
                </div>
            </div>
        ) 
    }
    if(localStorage.getItem("Count") > 0 && localStorage.getItem("Page") === "passes"){
        return (
            <div className="asd">
                <div className="urpass">
                <div class="passTitle">
                    <p>
                        Your passwords:
                    </p>
			    </div>
                <div className="passGrid">
                    {Object.keys(PassL).map(item=><div className="elem">
                        <div className="leftelem">
                            <p>{PassL[item].service}</p>
                        </div>
                        <a onClick={() => opa(PassL[item].id)}><img src={eye} alt="" /></a>
                        <a onClick={() => del(PassL[item].id)}><img src={ediyt} alt="" /></a>
                    </div>)}
                </div>
                </div>
                <div className="updadd">
                    <button onClick={() => updates() }>Update</button>
                    <button onClick={() => addform() }>Add</button>
                    <button onClick={() => refSecret() }>Change phrase</button>
                </div>
                
            </div>
            
        )
    }
    if((localStorage.getItem("Count") == "0" || localStorage.getItem("Count") == undefined ) && localStorage.getItem("Page") == "passes"){
        return(
            <div className="empytacc">
                <p>You have no passwords</p>
                <button onClick={() => addform() }>Add</button>
            </div>
            
        )
    }
}

export default PassList

