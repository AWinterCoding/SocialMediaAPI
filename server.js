const express = require('express');
const db = require('./controller/connection');

const {Reaction, Thought, User}= require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

db.once('open', () =>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});