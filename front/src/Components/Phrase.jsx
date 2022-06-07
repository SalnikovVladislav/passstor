import React from 'react';
import axios from 'axios';


export default class Phrase extends React.Component {
    state = {
        phrase: '',
    }
    handleChange1 = event => {
        this.setState({ phrase: event.target.value });
    }
    handleSubmit1 = event => {
        event.preventDefault();
        localStorage.setItem("Phr", this.state.phrase)
        localStorage.setItem("Page", "passes")
        window.location.reload();
    }
  render() {
    if (localStorage.getItem('Page') === "Phrase" && localStorage.getItem('Token ') != undefined){
        return (
            <div className="qwe">
                <form action="" className="decor" onSubmit={this.handleSubmit1}>
                    <div className="form-left-decoration"></div>
                    <div className="form-right-decoration"></div>
                    <div className="circle"></div>
                    <div className="form-inner">
                        <h3>Input Secret Phrase</h3>
                        
                        <input type="text" placeholder="Secret phrase" minLength="5" required maxLength="25" onChange={this.handleChange1}/>
                        <input type="submit" value="Add"/>
                        
                    </div>
                </form>
                <p>We don't keep your secret phrase. <br /><br />
                            It is used to encrypt/decrypt your passwords. <br /><br />
                            If you see an empty field in the password box, it means that the phrase you entered at the current login is different from the one you entered when you added this password to the manager. <br /><br />
                            If you have forgotten the secret phrase, it means that you have lost access to the password created with it.</p>
            </div>  
        )
    }
    else{
        return
    }
    
  }
}
