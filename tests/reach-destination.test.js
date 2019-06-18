describe('PUT /reach-destination', () => {
  it('returns a string with rounded up time in hours', (done) => {
    chai.request(server)
      .put('/reach-destination')
      .send({ distance: 44, speed: 10 })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.eql({ result: 'I should be there in 4.5 hours.' });
        done();
      });
  });

  it('errors if values are not numbers', (done) => {
    chai.request(server)
      .put('/reach-destination')
      .send({ distance: 44, speed: 'fast' })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ result: 'Distance and speed values must be valid numbers.' });
        done();
      });
  });

  it('errors if values are negative numbers', (done) => {
    chai.request(server)
      .put('/reach-destination')
      .send({ distance: -44, speed: 10 })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ result: 'Distance and speed values must be valid numbers.' });
        done();
      });
  });

  it('errors if dividing by 0', (done) => {
    chai.request(server)
      .put('/reach-destination')
      .send({ distance: 44, speed: 0 })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ result: 'Speed value can\'t be 0.' });
        done();
      });
  });
});
