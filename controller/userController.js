const { User, Thought } = require("../models");

module.exports = {
    //This is a test to get all Users
    async getUsers(req, res){
        try{
            const users = await User.find();
            res.json(users);
        } catch(err){
            res.status(500).json(err);
        }
    }

}