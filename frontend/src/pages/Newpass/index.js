import React from 'react';
// import {Link} from 'react-router-dom';

import './styles.css'

import keyImg from '../../assets/key.png';
import logoImg from '../../assets/logo.png'

export default function Newpass() {
  return (
      <div className="newpass-container">
         
            <header>
                <img src={logoImg} className="logo" alt="Logo"/>        
            </header>

          <main className="info">
            <p className="user-info">Enter a new password</p>
            <p className="user-log">{}</p>

            <div className="forms">
              <form>

                <img src={keyImg} alt="Key"/>
                <input 
                  type="text"
                  placeholder="Password"
                  />


                  <button type="submit" className="btn-login">Submit</button>

              </form>
            </div>
          </main>

      </div>   
  );
}

