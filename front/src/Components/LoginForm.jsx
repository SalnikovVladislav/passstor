import React from 'react';
import axios from 'axios';


export default class LoginForm extends React.Component {
    state = {
        username: '',
        user_password: '',
        username2: '',
        user_password2: '',
        email: '',
        token: localStorage.getItem('Token '),
        error: ''
    }

    handleChange = event => {
        this.setState({ username: event.target.value });
    }

    handleChange2 = event => {
        this.setState({ user_password: event.target.value });
    }
    handleChange3 = event => {
        this.setState({ username2: event.target.value });
    }
    handleChange4 = event => {
        this.setState({ user_password2: event.target.value });
    }
    handleChange5 = event => {
        this.setState({ email: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        axios.post("http://185.45.192.200:8000/api/v1/auth_token/token/login",{
        password: this.state.user_password,
        username: this.state.username
        })
        .then(res => {
            localStorage.setItem('Token ', res.data.auth_token);
            localStorage.setItem('Page', "Phrase");
            window.location.reload()
        })
        .catch(err => {
            this.setState({ error: err.message });
        });
    }
    handleSubmit2 = event => {
        event.preventDefault();
        if(this.state.user_password2.length < 1 && this.state.username2.length < 1 && this.state.email.length < 1){
            console.log("asd");
        } else{
            axios.post("http://185.45.192.200:8000/api/v1/auth/users/",{
            email: this.state.email,
            username: this.state.username2,
            password: this.state.user_password2
            })
            .then(res => {
                axios.post("http://185.45.192.200:8000/api/v1/auth_token/token/login",{
                password: this.state.user_password2,
                username: this.state.username2
                })
                .then(res => {
                    localStorage.setItem('Token ', res.data.auth_token);
                    localStorage.setItem('Page', "Phrase");
                    window.location.reload()
                })
                .catch(err => {
                    this.setState({ error: err.message });
                });
            })
            .catch(err => {
                this.setState({ error: err.message });
            });
        }
    }

    change1 = event => {
        event.preventDefault();
        document.getElementById('container').classList.remove("right-panel-active");
    }
    change2 = event => {
        event.preventDefault();
        document.getElementById('container').classList.add("right-panel-active");
    }

  render() {
    if (localStorage.getItem('Token ') === null && localStorage.getItem('Page') != "main"){
        return (
            <main>
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form onSubmit={this.handleSubmit2}>
                            <h1>Create Account</h1>
                            <input type="text" placeholder="Login" onChange={this.handleChange3}/>
                            <input type="email" placeholder="Email" onChange={this.handleChange5}/>
                            <input type="password" placeholder="Password" onChange={this.handleChange4}/>
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={this.handleSubmit}>
                            <h1>Sign in</h1>
                            <input type="text" placeholder="Login" onChange={this.handleChange}/>
                            <input type="password" placeholder="Password" onChange={this.handleChange2}/>
                            <button>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={this.change1}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, User!</h1>
                                <p>Enter your personal details and start <br /> journey with us</p>
                                <button className="ghost" id="signUp" onClick={this.change2}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>{this.state.error}</h2>
            </main>
            
        )
    }
    else{
    }
    
  }
}
