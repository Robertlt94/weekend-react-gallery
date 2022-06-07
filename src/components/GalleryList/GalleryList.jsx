import { useState } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

function GalleryList( props ){
    // const [ hook, setHook ] = useState( null );
    // // Map thru inventory array
    // // Create an item for each in array

    return(
        <div>
          <ul>
            {
              props.moments.map( moment => (
                <GalleryItem myMoment = { moment } />
              ))
            }
          </ul>
        </div>
      );
    }

//     return(
//         <div>
//             <h2>Gallery</h2>
//             <p>( JSON.stringify( props ) )</p>
//             { props.itemArray.map( item =>(<GalleryItem item={ item }/>) ) };
//             <GalleryItem />
//         </div>
//     )
// }

export default GalleryList;