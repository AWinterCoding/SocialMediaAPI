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
    },

    //function to create a user
    async createUser(req, res) {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      //function to get a single user
      async getSingleUser(req, res) {
        try {
          const user = await User.findOne({ _id: req.params.userID })
            .select('-__v');
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
    
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },
}