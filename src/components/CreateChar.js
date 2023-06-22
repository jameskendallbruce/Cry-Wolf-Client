/**
 * CreateChar
 * 
 * component for devs to input new characters for story
 * 
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const CreateChar = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [character, setCharacter] = useState({
    name: '',
    headline: '',
    bio: '',
    ability: '',
    atk: '',
    def: '',
    mag: '',
    abbrev: '',
  });

  const onChange = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/characters', character)
      .then((res) => {
        setCharacter({
          name: '',
          headline: '',
          bio: '',
          ability: '',
          atk: '',
          def: '',
          mag: '',
          abbrev: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in CreateCharacter!');
      });
  };

  return (
    <div className='CreateCharacter'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Character</h1>
            <p className='lead text-center'>Create new character</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Character name'
                  name='name'
                  className='form-control'
                  value={character.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='title or headline'
                  name='headline'
                  className='form-control'
                  value={character.headline}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <textarea
                  type='text'
                  placeholder='Describe this character'
                  name='bio'
                  className='form-control'
                  value={character.bio}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Simple description of unique ability to be implemented'
                  name='ability'
                  className='form-control'
                  value={character.ability}
                  onChange={onChange}
                />
              </div>

              <div className='form-group'>
                <h6>"Select values between 0 and 3. Basic characters should have a 1, a 2 and a 3 value each. Total stats must add up to 6.</h6>
                <br/>
                <label htmlFor='atk'>Attack</label>
                <input
                  type='number'
                  placeholder='0'
                  max='3'
                  min='0'
                  name='atk'
                  className='form-control'
                  value={character.atk}
                  onChange={onChange}
                />
                <label htmlFor='def'>Defense</label>
                <input
                  type='number'
                  placeholder='0'
                  max='3'
                  min='0'
                  name='def'
                  className='form-control'
                  value={character.def}
                  onChange={onChange}
                />
                <label htmlFor='mag'>Magic</label>
                <input
                  type='number'
                  placeholder='0'
                  max='3'
                  min='0'
                  name='mag'
                  className='form-control'
                  value={character.mag}
                  onChange={onChange}
                />                
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='abbreviation for the characters name (if they have a multipart name)'
                  name='abbrev'
                  className='form-control'
                  value={character.abbrev}
                  onChange={onChange}
                />
              </div>

              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateChar;