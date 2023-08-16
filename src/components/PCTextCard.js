import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

/**
 * The basic text box for the player character to say things.
 * @param {*} props 
 * @returns 
 */

const PCTextCard = (props) => {
  const character = props.character;

  const abbrev = character.abbrev;

  const imageSrc = './images/pcs/' + abbrev + '_v1.png';

  return (
    <Link to={`/show-character/${character._id}`} style={{ textDecoration: 'none', color: 'white' }}>

    <div className='pc-card-container'>
      <img
        src= {imageSrc}
        alt='no artwork currently exists for this character'
        height={400}
        style={{ alignSelf: 'center' }}
      />
      <div className='desc'>
        <div className='row'>
            <h1 className='hauntedSerif'>{character.name}</h1>
            <h4 className='crude'>{character.headline}</h4>
        </div>
        <text>This is where I say things to you...</text>
      </div>
    </div>

    </Link>   
  );
};

export default PCTextCard;