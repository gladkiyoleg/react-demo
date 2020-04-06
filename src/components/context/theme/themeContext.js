import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
    };
  }

  toggleTheme = () => {
    console.log('toggle');
    this.setState(prevState => {
      return {
        theme: prevState.theme === 'dark' ? 'light' : 'dark',
      };
    });
  };

  render() {
    return (
      <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
        {this.props.children}
      </Provider>
    );
  }

}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
