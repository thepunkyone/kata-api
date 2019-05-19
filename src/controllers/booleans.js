const { negate, truthiness, isOdd } = require('../lib/booleans');

exports.negate = (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
};

exports.truthiness = (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
};

exports.isOdd = (req, res) => {
  const { number } = req.params;
  if (isNaN(number)) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).send({ result: isOdd(Number(number)) });
  }
};
