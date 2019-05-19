const { negate } = require('../lib/booleans');

exports.negate = (req, res) => {
  res.status(200).send({ result: !req.body.value });
};
