import React from 'react';
import './App.css';
import { userValidation } from './Validation';

const App = () => {

  const createUser = async (event) => {

    event.preventDefault();

    let formData = {

      name: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };

    console.log(formData);

    const isValid = await userValidation.isValid(formData);
    console.log(isValid);

  }


  return (
    <div className='App'>
      <center>
        <form className='form' onSubmit={createUser}>
          <input type="text" placeholder='type your name...' />
          <input type="email" placeholder='type your email...' />
          <input type="password" placeholder='type your password...' />
          <input type="submit" className="submit" />
        </form>
      </center>

    </div>
  )
}

export default App