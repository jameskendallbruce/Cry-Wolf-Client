import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Userfront from "@userfront/react";

const ResetPassword = (props) => {

    const PasswordResetForm = Userfront.build({
        toolId: "dkbmmo",
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
              to={`/Login`}
              className='btn btn-outline-info btn-lg'
            >
              Login
            </Link>

            <PasswordResetForm/>

        </div>
    );

  };

  
  export default ResetPassword;