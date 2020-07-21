import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css'

import api from '../../services/api'

import usersImg from '../../assets/users.png';
import keyImg from '../../assets/key.png';
import logoImg from '../../assets/logo.png'

export default function Login() {
  const [codigo, setCodigo] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try{
      const response = await api.post('session', { codigo, password });

      history.push('/logged')

      localStorage.setItem('usersCodigo', codigo);
      localStorage.setItem('usersPassword', password);
      localStorage.setItem('usersUsername', response.data.username);
    }catch(err){
      alert('Falha no login')
    }
  }
  return (
      <div className="container">
         
           <div className="login-container">
           <header>
                <img src={logoImg} className="logo" alt="Logo"/>        
            </header>

          <main className="info">
            <p>Welcome, please login!</p>

            <div className="forms">

              <form onSubmit={handleLogin}>
                <img src={usersImg} alt="User"/>              
                <input
                 type="text"
                 placeholder="ID"
                 value={codigo}
                 onChange={e => setCodigo(e.target.value)}
                 />

                <img src={keyImg} alt="Key"/>
                <input 
                  type="text"
                  placeholder="Password"
                  value={password}
                 onChange={e => setPassword(e.target.value)}
                  />

                  
                  <div className="description">
                  <Link to="/forgotpass">Forgot Password?</Link>
                  </div>
                  

                  <button type="submit" className="btn-login">Login</button>

                  {/* link */}
                  <Link  to="/register">
                    <button  className="btn-sign">Sign Up</button>
                  </Link>
              </form>
            </div>
          </main>
           </div>

      </div>   
  );
}


