describe('/arrays', () => {
  describe('POST /element-at-index/{index}', () => {
    it('returns the element at the given index', (done) => {
      chai.request(server)
        .post('/arrays/element-at-index/2')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 'elephant' });
          done();
        });
    });
  });

  describe('POST /to-string', () => {
    it('returns the stringified array', (done) => {
      chai.request(server)
        .post('/arrays/to-string')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: 'cat,dog,elephant,fox' });
          done();
        });
    });
  });

  describe('POST /append', () => {
    it('returns an array with the value appended', (done) => {
      chai.request(server)
        .post('/arrays/append')
        .send({
          array: ['cat', 'dog', 'elephant', 'fox'],
          value: 'gorilla',
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: ['cat', 'dog', 'elephant', 'fox', 'gorilla'] });
          done();
        });
    });
  });

  describe('POST /starts-with-vowel', () => {
    it('returns a filtered array of elements starting with a vowel', (done) => {
      chai.request(server)
        .post('/arrays/starts-with-vowel')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: ['elephant'] });
          done();
        });
    });
  });

  describe('POST /remove-element?index={index}', () => {
    it('returns an array with the first element removed', (done) => {
      chai.request(server)
        .post('/arrays/remove-element')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: ['dog', 'elephant', 'fox'] });
          done();
        });
    });

    it('returns an array with the element at the given index removed', (done) => {
      chai.request(server)
        .post('/arrays/remove-element')
        .send({ array: ['cat', 'dog', 'elephant', 'fox'] })
        .query({ index: 2 })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(200);
          expect(res.body).to.eql({ result: ['cat', 'dog', 'fox'] });
          done();
        });
    });
  });
});
