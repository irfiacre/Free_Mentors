import chai, { expect } from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../utilities/app';


chai.should();
chai.use(chaiHttp);

describe('test to accept or reject session request', () => {
  it(' Not a mentor', (done) => {
    const token= process.env.USER_TOKEN;
    chai.request(app)
     .patch('/api/v2/sessions/11/accept')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(403);
      });
    done();
  });

  it('session not found', (done) => {
    const token = process.env.MENTOR_TOKEN;
    chai.request(app)
      .patch('/api/v2/sessions/50/accept')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
    done();
  });

  it(' session accepted', (done) => {
    const token = process.env.MENTOR_TOKEN;
    
    chai.request(app)

      .patch('/api/v2/sessions/11/accept')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
    done();
  });

  it('already accepted', (done) => {
    const token = process.env.MENTOR_TOKEN;
    chai.request(app)
      .patch('/api/v2/sessions/12/accept')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
    done();
  });


  it('session not found', (done) => {
    const token = process.env.MENTOR_TOKEN;

    chai.request(app)
      .patch('/api/v2/sessions/50/accept')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
    done();
  });

  it('session rejected', (done) => {
    const token = process.env.MENTOR_TOKEN;

    chai.request(app)
      .patch('/api/v2/sessions/13/reject')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(200);
      });
    done();
  });
  it(' session  not yours', (done) => {
    const token = process.env.MENTOR_TOKEN;

    chai.request(app)

      .patch('/api/v2/sessions/14/reject')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
    done();
  });

  it('session already rejected', (done) => {
    const token = process.env.MENTOR_TOKEN;

    chai.request(app)
      .patch('/api/v2/sessions/14/reject')
      .set('Authorization', token)
      .end((err, res) => {
        expect(res).to.have.status(404);
      });
    done();
  });
});