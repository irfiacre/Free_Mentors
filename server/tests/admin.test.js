import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../utilities/app';



chai.should();
chai.use(chaiHttp);

describe('test the user to mentor', () => {

it('should change user to mentor', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
          .patch('/api/v1/user/2')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(200);
          });
        done();
      });

it('should not change user to mentor', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
          .patch('/api/v1/user/2')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(200);
          });
        done();
      });  
      
it('should not change user to mentor', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJmaXJkdWtAZ21haWwuY20iLCJpc19hZG1pbiI6ZmFsc2UsImlzX21lbnRvciI6ZmFsc2UsImlhdCI6MTU2NzMzNjIyMH0.rfNduPgW97X8FYrI5RZJDFANrOOSrvEZ8o1kSxpjuQE" ;
        chai.request(app)
          .patch('/api/v1/user/2')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(403);
          });
        done();
      });       
});

describe('test to delete user', () => {

    it('should delete users review ', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
        .patch('/api/v1/sessions/1/review')
        .set('Authorization',token)
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
      done();
    });

    it('should not delete users review ', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJmaXJkdWtAZ21haWwuY20iLCJpc19hZG1pbiI6ZmFsc2UsImlzX21lbnRvciI6ZmFsc2UsImlhdCI6MTU2NzMzNjIyMH0.rfNduPgW97X8FYrI5RZJDFANrOOSrvEZ8o1kSxpjuQE" ;
        chai.request(app)
        .patch('/api/v1/sessions/1/review')
        .set('Authorization',token)
        .end((err, res) => {
          expect(res).to.have.status(403);
        });
      done();
    });


    it('session not found ', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
        .patch('/api/v1/sessions/5/review')
        .set('Authorization',token)
        .end((err, res) => {
          expect(res).to.have.status(401);
        });
      done();
    });
});