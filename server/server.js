const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const gallery = require('./routes/gallery.router.js');
const PORT = process.env.PORT || 5001;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/gallery', gallery);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});

// app.get( '/items', ( req, res )=>{
//     let items = [
//         {
//             color: '',
//             size: '',
//             description: '',
//         },
//         {
//             color: '',
//             size: '',
//             description: '',
//         }
//     ]
//     res.send( items );
// })