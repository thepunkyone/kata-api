const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('../lib/strings');

exports.hello = (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
};

exports.uppercase = (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
};

exports.lowercase = (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
};

exports.firstCharacters = (req, res) => {
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
};
