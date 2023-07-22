const { User } = require("../models");

module.exports = {
    //This is a test to get all Users
    async getUsers(req, res){
        try{
            const users = await User.find();
            res.json(users);
        } catch(err){
            res.status(500).json(err);
            console.log(err);
        }
    },

    //function to create a user
    async createUser(req, res) {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
          console.log(err);
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

      //function to delete a user

      async deleteUser(req, res){
        try{
            const user = await User.findOneAndRemove({ _id: req.params.userID });
            
            if(!user){
                return res.status(404).json({message: 'That user doesn\'t exist'});
            }else{
                res.json({ message: 'User successfully deleted'});
            }
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
      },

      //function to update a user

      async updateUser(req, res){
        try{
            const user = await User.findOneAndUpdate(
                { _id: req.params.userID},
                { $set: req.body },
            );
            if(!user){
                res.status(404).json({ message: 'User not found'});
            }else{
                res.json(user);
            }
        } catch(err){
            res.status(500).json(err);
        }
      },
};