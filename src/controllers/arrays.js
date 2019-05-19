const { getNthElement, arrayToCSVString } = require('../lib/arrays');

exports.getNthElement = (req, res) => {
  res.status(200).send({ result: getNthElement(Number(req.params.index), req.body.array) });
};

exports.toString = (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
};
