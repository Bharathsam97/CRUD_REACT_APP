import React from 'react';
import UserForm from './UserForm';
import UserProvider from '../context/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="container">
        <h1>USER Application</h1>
        <UserForm />
      </div>
    </UserProvider>
  );
}

export default App;
