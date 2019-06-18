const humanCatDogYears = require('../lib/kata4.humanCatDogYears');

const animalYearsController = (req, res) => {
  const { number } = req.params;
  const convertedToNumber = Number(number);
  if (isNaN(number) || convertedToNumber < 0) {
    res.status(400).json({ error: 'Age must be a valid number' });
  } else {
    res.status(200).json({ result: humanCatDogYears(convertedToNumber) });
  }
};

module.exports = animalYearsController;
