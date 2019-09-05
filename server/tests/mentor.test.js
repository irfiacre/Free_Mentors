import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../utilities/app';



chai.should();
chai.use(chaiHttp);

describe('test to accept or reject session request', () => {

  it(' Not a mentor', (done) => {
    const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJmaXJkdWtAZ21hLmNvbSIsImlzX21lbnRvciI6ZmFsc2UsImlzX2FkbWluIjpmYWxzZSwiaWF0IjoxNTY2OTk4NDU0fQ.kZDdJ2HQZPfGT4mYhONsPV3Pcs2CGppFKGxeO3_DoRo"
    chai.request(app)

      .patch('/api/v1/sessions/2/accept')
      .set('Authorization',token)
      .end((err, res) => {
        expect(res).to.have.status(403);
      });
    done();
  });

    it('session not found', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjaGFsdG9AZ21haWwuY29tIiwiaXNfYWRtaW4iOmZhbHNlLCJpc19tZW50b3IiOnRydWUsImlhdCI6MTU2NzYzMTYzNX0.anR526NQxBzr9MQNVzk2BH8oVYchM8lbdknNivnxLYY" ;
        chai.request(app)
          .patch('/api/v1/sessions/5/accept')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(401);
          });
        done();
      });

    it(' session accepted', (done) => {
      const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjaGFsdG9AZ21haWwuY29tIiwiaXNfYWRtaW4iOmZhbHNlLCJpc19tZW50b3IiOnRydWUsImlhdCI6MTU2NzYzMTYzNX0.anR526NQxBzr9MQNVzk2BH8oVYchM8lbdknNivnxLYY"
      chai.request(app)

        .patch('/api/v1/sessions/2/accept')
        .set('Authorization',token)
        .end((err, res) => {
          expect(res).to.have.status(200);
        });
      done();
    });
    
      it('already accepted', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjaGFsdG9AZ21haWwuY29tIiwiaXNfYWRtaW4iOmZhbHNlLCJpc19tZW50b3IiOnRydWUsImlhdCI6MTU2NzYzMTYzNX0.anR526NQxBzr9MQNVzk2BH8oVYchM8lbdknNivnxLYY" ;
        chai.request(app)
          .patch('/api/v1/sessions/1/accept')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(400);
          });
        done();
      });



      it('session not found', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjaGFsdG9AZ21haWwuY29tIiwiaXNfYWRtaW4iOmZhbHNlLCJpc19tZW50b3IiOnRydWUsImlhdCI6MTU2NzYzMTYzNX0.anR526NQxBzr9MQNVzk2BH8oVYchM8lbdknNivnxLYY" ;
        chai.request(app)
          .patch('/api/v1/sessions/5/reject')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(401);
          });
        done();
      });

      it('session rejected', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjaGFsdG9AZ21haWwuY29tIiwiaXNfYWRtaW4iOmZhbHNlLCJpc19tZW50b3IiOnRydWUsImlhdCI6MTU2NzYzMTYzNX0.anR526NQxBzr9MQNVzk2BH8oVYchM8lbdknNivnxLYY" ;
        chai.request(app)
          .patch('/api/v1/sessions/1/reject')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(200);
          });
        done();
      });

      it('session already rejected', (done) => {
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjaGFsdG9AZ21haWwuY29tIiwiaXNfYWRtaW4iOmZhbHNlLCJpc19tZW50b3IiOnRydWUsImlhdCI6MTU2NzYzMTYzNX0.anR526NQxBzr9MQNVzk2BH8oVYchM8lbdknNivnxLYY" ;
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
        const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJjaGFsdG9AZ21haWwuY29tIiwiaXNfYWRtaW4iOmZhbHNlLCJpc19tZW50b3IiOnRydWUsImlhdCI6MTU2NzYzMTYzNX0.anR526NQxBzr9MQNVzk2BH8oVYchM8lbdknNivnxLYY" ;
        chai.request(app)
          .get('/api/v1/sessions')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(200);
          });
        done();
      });

      

});