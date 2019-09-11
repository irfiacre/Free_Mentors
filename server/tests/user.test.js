
import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../utilities/app';
import 'dotenv';
import testInfo from '../models/testModel'

chai.should();
chai.use(chaiHttp);


describe('test for incorrect URL', () => {

  it('should show BAD REQUEST', (done) => {

    const token = process.env.USER_TOKEN;

    chai.request(app)
      .get('/api/v1/ment')
      .set('Authorization',token)
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
    done();
  });

})

before('should return email already exist', (done) => {

  chai.request(app)
    .post('/api/v1/auth/signup')
    .send(testInfo[3])
    .end((err, res) => {
      expect(res).to.have.status(400);
    });
  done();
});

describe('test the user sign up', () => {
  it('should sign up new user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(testInfo[6])
      .end((err, res) => {
        expect(res).to.have.status(201);
      });
    done();
  });

  it('should validate the user', (done) => {
    
    chai.request(app)
      .post('/api/v1/auth/signup')
      .send(testInfo[4])
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
    done();
  });
});

describe('test the user sign in', () => {

  
 
  it('should sign in user', (done) => {
    
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(testInfo[1])
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res).to.have.status(200);
      });
    done();
  });

it('should validate the user', (done) => {
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(testInfo[0])
      .end((err, res) => {
        expect(res).to.have.status(400);
      });
    done();
  });

  it('email not found', (done) => {
   
  chai.request(app)
    .post('/api/v1/auth/signin')
    .send(testInfo[2])
    .end((err, res) => {
      expect(res.statusCode).to.equal(422);
      expect(res).to.have.status(422);
    });
  done();
  });

  it('password not found', (done) => {

  chai.request(app)
    .post('/api/v1/auth/signin')
    .send(testInfo[2])
    .end((err, res) => {
      expect(res.statusCode).to.equal(404);
      expect(res).to.have.status(404);
    });
  done();
  });

      
});



describe('test the view mentors', () => {

  it('YOU must sign in ', (done) => {
    
    chai.request(app)
   .patch('/api/v1/auth/signin')
   .end((err, res) => {
     expect(res).to.have.status(401);
   });
 done();

});

  it('should show all mentors available to the user', (done) => {
    const token =process.env.USER_TOKEN;
    chai.request(app)
      .get('/api/v1/mentors')
      .set('Authorization',token)
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
    done();
  });

it('should allow user to view specific mentor',(done)=>{
  const token =process.env.USER_TOKEN;
  chai.request(app)
    .get('/api/v1/mentors/3')
    .set('Authorization',token)
    .end((err,res)=> {

      expect(res).to.have.status(200);
    });
    done();
});
it('should not allow user to view specific mentor',(done)=>{
  const token =process.env.USER_TOKEN;
  chai.request(app)
    .get('/api/v1/mentors/390')
    .set('Authorization',token)
    .end((err,res)=> {

      expect(res).to.have.status(404);
    });
    done();
});


it('This is not a mentor',(done)=>{
  const token =process.env.USER_TOKEN;
  chai.request(app)
    .get('/api/v1/mentors/1')                                                                    
    .set('Authorization',token)
    .end((err,res)=> {

      expect(res).to.have.status(400);
  
    });
    done();
});


});




