import { useState } from 'react';
import './GalleryItem.css';
import Axios from 'axios';

function GalleryItem( props ){
    // Click to toggle content ( local state hook )

    const [ show, setShow ] = useState( true );
  
    const handleClick = () => {
      setShow( !show );
    }
    const handleLikesClick = () => {
        Axios.put( `/gallery/like/${ props.myMoment.id }` ).then( ( response ) => {
          console.log( response );
        }).catch( ( err ) => {
          console.log( err );
          alert( 'its like a ' );
        })
      }
    
    return(
        <div className='listMoment'>
          {
            show ?
            <img onClick = { handleClick } src = { props.myMoment.path }/>
            :
            <p onClick = { handleClick }>{ props.myMoment.description }</p>
          }
          <br/>
          <p>Likes: { props.myMoment.likes }</p>
          <button onClick = { handleLikesClick }> Like </button>
        </div>
    )
}

export default GalleryItem;