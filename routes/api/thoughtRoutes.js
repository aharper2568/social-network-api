const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');
// CRUD routes
router.route('/').get(getThoughts).post(createThought); // get all thoughts, create a new thought

router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought); // get thought, update thought, delete thought

router.route('/:thoughtId/reactions').post(addReaction).delete(removeReaction); // add reaction, remove reaction

module.exports = router;
