describe('/objects', () => {
  describe('POST /objects/{person}', () => {
    it('returns person object', (done) => {
      chai.request(server)
        .post('/objects/person')
        .send({ name: 'Vitnija', age: 30 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body.result).to.eql({ name: 'Vitnija', age: 30 });
          done();
        });
    });

    it('errors if a parameter is missing', (done) => {
      chai.request(server)
        .post('/objects/person')
        .send({ name: 'Jason' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters "name" and "age" are required.' });
          done();
        });
    });

    it('errors if name parameter is not a string', (done) => {
      chai.request(server)
        .post('/objects/person')
        .send({ name: 30, age: 30 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameter "name" must be a valid string.' });
          done();
        });
    });

    it('errors if age parameter is not a number', (done) => {
      chai.request(server)
        .post('/objects/person')
        .send({ name: 'Vitnija', age: 'thirty' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameter "age" must be a valid number.' });
          done();
        });
    });
  });

  describe('GET /objects/{:property}', () => {
    it('returns property on an object', (done) => {
      chai.request(server)
        .get('/objects/name')
        .send({ name: 'Vitnija', age: 30 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 'Vitnija' });
          done();
        });
    });

    it('errors if object doesn\'t have property', (done) => {
      chai.request(server)
        .get('/objects/height')
        .send({ name: 'Vitnija', age: 30 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Property not found.' });
          done();
        });
    });

    it('errors if not a valid object', (done) => {
      chai.request(server)
        .get('/objects/height')
        .send('height')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Not a valid object.' });
          done();
        });
    });
  });

  describe('GET /objects/{person}', () => {
    it('returns true if age over 65', (done) => {
      chai.request(server)
        .get('/objects/person/checkAge')
        .send({ name: 'Maurice', age: 72 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: true });
          done();
        });
    });

    it('returns false if age below 65', (done) => {
      chai.request(server)
        .get('/objects/person/checkAge')
        .send({ name: 'Alma', age: 20 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: false });
          done();
        });
    });

    it('errors if age property not found', () => {
      chai.request(server)
        .get('/objects/person/checkAge')
        .send({ name: 'Lucy' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Age must be provided.' });
        });
    });

    it('errors if age property is not a valid number', () => {
      chai.request(server)
        .get('/objects/person/checkAge')
        .send({ name: 'Lucy', age: 'thirty' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Age must be a valid number.' });
        });
    });
  });

  describe('POST /objects/{people}', () => {
    const people = [
      {
        name: 'Susan',
        age: 43,
      },
      {
        name: 'Jason',
        age: 35,
      },
      {
        name: 'Clarence',
        age: 3,
      },
    ];

    const peopleWithAgeMissing = [
      {
        name: 'Susan',
        age: 43,
      },
      {
        name: 'Jason',
      },
      {
        name: 'Clarence',
        age: 3,
      },
    ];

    const peopleWithAgeNotANumber = [
      {
        name: 'Susan',
        age: 43,
      },
      {
        name: 'Jason',
        age: 'thirty three',
      },
      {
        name: 'Clarence',
        age: 3,
      },
    ];

    it('returns average age of people objects in array', (done) => {
      chai.request(server)
        .post('/objects/people')
        .send(people)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 27 });
          done();
        });
    });

    it('errors if people array is missing', (done) => {
      chai.request(server)
        .post('/objects/people')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Array of people must be supplied.' });
          done();
        });
    });

    it('errors if person object does not have age property', (done) => {
      chai.request(server)
        .post('/objects/people')
        .send(peopleWithAgeMissing)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Age property must be supplied for each person.' });
          done();
        });
    });

    it('errors if age property is not a number', (done) => {
      chai.request(server)
        .post('/objects/people')
        .send(peopleWithAgeNotANumber)
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Age property must be a number.' });
          done();
        });
    });
  });
});
