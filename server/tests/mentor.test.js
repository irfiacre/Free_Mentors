import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../utilities/app';



chai.should();
chai.use(chaiHttp);

describe('test to accept or reject session request', () => {

    it('session not found', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
          .patch('/api/v1/sessions/5/accept')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(401);
          });
        done();
      });

    it(' session accepted', (done) => {
      const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
      
      chai.request(app)
        .patch('/api/v1/sessions/2/accept')
        .set('Authorization',token)
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
      done();
    });
    
      it('already accepted', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
          .patch('/api/v1/sessions/1/accept')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(401);
          });
        done();
      });

      it('session not found', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
          .patch('/api/v1/sessions/5/reject')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(401);
          });
        done();
      });

      it('session rejected', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
          .patch('/api/v1/sessions/1/reject')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(200);
          });
        done();
      });

      it('session already rejected', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
          .patch('/api/v1/sessions/1/reject')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(401);
          });
        done();
      });

});

describe('test to view all session requests', () => {

    it('all session requests', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJmaXJhZHVrQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpc19tZW50b3IiOmZhbHNlLCJpYXQiOjE1NjcyNTk1MTl9.oj8RebPJpU1yZCpi90sehGA0fErdJiTPGNw_8pCf4Gw" ;
        chai.request(app)
          .get('/api/v1/Sessionz')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(200);
          });
        done();
      });


});