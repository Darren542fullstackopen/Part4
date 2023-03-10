import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css'

import App from './App';

// const promise = axios
//                   .get('http://localhost:3001/notes')
//                   .then(response => {
//                     console.log(response);
//                     const notes = response.data ;
//                     console.log(notes);
//                     ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
//                   });
// console.log(promise);

// const promise2 = axios.get('http://localhost:3001/foobar');
// console.log(promise2);

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true,
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only Javascript',
//     important: false,
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the important methds of HTTP protocol',
//     important: true,
//   }
// ]

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
