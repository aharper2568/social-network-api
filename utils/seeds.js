const mongoose = require('mongoose');
const { User, Thought } = require('../models'); 
const db = require('../config/connection');

const userData = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'jane_doe',
    email: 'jane@example.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'learner123',
    email: 'learner123@gmail.com',
    thoughts: [],
    friends: [],
  },
];

const thoughtData = [
  {
    thoughtText: "Here's a cool thought...",
    username: 'john_doe',
  },
  {
    thoughtText: "Learning MongoDB is fun!",
    username: 'jane_doe',
  },
  {
    thoughtText: "I love coding!",
    username: 'learner123',
  },
];

db.once('open', async () => {
  try {
    await User.deleteMany({}); // delete already existing data
    await Thought.deleteMany({});

    const createdThoughts = await Thought.insertMany(thoughtData);

    const updatedUserData = userData.map((user) => {
      const userThoughts = createdThoughts
        .filter((thought) => thought.username === user.username) // filter through thoughts based on username, append corresponding thought ID to usernames
        .map((thought) => thought._id);
      user.thoughts = userThoughts;
      return user;
    });

    await User.insertMany(updatedUserData);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
