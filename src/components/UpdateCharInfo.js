import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateCharInfo(props) {
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

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/characters/${id}`)
      .then((res) => {
        setCharacter({
            name: res.data.name,
            headline: res.data.headline,
            bio: res.data.bio,
            ability: res.data.ability,
            atk: res.data.atk,
            def: res.data.def,
            mag: res.data.mag,
            abbrev: res.data.abbrev,
        });
      })
      .catch((err) => {
        console.log('Error from UpdateCharInfo');
      });
  }, [id]);

  const onChange = (e) => {
    setCharacter({ ...character, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        name: character.name,
        headline: character.headline,
        bio: character.bio,
        ability: character.ability,
        atk: character.atk,
        def: character.def,
        mag: character.mag,
        abbrev: character.abbrev,
    };

    axios
      .put(`http://localhost:8082/api/characters/${id}`, data)
      .then((res) => {
        navigate(`/show-character/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdateCharInfo!');
      });
  };

  return (
    <div className='UpdateCharacterInfo'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show BooK List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Character</h1>
            <p className='lead text-center'>Update Character's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
                <label htmlFor='name'>Character Name</label>
                <input
                  type='text'
                  placeholder={character.name}
                  name='name'
                  className='form-control'
                  value={character.name}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <label htmlFor='headline'>Headline</label>
                <input
                  type='text'
                  placeholder={character.headline}
                  name='headline'
                  className='form-control'
                  value={character.headline}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <label htmlFor='bio'>Bio</label>
                <textarea
                  type='text'
                  placeholder={character.bio}
                  name='bio'
                  className='form-control'
                  value={character.bio}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <label htmlFor='ability'>Ability</label>
                <input
                  type='text'
                  placeholder={character.ability}
                  name='ability'
                  className='form-control'
                  value={character.ability}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <h6>"Select values between 0 and 3. Basic characters should have a 1, a 2 and a 3 value each. Total stats must add up to 6.</h6>
                <br/>
                <label htmlFor='atk'>Attack</label>
                <input
                  type='number'
                  placeholder={character.atk}
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
                  placeholder={character.def}
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
                  placeholder={character.mag}
                  max='3'
                  min='0'
                  name='mag'
                  className='form-control'
                  value={character.mag}
                  onChange={onChange}
                />                
              </div>
              <br />

              <div className='form-group'>
                <label htmlFor='abbrew'>Abbreviation</label>
                <input
                  type='text'
                  placeholder={character.abbrev}
                  name='abbrev'
                  className='form-control'
                  value={character.abbrev}
                  onChange={onChange}
                />
              </div>
              <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Character
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCharInfo;