import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CharCard from './CharCard';

function ShowCharList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/characters')
      .then((res) => {
        setCharacters(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowCharList');
      });
  }, []);

  const characterList =
    characters.length === 0
      ? 'there is no character record!'
      : characters.map((character, k) => <CharCard character={character} key={k} />);

  return (
    <div className='ShowCharList'>

      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Characters List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-char'
              className='btn btn-outline-warning float-right'
            >
              + Add New Character
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{characterList}</div>
      </div>
    </div>
  );
}

export default ShowCharList;