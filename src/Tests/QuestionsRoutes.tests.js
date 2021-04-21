const app = require('../../server/index.js');
const supertest = require('supertest');
const request = supertest(app);

describe('Testing Q and A endpoints', () => {
  it('Gets the QandA test endpoint', async done => {
    const res = await request.get('/qa/questions/test')
    expect(response.status).toBe(200)
    expect(response.body.message)toBe('pass!')
    done();
  });
});