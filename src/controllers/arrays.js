const { getNthElement } = require('../lib/arrays');

exports.getNthElement = (req, res) => {
  res.status(200).send({ result: getNthElement(Number(req.params.index), req.body.array) });
};
