const { User, Thought } = require("../models");

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
          const user = await User.findOne({ _id: req.params.userId });
    
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
            const user = await User.findOneAndRemove({ _id: req.params.userId });
            
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
                { _id: req.params.userId},
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

      //function to add a new friend to a user's friend list

      async addFriend(req, res){
        try{
          const baseuser = await User.findOne({ _id: req.params.friendID });
    
          if (!baseuser) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId},
             { $push: {friends: baseuser}},
         );
        if(!user){
             res.status(404).json({message: 'No User Exists'});
        }
        res.json(user);
       }catch(err) {
            res.status(500).json(err);
        }
      },


      async removeFriend(req, res){
        try{
            const user = await User.findOneAndUpdate(
              { _id: req.params.userId },
              {$pull: {friends: req.params.friendID }}
            );
            if(!user){
                res.status(404).json({message: 'No User Exists'});
            }
            res.json(user);
        }catch(err){
            res.status(500).json(err);
        }
      }
};