describe('GET /fizzbuzz/{number}', () => {
  it('returns "Fizz" if number param divisible by 3', (done) => {
    chai.request(server)
      .get('/fizzbuzz/9')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.eql({ result: 'Fizz' });
        done();
      });
  });

  it('returns "Buzz" if number param divisible by 5', (done) => {
    chai.request(server)
      .get('/fizzbuzz/10')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.eql({ result: 'Buzz' });
        done();
      });
  });

  it('returns "FizzBuzz" if number param divisible by 3 and 5', (done) => {
    chai.request(server)
      .get('/fizzbuzz/15')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.eql({ result: 'FizzBuzz' });
        done();
      });
  });

  it('returns the param if not divisible by 3 or 5', (done) => {
    chai.request(server)
      .get('/fizzbuzz/7')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(200);
        expect(res.body).to.eql({ result: 7 });
        done();
      });
  });

  it('errors if param is not a number', (done) => {
    chai.request(server)
      .get('/fizzbuzz/hello')
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(400);
        expect(res.body).to.eql({ error: 'Valid number required.' });
        done();
      });
  });
});
