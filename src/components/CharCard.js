import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import Sam from '../images/Sam_v1.js';

const CharCard = (props) => {
  const character = props.character;

  const abbrev = character.abbrev;

  const imageSrc = './images/' + abbrev + '_v1.png';
  //const imageSrc = {require('/images/Sam_v1.png')};
  //const imageSrc = './images/Sam_v1.png';

  //src= {require(`${imageSrc}`)}
  //src= {require({imageSrc})}
  //src= {imageSrc}
  //src= Sam

  return (
    <div className='card-container'>
      <img
        src= {imageSrc}
        alt='no artwork currently exists for this character'
        height={300}
      />
      <div className='desc'>
        <h2>
          <Link to={`/show-character/${character._id}`}>{character.name}</Link>
        </h2>
        <h3>{character.headline}</h3>
      </div>
    </div>
  );
};

export default CharCard;