import chai from 'chai';
import chaiHttp from 'chai-http';
import app from './app';

chai.should();

chai.use(chaiHttp);

let token;
let token2;

describe('GET /users', () => {
  it('it should log in the user', ((done) => {
    const loginDetails = {
      username: 'bendinho@gmail.com',
      password: '1234'
    };
    chai.request(app)
      .post('/api/user')
      .send(loginDetails)
        .end((err, res) => {
        done(err);
      });
  }));
});
