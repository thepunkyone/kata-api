const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('../lib/strings');

const router = express.Router();

router.get('/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

router.get('/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

router.get('/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

router.get('/first-characters/:string', (req, res) => {
  const queryKeys = Object.getOwnPropertyNames(req.query);
  const numberOfChars = req.query[queryKeys[0]];
  if (numberOfChars) {
    res.status(200).json({
      result: firstCharacters(
        req.params.string,
        numberOfChars
      ),
    });
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

module.exports = router;
