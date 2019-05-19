const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('../lib/arrays');

exports.getNthElement = (req, res) => {
  res.status(200).send({ result: getNthElement(Number(req.params.index), req.body.array) });
};

exports.toString = (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
};

exports.append = (req, res) => {
  const { value, array } = req.body;
  res.status(200).send({ result: addToArray2(value, array) });
};

exports.startsWithVowel = (req, res) => {
  res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
};

exports.removeElement = (req, res) => {
  res.status(200).send({ result: removeNthElement(req.query.index, req.body.array) });
};
