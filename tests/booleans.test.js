describe('/booleans', () => {
  describe('POST /negate', () => {
    it('returns false when passed true', (done) => {
      chai.request(server)
        .post('/booleans/negate')
        .send({ value: true })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: false });
          done();
        });
    });

    it('returns true when passed false', (done) => {
      chai.request(server)
        .post('/booleans/negate')
        .send({ value: false })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: true });
          done();
        });
    });
  });

  describe('POST /truthiness', () => {
    it('returns false when passed an empty string', (done) => {
      chai.request(server)
        .post('/booleans/truthiness')
        .send({ value: '' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: false });
          done();
        });
    });

    it('returns false when passed 0', (done) => {
      chai.request(server)
        .post('/booleans/truthiness')
        .send({ value: 0 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: false });
          done();
        });
    });

    it('returns false when passed null', (done) => {
      chai.request(server)
        .post('/booleans/truthiness')
        .send({ value: null })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: false });
          done();
        });
    });

    it('returns true when passed a string', (done) => {
      chai.request(server)
        .post('/booleans/truthiness')
        .send({ value: 'hello' })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: true });
          done();
        });
    });

    it('returns true when passed a number', (done) => {
      chai.request(server)
        .post('/booleans/truthiness')
        .send({ value: 9 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: true });
          done();
        });
    });
  });

  describe('GET /is-odd/{number}', () => {
    it('returns true when passed an odd number', (done) => {
      chai.request(server)
        .get('/booleans/is-odd/7')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: true });
          done();
        });
    });

    it('returns false when passed an even number', (done) => {
      chai.request(server)
        .get('/booleans/is-odd/84')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: false });
          done();
        });
    });

    it('errors when the value is not numeric', (done) => {
      chai.request(server)
        .get('/booleans/is-odd/bicycle')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameter must be a number.' });
          done();
        });
    });
  });

  describe('GET /{string}/starts-with/{character}', () => {
    it('returns true when the string starts with the given character', (done) => {
      chai.request(server)
        .get('/booleans/cat/starts-with/c')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: true });
          done();
        });
    });

    it('returns false when the string does not start with the given character', (done) => {
      chai.request(server)
        .get('/booleans/cat/starts-with/d')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: false });
          done();
        });
    });

    it('errors when the second argument is not a single character', (done) => {
      chai.request(server)
        .get('/booleans/cat/starts-with/cat')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameter "character" must be a single character.' });
          done();
        });
    });
  });
});
