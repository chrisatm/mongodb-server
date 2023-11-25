const User = require('../models/user.model');

// Sample controller functions
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
};

module.exports = {
  createUser,
  // Add other controller functions here
};
