import React from 'react';

import logoImg from '../../assets/logo.png';
import emailImg from '../../assets/email.png';
import arrowImg from '../../assets/arrow.png';

import './styles.css';
import { Link } from 'react-router-dom';

export default function Forgotpass(){
    return(
        <div className="forgotpass-container">

            <header>
                <img src={logoImg} className="logo" alt="Logo"/>        
            </header>


           <main className="info">

                <p className="text">I forgot my password</p>

                <div className="forms">

                    <div className="arrow" >
                        <img src={arrowImg}  alt="Arrow"/>
                        <Link  to="/">Sign in</Link>
                    </div>

                    <form>

                        <img src={emailImg} alt="Key"/>
                        <input 
                            type="text"
                            placeholder="Email"

                            />

                            <p>Enter registered email!</p>
                        
                        <button type="submit" className="btn-login">Submit</button>

                    </form>
                </div>
            </main>
        </div>
    );
}