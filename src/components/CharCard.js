import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const CharCard = (props) => {
  const character = props.character;

  const abbrev = character.abbrev;

  const imageSrc = './images/' + abbrev + '_v1.png';

  return (
    <div className='card-container'>
      <img
        src= {imageSrc}
        alt='no artwork currently exists for this character'
        height={300}
      />
      <div className='desc'>
        <h1 className='hauntedSerif'>
          <Link to={`/show-character/${character._id}`}>{character.name}</Link>
        </h1>
        <h2 className='crude'>{character.headline}</h2>
      </div>
    </div>
  );
};

export default CharCard;