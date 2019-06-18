const booleanToWord = require('../lib/kata2.booleanToWord');

const booleanToWordController = (req, res) => {
  const boolValue = JSON.parse(req.body.value);
  if (typeof boolValue !== 'boolean') {
    res.status(400).json({ error: 'Valid boolean required.' });
  } else if (boolValue || !boolValue) {
    res.status(200).json({ result: booleanToWord(boolValue) });
  }
};

module.exports = booleanToWordController;
