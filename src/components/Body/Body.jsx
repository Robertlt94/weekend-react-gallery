// import { useState, useEffect } from 'react';
// import Gallery from '../Gallery/Gallery';
// import axios from 'axios';

// function Body( props ){
//     const [ items, setItems ] = useState( [] );
//     // Make a Get call on page load
//     useEffect( ()=>{
//         getItems();
//     }, [] ); // empty array tells this to only run once

//     const getItems() => {
//         axios.get( '/items' ).then( response ) => {
//             setItems( response.data );
//         }).catch( ( err ) => {
//             console.log( err );

//         })
//         // setItems( [ {
//         //     color: '',
//         //     size: '',
//         //     description: '',
//     }    // } ] );
    

//     // Send response to Gallery as prop

//     return(
//         <div>
//             <h2>Body</h2>
//             <p>( JSON.stringify( props ) )</p>
//             <Gallery Gallery = { items } />
//         </div>
//     )
// }

// export default Body;