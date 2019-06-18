const numberToReversedDigits = require('../lib/kata3.numberToReversedDigits');

const reversedDigitsController = (req, res) => {
  const { number } = req.body;
  if (typeof number === 'number') {
    res.status(200).json({ result: numberToReversedDigits(number) });
  } else {
    res.status(400).json({ error: 'Property "number" must be a valid number.' });
  }
};

module.exports = reversedDigitsController;
