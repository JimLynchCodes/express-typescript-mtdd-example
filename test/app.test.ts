import request from 'supertest';

import app from '../src/app';

describe('not found routes', () => {
  it('responds with emoji in production', (done) => {
    
    process.env['NODE_ENV'] = "production"
    
    request(app)
      .get('/what-is-this-even')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
  it('responds with a not found message when not production', (done) => {
    
    process.env['NODE_ENV'] = "not production"
    
    request(app)
      .get('/what-is-this-even')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
  it('', (done) => {
    
    request(app)
      .get('/')
      .set('Accept', 'text')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
      }, done);
  });
});
