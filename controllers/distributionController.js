const distributeUsers = require('../services/distributionService');
const User = require('../models/User');
const Astrologer = require('../models/Astrologer');

exports.distributeUsers = async (req, res) => {
  try {
    const users = await User.find();
    const astrologers = await Astrologer.find();
    distributeUsers(users, astrologers);
    res.status(200).json({ message: 'Users distributed' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
