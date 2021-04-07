import React from 'react';
import ReactDOM from 'react-dom';
//import RandomAnime from 'random-anime';
//import CoolImages from 'cool-images';
import './index.css';

const name = "ZERO";
const lightpink = "#fa9191";
const borderBottom = '4px solid rgb(61,231,2)';
// const randomanime = require('random-anime').anime();

const heading = {
  color: lightpink,
  textAlign: 'center',
  paddingBottom: '25px',
  fontWeight: 'bold',
  fontSize: '1.6rem',
  textTransform: 'capitalize'
}

// const img = {
//   width: '300px',
//   height: '500px',
//   paddingRight: '20px'
// }

const head1 = {
  color: lightpink,
  textAlign: 'center',
  marginBottom: '50px',
  fontWeight: 'bold',
  fontSize: '2.6rem',
  textTransform: 'capitalize',
  paddingBottom: '20px',
 borderBottom: borderBottom
}

ReactDOM.render(
  <>
  
  <h1 style= {head1} > My favorite Anime's </h1>

<div className="content">
<ol>
<li> One piece</li>
<li> Attack on titan</li>
<li> hunter x hunter</li>
<li> Death note</li>
<li> Naruto</li>
</ol>

<h1 style={heading}> Hello, My name is {name} </h1>

</div>
</>,
document.getElementById('root'));

// <img src={randomanime} alt="random images"/>
// <img src={randomanime} alt="random images"/>
// <img src={randomanime} alt="random images"/>