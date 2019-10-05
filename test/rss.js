const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../dist/index').default;
const should = chai.should();

chai.use(chaiHttp);

describe('Blobs', () => {
  it('should GET list of articles', (done) => {
  chai.request(server)
    .get('/')
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
  });
});
