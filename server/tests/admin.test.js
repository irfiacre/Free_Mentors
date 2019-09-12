import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../utilities/app';

chai.should();
chai.use(chaiHttp);

describe('Incorrect URL', () => {
it('should change user to mentor', (done) => {
  const token = process.env.ADMIN_TOKEN;
  chai.request(app)
    .patch('/api/v1/use')
    .set('Authorization',token)
    .end((err, res) => {
      expect(res).to.have.status(400);
    });
  done();
});
})

describe('test the user to mentor', () => {

it('should change user to mentor', (done) => {
  const token = process.env.ADMIN_TOKEN;
  chai.request(app)
          .patch('/api/v1/user/2')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(200);
          });
        done();
      });

 

it('should not change user to mentor', (done) => {
        const token = process.env.ADMIN_TOKEN;

          chai.request(app)
          .patch('/api/v1/user/1')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(208);
          });
        done();
      });  
      
it('should not change user to mentor, Not an admin ', (done) => {
  const token = process.env.USER_TOKEN;
       chai.request(app)
          .patch('/api/v1/user/3')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(403);
          });
        done();
      }); 
      
it(' userId not found ', (done) => {
        const token = process.env.ADMIN_TOKEN;

          chai.request(app)
          .patch('/api/v1/user/548')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(404);
          });
        done();
      });
      
it(' userId must be an integer ', (done) => {
        const token = process.env.ADMIN_TOKEN;
           chai.request(app)
          .patch('/api/v1/user/djdjdj')
          .set('Authorization',token)
          .end((err, res) => {
            expect(res).to.have.status(400);
          });
        done();
      });

      it('YOU must sign in ', (done) => {
           chai.request(app)
          .patch('/api/v1/user/2')
          .end((err, res) => {
            expect(res).to.have.status(401);
          });
        done();
      });
      
});


