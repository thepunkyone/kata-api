describe('POST /boolean-to-word', () => {
  it('returns "Yes" if true', (done) => {
    chai.request(server)
      .post('/boolean-to-word')
      .send({ value: true })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.eql({ result: 'Yes' });
        done();
      });
  });

  it('returns "No" if false', (done) => {
    chai.request(server)
      .post('/boolean-to-word')
      .send({ value: false })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.eql({ result: 'No' });
        done();
      });
  });

  it('Errors if not a boolean', (done) => {
    chai.request(server)
      .post('/boolean-to-word')
      .send({ value: false })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ error: 'Valid boolean required.' });
        done();
      });
  });
});
