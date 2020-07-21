import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import logoImg from '../../assets/logo.png'
import './styles.css'

import api from '../../services/api'

import usersImg from '../../assets/users.png';
import keyImg from '../../assets/key.png';
import emailImg from '../../assets/email.png';


export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

   async function handleRegister(e){
      e.preventDefault();    
      
      const data ={
        username, 
        email, 
        password
      };
      
     try{
      const response = await api.post('users', data);

      alert(`Seu ID de acessso: ${response.data.codigo}`);

      history.push('/');

     }catch(err){
       alert('Erro ao realizar o cadastro, tente novamente');
     }
    }


  return (
      <div className="register-container">
          
            <header>
                <img src={logoImg} className="logo" alt="Logo"/>        
            </header>

          <main className="info">

              <p className="register-text">Create an Account</p>
             
            <div className="register-form">

              <form onSubmit={handleRegister} >
                <img src={usersImg}  alt="Users"/>              
                <input
                 type="text"
                 placeholder="Name"
                 value={username}
                 onChange={e => setUsername(e.target.value)}
                 />

                <img src={emailImg} alt="Key"/>
                <input 
                  type="text"
                  placeholder="Email"
                  value={email}
                 onChange={e => setEmail(e.target.value)}
                  />

                  <img src={keyImg} alt="Email"/>
                 <input 
                  type="text"
                  placeholder="Password"
                  value={password}
                 onChange={e => setPassword(e.target.value)}
                  />

                  <div className="description">
                  <Link to="/">If you are registered!</Link>
                  </div>

                  <p className="term">By creating an account you agree to the <br/>
                  <span>Terms & Conditions</span> and <span> Privacy Policy</span></p>

                  <button type="submit" className="btn-login">Sign Up</button>
                 

              </form>
            </div>
          </main>

      </div>   
  );
}



