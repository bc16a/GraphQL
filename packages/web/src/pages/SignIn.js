import React, { useState } from 'react';  

function SignIn() { 

  const [email , setEmail] = useState('')

  const [password , setPassword ] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://192.168.15.9:8000/authenticate', {
      headers: {
        'Content-Type':'application/json',
      },
      method:'POST',
      body:JSON.stringify({
        email,
        password
      })
    }).then((response) => response.json()).then((data)=>{console.log('success!', data)})
  }

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
 
  return (
    <form onSubmit={handleSubmit}>
    <fieldset>
        <label htmlFor="email">E-mail</label>
        <input onChange={handleEmailChange} inputMode="email" id="email" type="email" autoComplete="username" value={email}/>
    </fieldset>

    <fieldset>
        <label htmlFor="password">Senha</label>
        <input onChange={handlePasswordChange} id="password" type="password" autoComplete="current-password" value={password}/>
    </fieldset>

    <button type="submit">Entrar</button>
</form>
  );
}

export default SignIn;
