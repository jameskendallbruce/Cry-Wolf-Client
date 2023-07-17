import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Userfront from "@userfront/react";

/**
componentDidMount() {
    this.state = {
      showLogin: false
    };
};

showLogin() {
    this.setState({
      show: true
    });
}

Also need to sort it out down below at the &&
*/

const SignUpForm = Userfront.build({
    toolId: "nkmbbm",
});

const Login = (props) => {
  
    return (
      <div className='card-container'>

        <button onClick="showLogin()">Login</button>

        {this.state.showLogin &&
        
          <SignUpForm/>

        }

      </div>
    );
  };
  
  export default Login;