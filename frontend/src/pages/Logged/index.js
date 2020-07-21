import React from 'react';
// import { Link } from 'react-router-dom';

import './styles.css'

import loggedImg from '../../assets/logged.png'
import logoImg from '../../assets/logo.png'
import doorImg from '../../assets/door.png'

export default function Logged(){
    const usersUsername = localStorage.getItem('usersUsername')
    return(
        <div className="container">
            <div className="logged-container">
            <header>
                <img src={logoImg} className="logo" alt="Logo"/>        
            </header>

            <main>
                <div className="disconnect">
                  
                      <img src={doorImg}  alt="Door"/>
                      {/* <Link to="/login">Disconnect</Link> */}
                    
                </div>
            

                <div className="logged-info">
                
                    <img src={loggedImg} alt="User Logged"/>

                    <p>Welcome {usersUsername}</p>            
                </div>

                </main>

                <script src="scripts.js"></script>
            </div>
        </div>
    );
}