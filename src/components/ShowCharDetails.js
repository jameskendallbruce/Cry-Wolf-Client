import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import { PieChart } from 'react-minimal-pie-chart';

function ShowCharDetails(props) {
  const [character, setCharacter] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const abbrev = character.abbrev;

  const imageSrc = '../images/' + abbrev + '_v1.png';

  useEffect(() => {
    axios
      .get(`http://localhost:8082/api/characters/${id}`)
      .then((res) => {
        setCharacter(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowCharDetails');
      });
  }, [id]);

  const onDeleteClick = (id) => {
    axios
      .delete(`http://localhost:8082/api/characters/${id}`)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log('Error form ShowCharDetails_deleteClick');
      });
  };

  // Simplified version of full character rundown with bio but no stats
  const CharacterItem = (
    <div>
      <div style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
        <img
        style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
        src= {`${imageSrc}`}
        alt='no artwork currently exists for this character'
        height={500}
        />
      </div>
      <table className='table table-hover table-dark'>
        <tbody style={{fontSize:'3vh'}}>
          <tr>
            <th scope="row"><h1 className='hauntedSerif' style={{fontSize:'7vh'}}>{character.name}</h1></th>
            <td className='scratchy'>{character.headline}</td>
          </tr>
        </tbody>
        <tbody className='crude' style={{fontSize:'3vh'}}>
          <tr>
            <td scope='row' style={{width: '40%'}}>
              <h5 style={{fontSize:'3vh'}} className='scratchy'>Character Bio</h5>
              <br/>
              <text>{character.bio}</text>
            </td>           
            <td style={{width:'20%'}}>
              <h5 style={{color: "#a11710"}}>ATTACK</h5>
              <br/>
              <h5 style={{color: "#1073a1"}}>DEFENSE</h5>
              <br/>
              <h5 style={{color: "#00ad68"}}>MAGIC</h5>
            </td>
            <td style={{width:'40%'}}>
              <PieChart
                animate={true}
                totalValue={6}
                startAngle={180}
                lineWidth={60}
                paddingAngle={30}
                animationDuration={1000}
                data={[
                  { label: 'ATTACK', title: 'atk', value: `${character.atk}`, color: '#a11710' },
                  { label: 'DEFENSE', title: 'def', value: `${character.def}`, color: '#1073a1' },
                  { label: 'MAGIC', title: 'mag', value: `${character.mag}`, color: '#00ad68' },
                ]}
              />
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  );

  return (
    <div className='ShowCharDetails'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 m-auto'>
            <br /> <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Character List
            </Link>
          </div>
          <br />
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Character's Record</h1>
            <p className='lead text-center'>View Character's Info</p>
            <hr /> <br />
          </div>
          <div className='col-md-10 m-auto'>{CharacterItem}</div>
          <div className='col-md-6 m-auto'>
            <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(character._id);
              }}
            >
              Delete Character
            </button>
          </div>
          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-character/${character._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Character
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCharDetails;
