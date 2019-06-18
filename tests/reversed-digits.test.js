describe('POST /reversed-digits', () => {
  it('returns an array with reversed digits', (done) => {
    chai.request(server)
      .post('/reversed-digits')
      .send({ number: 123456 })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.eql({ result: [6, 5, 4, 3, 2, 1] });
        done();
      });
  });

  it('errors if not a valid number', (done) => {
    chai.request(server)
      .post('/reversed-digits')
      .send({ number: 'hello' })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ error: 'Property "number" must be a valid number.' });
        done();
      });
  });
});
