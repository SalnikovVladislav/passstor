import React from 'react';
import axios from 'axios';
import pidCrypt from 'pidcrypt/pidcrypt';
import pidCryptUtil from 'pidcrypt/pidcrypt_util';


export default class AddForm extends React.Component {
    state = {
        service: '',
        login: '',
        password: '',
        notes: '',
        error: '',
    }
    handleChange1 = event => {
        this.setState({ service: event.target.value });
    }
    handleChange2 = event => {
        this.setState({ login: event.target.value });
    }
    handleChange3 = event => {
        require("pidcrypt/seedrandom")
            var pidCrypt = require("pidcrypt")
            require("pidcrypt/aes_cbc")
            var aes = new pidCrypt.AES.CBC()
            var pw =  localStorage.getItem("Phr");
            var encrypted = aes.encryptText(event.target.value, pw); 
        this.setState({ password: encrypted });
    }
    handleChange4 = event => {
        this.setState({ notes: event.target.value });
    }
    handleSubmit1 = event => {
        event.preventDefault();
        axios({
            url: "http://185.45.192.200:8000/api/v1/passwordstorage/passcell/create/",
            method: "post",
            data:{
                service: this.state.service,
                login: this.state.login,
                user_password: this.state.password,
                notes: this.state.notes,
                },
            headers:{
                Authorization: "Token " + localStorage.getItem("Token "),
            }
        })
        .then(res => {
            localStorage.setItem('Page', "passes");
            console.log(res.data)
            window.location.reload()
        })
        .catch(err => {
            this.setState({ error: err.message });
        });
    }
  render() {
    if (localStorage.getItem('Page') === "add" && localStorage.getItem('Phr') != undefined){
        return (
            <div className="qwe">
                <form action="" className="decor" onSubmit={this.handleSubmit1}>
                    <div className="form-left-decoration"></div>
                    <div className="form-right-decoration"></div>
                    <div className="circle"></div>
                    <div className="form-inner">
                        <h3>Add Password</h3>
                        <input type="text" placeholder="Service" maxLength="13" onChange={this.handleChange1}/>
                        <input type="text" placeholder="Login" maxLength="127" onChange={this.handleChange2}/>
                        <input type="text" placeholder="Password" maxLength="128" onChange={this.handleChange3}/>
                        <textarea placeholder="Notes..." rows="3" onChange={this.handleChange4}></textarea>
                        <input type="submit" value="Add"/>
                    </div>
                </form>
                <h2>{this.state.error}</h2>
            </div>  
        )
    }
    else{
        return
    }
    
  }
}
