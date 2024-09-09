const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');
// CRUD routes
router.route('/').get(getUsers).post(createUser); // get all users, create new user

router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser); // get user, update user, delete user

router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend); // add friend, remove friend

module.exports = router;
