describe('numbers', () => {
  describe('GET /add/{number}/and/{number}', () => {
    xit('adds 2 and 1', (done) => {
      chai.request(server)
        .get('/numbers/add/2/and/1')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 3 });
          done();
        });
    });

    xit('adds 12 and 0', (done) => {
      chai.request(server)
        .get('/numbers/add/12/and/0')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 12 });
          done();
        });
    });

    xit('adds 10 and -5', (done) => {
      chai.request(server)
        .get('/numbers/add/10/and/-5')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 5 });
          done();
        });
    });

    xit('errors if the parameters are not numbers', (done) => {
      chai.request(server)
        .get('/numbers/add/fish/and/chips')
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(400);
          expect(res.body).to.eql({ error: 'Parameters must be valid numbers.' });
          done();
        });
    });
  });
});
