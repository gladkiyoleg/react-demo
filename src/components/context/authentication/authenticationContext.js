import React from 'react';

const initAuthData = {
  id: '',
  name: '',
  email: '',
  picture: null,
  accessToken: '',
};

const AuthContext = React.createContext();

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: initAuthData,
      isAuthenticated: false,
    };
    this.setAuthContext = ({ id, name, email, picture, accessToken }) => {
      this.setState({
        user: { id, name, email, picture, accessToken },
        isAuthenticated: true,
      });
    };
    this.signOut = () => {
      this.setState({
        user: initAuthData,
        isAuthenticated: false,
      });
    };
  }

  render() {
    return (
      <AuthContext.Provider value={{
        user: this.state.user,
        isAuthenticated: this.state.isAuthenticated,
        setAuth: this.setAuthContext,
        signOut: this.signOut,
      }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContextProvider, AuthContext };
