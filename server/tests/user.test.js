
import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../utilities/app';


chai.should();
chai.use(chaiHttp);

before('should return email already exist', (done) => {
  const newUser = {
    email: 'gad@gmail.com',
    password: 'passssssss',
    firstName: 'Gad',
    lastName: 'Ishimwe',
    address: 'Nyarugenge',
    bio: 'uhfuif fihwiufhw fuwhfu ufhwufhu',
    occupation: 'Developer',
    expertise: 'Javascript',
  };
  chai.request(app)
    .post('/api/v1/auth/signup')
    .send(newUser)
    .end((err, res) => {
      expect(res).to.have.status(401);
    });
  done();
});
describe('test the user', () => {
  it('should sign up new user', (done) => {
    const newUser = {
      email: 'james@gmail.com',
      password: 'james1234',
      firstName: 'james',
      lastName: 'bond',
      address: 'Nyarugenge',
      bio: 'uhfuif fihwiufhw fuwhfu ufhwufhu',
      occupation: 'Developer',
      expertise: 'Javascript',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        user = res.body.data.token;
        expect(res.statusCode).to.equal(201);
        expect(res).to.have.status(201);
      });
    done();
  });
  it('should validate the user', (done) => {
    const newUser = {
      email: 'iuguyg@gmal.com',
      password: '@@#@!',
    };
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
    done();
  });
  it('should sign in user', (done) => {
    const newUser = {
        email: 'firaduk@gmail.com',
        password: 'ibirayi123',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(newUser)
      .end((err, res) => {
        user = res.body.data.token;
        expect(res.statusCode).to.equal(201);
        expect(res).to.have.status(201);
      });
    done();
  });
  it('should validate the user', (done) => {
    const user = {
      email: 'iu6uyg@omal.com',
      password: 'ododod@#@!',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(user)
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
    done();
  });
});