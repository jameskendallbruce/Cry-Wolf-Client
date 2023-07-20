/**
 * Basic App.js for hypothetical Character database web app
 * Will be used by devs to update characters in this early state
 */

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateChar from './components/CreateChar';
import ShowCharList from './components/ShowCharList.js';
import ShowCharDetails from './components/ShowCharDetails';
import UpdateCharInfo from './components/UpdateCharInfo';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import SignUp from './components/SignUp';
import Userfront from "@userfront/react";
import AuthNavbar from './components/AuthNavbar';

//Locating that accesstoken
console.log("Token found!: " + Userfront.name);
const App = () => {
  
  return (
    <Router>
      <div class='cleanSans'>
        <AuthNavbar/>
        {Userfront.accessToken &&
          <h1>{`Hello ${Userfront.tokens.accessToken}`} :/!</h1>
        }
        <Routes>
          <Route exact path='/' element={<ShowCharList />} />
          <Route exact path='/Login' element={<Login />} />
          <Route exact path='/Reset' element={<ResetPassword />} />
          <Route exact path='/Signup' element={<SignUp />} />
          <Route path='/create-char' element={<CreateChar />} />
          <Route path='/edit-character/:id' element={<UpdateCharInfo />} />
          <Route path='/show-character/:id' element={<ShowCharDetails />} />
          <Route path='/Dashboard' redirect='/' element={<ShowCharList />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;