import * as request from 'supertest';
import app from './../../app';

describe('Mocha: Example routes', () => {

  it('should get 200 response when calling with hook', done => {
    request(app)
      .post('/api/hook')
      .expect(200, done);
  });

});
