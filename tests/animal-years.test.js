describe('GET /animal-years/{number}', () => {
  it('returns an array of human, cat and dog years', (done) => {
    chai.request(server)
      .get('/animal-years/10')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.eql({ result: [10, 56, 64] });
        done();
      });
  });

  it('errors if param is not a valid number', (done) => {
    chai.request(server)
      .get('/animal-years/ten')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ error: 'Age must be a valid number' });
        done();
      });
  });

  it('errors if param is a negative number', (done) => {
    chai.request(server)
      .get('/animal-years/-10')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ error: 'Age must be a valid number' });
        done();
      });
  });
});
