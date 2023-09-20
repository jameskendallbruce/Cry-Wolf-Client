import React, { useState, useEffect } from 'react';
import '../App.css';

/**
 * The basic text box for the player character to say things.
 * @param {*} props 
 * @returns 
 */

const PCTextCard = (props) => {

  /* SAMPLE TEXT: This chunk here is all to demo what conversation progression can look like. Not fully implemented obviously*/
  const [currentSample, setSample] = useState({
    sample: 0
  });

  const SampleText = ["I'll have more to say later.", "Sorry that I still don't have anything new", "I guess I haven't been given a personality yet."]

  function nextSampleText() {
    if (currentSample.sample >= 2){
      setSample({sample: 0});
    } else {
      setSample({sample: currentSample.sample + 1});
    }
  }
  /*END OF SAMPLE TEXT*/

  const character = props.character;

  const abbrev = character.abbrev;

  const imageSrc = './images/pcs/' + abbrev + '_v1.png';

  return (

    <div className='pc-card-container'>
      <img
        src= {imageSrc}
        alt='no artwork currently exists for this character'
        height={400}
        style={{ alignSelf: 'center' }}
      />
      <div className='desc' style ={{border: '1px solid white', padding: '10px', borderRadius: '5px'}}>
        <div className='row'>
            <h1 className='hauntedSerif'>{character.name}</h1>
            <h4 className='crude'>{character.headline}</h4>
        </div>
        <text onClick={nextSampleText}>{SampleText[currentSample.sample]}</text>
      </div>
    </div>

  );
};

export default PCTextCard;