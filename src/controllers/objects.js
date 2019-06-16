const { createPerson } = require('../lib/objects');

exports.postPerson = (req, res) => {
  const { name, age } = req.body;

  if (name && age) {
    if (typeof name === 'string' && typeof age === 'number') {
      res.status(200).json({ result: createPerson(name, age) });
    } else if (typeof name !== 'string') {
      res.status(400).json({ error: 'Parameter "name" must be a valid string.' });
    } else if (typeof age !== 'number') {
      res.status(400).json({ error: 'Parameter "age" must be a valid number.' });
    }
  } else {
    res.status(400).json({ error: 'Parameters "name" and "age" are required.' });
  }
};
