import React from 'react'
import logo from './logo.svg';
import ques from './ques.svg';

const Header = () => {
	function logout(){
		localStorage.removeItem('Token ');
		localStorage.removeItem('Count');
		localStorage.removeItem('getpass');
		localStorage.removeItem('Page');
		localStorage.removeItem('Phr');
		window.location.reload();
	}
	function mypass(){
		if (localStorage.getItem("Phr") != undefined){
			localStorage.setItem("Page", "passes");
		}
		else{
			localStorage.setItem("Page", "Phrase");
		}
		
		localStorage.removeItem('getpass');
		localStorage.removeItem('Count');
		window.location.reload();
	}
	function sign(){
		if (localStorage.getItem('Token ') === null){
			localStorage.setItem("Page", "sign");
		}
		else{
			localStorage.setItem("Page", "passes");
			localStorage.removeItem('getpass');
			localStorage.removeItem('Count');
		}
		
		window.location.reload();
	}
	function main(){
		localStorage.setItem("Page", "main");
		localStorage.removeItem('getpass');
		localStorage.removeItem('Count');
		window.location.reload();
	}
  return (
    <header>
		<div className="logo">
			<a onClick={main}>
				<img src={logo} alt=""/>
			</a>
			
			<p>Password Manager</p>
		</div>
		<div className="menu">
			<ul>
				<li><a href=""onClick={mypass}>mY Passwords</a></li>
				<li><a href=""onClick={sign}>aCcount</a></li>
				<li><a href="" onClick={logout}><img src={ques} alt=""/></a></li>
				
			</ul>
		</div>
		
	</header>
  )
}

export default Header