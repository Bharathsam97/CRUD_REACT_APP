import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { addUser, updateUser,deleteUser } from '../services/api';

export const userDetails = React.createContext();

function UserForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const { state, dispatch } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.trim() === '') return;

     if (state.users)
    {
      const newUser = await addUser(name, description);
      dispatch({ type: 'ADD_USER', payload: newUser });
    }

    setName('');
    setDescription('');
  };


  const handleDelete = async (id) => {
    await deleteUser(id);
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  const handleUpdate = async(id) => {
    const user = state?.users?.filter((user)=>user._id===id);
    if(!user){
      return;
    }
    const updatedUser={
      _id:id,
      name:name,
      description:description
    }
    console.log(updatedUser)
    const updatedUserRes=await updateUser(id,updatedUser);
    console.log(updatedUserRes);
    dispatch({ type: 'UPDATE_USER', payload: updatedUserRes });

  };

  return (
    <div>
  <form className="form" onSubmit={handleSubmit}>
    <label htmlFor='username'>
      Name:
    </label>
    <input
      className="input"
      type="text"
      id='username'
      placeholder="Enter name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
     <label htmlFor='userdescription'>
      Description:
    </label>
    <input
      className="input"
      type="text"
      id='userdescription'
      placeholder="Enter description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />
    <button className="submit-button" type="submit">Add User</button>
  </form>
  <p></p>
  {state?.users?.length > 0 && (
    <table className="user-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {state?.users?.map((user) => (
          <tr className="user-row" key={user._id}>
            <td>{user.name}</td>
            <td>{user.description}</td>
            <td>
              <button className="delete-button" onClick={() => handleDelete(user._id)}>Delete</button>
              <button className="edit-button" onClick={() => handleUpdate(user._id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )}
</div>
  );
}

export default UserForm;
