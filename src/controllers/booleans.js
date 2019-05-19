const { negate, truthiness } = require('../lib/booleans');

exports.negate = (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
};

exports.truthiness = (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
};
