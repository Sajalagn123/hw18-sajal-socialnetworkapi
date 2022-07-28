
const router = require('express').Router();
const { Thought, Reaction} = require('../../models')
const {ObjectId} = require('mongoose')

//TODO: ROUTE TO GET ALL THOUGHTS
router.get('/', async (req,res)=> {
    try {
    let thoughts = await Thought.find({})
    .populate('reactions')
    console.log(thoughts)
     res.status(200).json(thoughts)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

//TODO: ROUTE TO CREATE A NEW THOUGHT
router.post('/', async (req,res)=> {
    try {
    let newThought = await Thought.create(req.body)
    console.log(newThought)
    res.status(200).json(newThought)
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//TODO: ROUTE TO GET SINGLE THOUGHT BASED ON THOUGHT ID
router.get('/:thoughtId', async (req,res)=> {
    try {
        // console.log(req)
        Thought.findById(req.params.thoughtId, function (err, thought) {
          if (!err) {
            console.log(thought);
            res.status(200).json(thought);
          }
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

//TODO: ROUTE TO UPDATE A THOUGHT
router.put('/', (req,res)=> {
   
})

//TODO: ROUTE TO DELETE A THOUGHT BASED ON THOUGHT ID
router.delete('/:thoughtId', (req,res)=> {

});

//TODO: ROUTE TO ADD REACTION TO A THOUGHT
router.post('/:thoughtId/reactions', async (req,res)=> {
    try {
        console.log(req.body, req.params.thoughtId)

        let newReaction = await Reaction.create(req.body)
        console.log(newReaction)

        let updatedThought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            {
                $push: { reactions: newReactions._id }
            }
        )
        console.log(updatedThought)
        res.status(200).json('yay')
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//TODO: ROUTE TO DELETE A REACTION ON A THOUGHT
router.delete('/:thoughtId/reactions/:reactionId', (req,res)=> {

})

module.exports = router;
