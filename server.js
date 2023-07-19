const express = require('express');
const db = require('./config/connection');
const router = require('./routes/routes');

const {Thought, User}= require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(router);

db.once('open', () =>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});