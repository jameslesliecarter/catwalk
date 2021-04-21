const app = require('../../server/index.js');
const supertest = require('supertest');
const request = supertest(app);
import 'regenerator-runtime/runtime';

describe('Testing Q and A endpoints', () => {
  it('Gets the QandA test endpoint', async done => {
    const response = await request.get('/qa/questions/test');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('pass!');
    done();
  });
  it('Should get questions based on product id', async done => {
    const response = await request.get('/qa/questions/?product_id=19089');
    expect(response.status).toBe(200);
    expect(response.body.results.length).toBe(3);
    expect(response.body.results[0].question_id).toBe(123898);
    done();
  });
  it('Should get answers based on question id', async done => {
    const response = await request.get('/qa/questions/123898/answers/?page=1');
    expect(response.status).toBe(200);
    expect(response.body[0].answer_id).toBe(1172692);
    done();
  });
});