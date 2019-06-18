const fizzBuzz = require('../lib/kata1.fizzBuzz');

const fizzBuzzController = (req, res) => {
  const { number } = req.params;
  if (isNaN(number)) {
    res.status(400).json({ error: 'Valid number required.' });
  } else {
    res.status(200).json({ result: fizzBuzz(Number(number)) });
  }
};

module.exports = fizzBuzzController;
