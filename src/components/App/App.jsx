import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import Axios from 'axios';
import GallerySubmit from '../GallerySubmit/GallerySubmit';

function App() {

  const [ moments, setMoments ] = useState( [] );

    useEffect( () => {
      getMoments();
    }, [ { moments } ] );

    const getMoments = () => {
      Axios.get( '/gallery' ).then( ( response ) => {
        setMoments( response.data );
      }).catch( ( err ) => {
        console.log( err );
        alert( 'A moment of error' );
      })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Robert's Gallery</h1>
        </header>
        <p>The Gallery:</p>
        {/* <img src="images/goat_small.jpg"/> */}
        <GallerySubmit moments = { moments } />
        <GalleryList moments = { moments } />
      </div>
    );
}

export default App;
