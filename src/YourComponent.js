import React, { useState } from 'react';
import { createUser } from './api';

const YourComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser({
      name,
      email,
      inputValue
    });
    // Clear all input fields after submission
    setName('');
    setEmail('');
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter name..."
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter email..."
          />
        </label>
        <br />
        <label>
          Additional Field:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter text..."
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <p>Stored Value: {inputValue}</p>
    </div>
  );
};

export default YourComponent;
