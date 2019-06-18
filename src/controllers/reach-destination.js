const reachDestination = require('../lib/kata5.reachDestination');

const reachDestinationRouter = (req, res) => {
  const { distance, speed } = req.body;
  const distanceToNumber = Number(distance);
  const speedToNumber = Number(speed);

  if (isNaN(distance) || isNaN(speed)) {
    res.status(400).json({ error: 'Distance and speed values must be valid numbers.' });
  } else if (distanceToNumber < 0 || speedToNumber < 0) {
    res.status(400).json({ error: 'Distance and speed values must be valid numbers.' });
  } else if (speedToNumber === 0) {
    res.status(400).json({ error: 'Speed value can\'t be 0.' });
  } else {
    res.status(200).json({ result: reachDestination(distanceToNumber, speedToNumber) });
  }
};

module.exports = reachDestinationRouter;
