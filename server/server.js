const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');




const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE)

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());

// Models
const { User } = require('./models/user');


//--------------------------------------------
// -----     USERS    ------    USERS -------
//-------------------------------------------

app.post('/api/users/register', (req, res) => {
    res.status(200);
})


const port = process.env.PORT || 3004;

app.listen(port, () => {
    console.log(`The Server is running on Port ${port} !
    And will refresh thanks to Nodemon. :))`)
})