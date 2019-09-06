
import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../utilities/app';



chai.should();
chai.use(chaiHttp);

before('should return email already exist', (done) => {
  const newUser = {
    email: 'firaduk@gmail.com',
    password: 'passssssss',
    firstName: 'IRANZI',
    lastName: 'Fiacre',
    address: 'Nyarugenge',
    bio: 'I am a software engineer',
    occupation: 'Software engineer',
    expertise: 'javascript',
  };

  chai.request(app)
    .post('/api/v1/auth/signup')
    .send(newUser)
    .end((err, res) => {
      expect(res).to.have.status(409);
    });
  done();
});

describe('test the user sign up', () => {
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
});

describe('test the user sign in', () => {
 
  it('should sign in user', (done) => {
    const newUser = {
        email: 'firaduk@gmail.com',
        password: 'ibirayi123',
    };
    chai.request(app)
      .post('/api/v1/auth/signin')
      .send(newUser)
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res).to.have.status(200);
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

  it('email not found', (done) => {
    const newUser = {
      email: 'firaduk@yahoo.com',
      password: 'ibirayi123',
  };
  chai.request(app)
    .post('/api/v1/auth/signin')
    .send(newUser)
    .end((err, res) => {
      expect(res.statusCode).to.equal(404);
      expect(res).to.have.status(404);
    });
  done();
  });

  it('password not found', (done) => {
    const newUser = {
      email: 'firaduk@gmail.com',
      password: 'ubugari321',
  };
  chai.request(app)
    .post('/api/v1/auth/signin')
    .send(newUser)
    .end((err, res) => {
      expect(res.statusCode).to.equal(404);
      expect(res).to.have.status(404);
    });
  done();
  });

      
});



describe('test the view mentors', () => {

  it('should show all mentors available to the user', (done) => {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
    chai.request(app)
      .get('/api/v1/mentors')
      .set('Authorization',token)
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
    done();
  });

it('should allow user to view specific mentor',(done)=>{
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  
  chai.request(app)
    .get('/api/v1/mentors/3')
    .set('Authorization',token)
    .end((err,res)=> {

      expect(res).to.have.status(200);
    });
    done();
});
it('should not allow user to view specific mentor',(done)=>{
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  
  chai.request(app)
    .get('/api/v1/mentors/390')
    .set('Authorization',token)
    .end((err,res)=> {

      expect(res).to.have.status(401);
    });
    done();
});


it('This is not a mentor',(done)=>{
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  
  chai.request(app)
    .get('/api/v1/mentors/1')                                                                    
    .set('Authorization',token)
    .end((err,res)=> {

      expect(res).to.have.status(400);
  
    });
    done();
});


});

describe('test the user create session request', () => {

it('should allow user to create a mentorship request',(done)=>{
  const session ={
    mentorId: 1,
    questions:"jdjdjdjdjdjd"
  }
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  
  chai.request(app)
    .post('/api/v1/sessions')
    .set('Authorization', token)
    .send(session)
    .end((err,res)=> {
      
       expect(res).to.have.status(200);
    });
    done();
});

it('questions is required',(done)=>{
  const session ={
    mentorId: 10,
    questions: "dspsdksdkdslkdslkdslksdlks"
  }
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  
  chai.request(app)
    .post('/api/v1/sessions')
    .set('Authorization',token)
    .send(session)
    .end((err,res)=> {
      
       expect(res).to.have.status(404);
    });
    done();
});

it('mentorId required',(done)=>{
  const session ={
    mentorId: "",
    questions:""
  }
  chai.request(app)
    .post('/api/v1/sessions')
    .set('Authorization',session)
    .end((err,res)=> {
      
      
       expect(res).to.have.status(401);
    });
    done();
});

it('mentorId is required',(done)=>{
  const session ={
    mentorId: "",
    questions:"jdjdjdjdjdjd"
  }
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  chai.request(app)
    .post('/api/v1/sessions')
    .set('Authorization',token)
    .send(session)
    .end((err,res)=> {
      expect(res).to.have.status(400);
    });
    done();
});

it('questions is required',(done)=>{
  const session ={
    mentorId: 1,
    questions: ""
  }
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  
  chai.request(app)
    .post('/api/v1/sessions')
    .set('Authorization',token)
    .send(session)
    .end((err,res)=> {
      
       expect(res).to.have.status(400);
    });
    done();
});
it('should not allow user to create a mentorship request',(done)=>{
  const session ={
    mentorId: 3,
    menteeId: 2,
    questions:"jdjdjdjdjdjd"
  }
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  
  chai.request(app)
    .post('/api/v1/sessions')
    .set('Authorization', token)
    .send(session)
    .end((err,res)=> {
      
       expect(res).to.have.status(400);
    });
    done();
});
it('session already created',(done)=>{
  const session ={
    mentorId: 4,
    questions:"jdjdjdjdjdjd"
  }
  const token ="eyJhbGciiJIUI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  
  chai.request(app)
    .post('/api/v1/sessions')
    .set('Authorization', token)
    .send(session)
    .end((err,res)=> {
      
       expect(res).to.have.status(401);
    });
    done();
});

});

describe('test the get sessions', () => {
  
  it('all sessions',(done)=>{

    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
    
    chai.request(app)
      .get('/api/v1/sessions')
      .set('Authorization',token)
      .end((err,res)=> {
         expect(res).to.have.status(200);
      });
      done();
  });
});

describe('test the review sessions', () => {
  it('all sessions',(done)=>{
  const review ={
    score: 2,
    remark: "hjsxhjsxsddskjdsjkdsjkdsjkdkj"
  }
  const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
  
  chai.request(app)
    .post('/api/v1/sessions/1/review')
    .set('Authorization',token)
    .send(review)
    .end((err,res)=> {
      
       expect(res).to.have.status(200);
    });
    done();
  });

  it('all sessions',(done)=>{
    const review ={
      score: 2,
      remark: "hjsxhjsxsddskjdsjkdsjkdsjkdkj"
    }
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
    
    chai.request(app)
      .post('/api/v1/sessions/100/review')
      .set('Authorization',token)
      .send(review)
      .end((err,res)=> {
        
         expect(res).to.have.status(401);
      });
      done();
    });

    it('all sessions',(done)=>{
      const review ={
        score: "2dkkdkdkdkd",
        remark: 3
      }
      const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw"
      
      chai.request(app)
        .post('/api/v1/sessions/1/review')
        .set('Authorization',token)
        .send(review)
        .end((err,res)=> {
          
           expect(res).to.have.status(400);
        });
        done();
      });  

});

