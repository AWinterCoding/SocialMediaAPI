const { Thought } = require("../models/Thought");

module.exports = {
    
    //function to get all thoughts
    async getThoughts(req, res){
        try{
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },

    //function to create a thought
    async createThought(req, res){
        try{
            const thought = await Thought.create(req.body);
            res.json(thought);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //function to retrieve a single thought
    async getSingleThought(req, res){
        try{
            const thought = await Thought.findOne({ _id: req.params.thoughtID});

            if(!thought){
                return res.status(404).json({ message: 'No thought found'});
            }
            res.json(thought);
        }catch(err){
            console.log(err);
            return res.status(500).json(err);
        }
    },

    //function to delete a thought
    async deleteThought(req, res){
        try{
            const thought = await Thought.findOneAndRemove({ _id: req.params.thoughtID });

            if(!thought){
                return res.status(404).json({ message: 'No thought found'});
            }

            res.json({ message: 'Thought removed'});
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    },

    //function to update a thought
    async updateThought(req, res){
        try{
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtID},
                { $set: req.body },
            );
            if(!thought){
                res.status(404).json({ message: 'No thought found'});
            }
            res.json(thought);
            
        } catch(err){
            res.status(500).json(err);
        }
      },

      //function to remove a reaction.
      async removeReaction(req, res){
        try{
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtID},
                { $pull: {reactions: {reactionId: req.body.reactionID}}},
            );
            res.json(thought);
        }catch(err){
            res.status(500).json(err);
        }
      },

      //function to add reaction
      async addReaction(req, res){
        try{
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtID},
             {$push: {reactions: req.body}},
         );
        if(!thought){
             res.status(404).json({message: 'No Thought Exists'});
        }
        res.json(thought);
       }catch(err) {
            res.status(500).json(err);
        }
      },
    };