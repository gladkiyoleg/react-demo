import React, { useContext } from 'react';

import '../../../scss/App.scss';
import { AuthContext } from '../../context/authentication/authenticationContext';


const UserGreetings = ({data}) => {
  if (data.isAuthenticated) {
    return (
      <div>
        <h1>Hello {data.user.name}</h1>
        <h3>email: {data.user.email}</h3>
      </div>
    );
  }
  return <h1>Hello guest</h1>;
};

export default function Home() {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <UserGreetings data={authContext}/>
    </div>
  );
}
