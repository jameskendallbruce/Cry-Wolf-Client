import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Userfront from "@userfront/react";

const Login = (props) => {

    const LoginForm = Userfront.build({
        toolId: "alnkkd",
    });

    return (
        <div>

            <Link
              to={`/`}
              className='btn btn-outline-danger btn-lg'
            >
              Cancel
            </Link>
            
            <Link
              to={`/Signup`}
              className='btn btn-outline-info btn-lg'
            >
              Sign Up
            </Link>

            <Link
              to={`/Reset`}
              className='btn btn-outline-info btn-lg'
            >
              Reset Password
            </Link>

            <LoginForm/>

        </div>
    );

  };

  
  export default Login;