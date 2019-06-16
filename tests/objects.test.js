describe('/objects', () => {
  describe('POST /objects/person', () => {
    it('returns person object', (done) => {
      chai.request(server)
        .post('/objects/person')
        .send({ name: 'Vitnija', age: 30 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ name: 'Vitnija', age: 30 });
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
});
