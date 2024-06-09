const Astrologer = require('../models/Astrologer');

exports.createAstrologer = async (req, res) => {
  try {
    const astrologer = new Astrologer(req.body);
    await astrologer.save();
    res.status(201).json(astrologer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.toggleTopAstrologer = async (req, res) => {
  console.log('Toggle request received for ID:', req.params.id);
  try {
    const astrologer = await Astrologer.findById(req.params.id);
    if (!astrologer) {
      console.log('Astrologer not found');
      return res.status(404).json({ error: 'Astrologer not found' });
    }
    astrologer.isTop = !astrologer.isTop;
    astrologer.weight = astrologer.isTop ? 2 : 1;
    await astrologer.save();
    console.log('Astrologer toggled:', astrologer);
    res.status(200).json(astrologer);
  } catch (error) {
    console.log('Error:', error.message);
    res.status(400).json({ error: error.message });
  }
};
