const app = require('../../server/index.js');
const supertest = require('supertest');
const request = supertest(app);

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
  // Commenting out during development. No need to make a bazillion questions for one product.
  xit('Should post question based on product_id', async done => {
    const response = await request.post('/qa/questions/').send({body: 'Test Body for Product 19089', name: 'Jimmy James', email: 'l337@h4x0rz.cx', product_id: 19089});
    expect(response.status).toBe(201);
    done();
  });
  xit('Should post an answer based on question id', async done => {
    const response = await request.post('/qa/questions/182925/answers').send({body: 'If anybody knew, we would all be free.', name: 'James Jimmy', email: 'doomFrog@WillyWonka.net', photos: []});
    expect(response.status).toBe(201);
    done();
  });
  xit('Should mark a question as helpful', async done => {
    const response = await request.put('/qa/questions/182925/helpful');
    expect(response.status).toBe(204);
    done();
  });
  xit('Should report a question', async done => {
    const response = await request.put('/qa/questions/182925/report');
    expect(response.status).toBe(204);
    done();
  });
  it('Should mark an answer as helpful', async done => {
    const response = await request.put('/qa/answers/1172692/helpful');
    expect(response.status).toBe(204);
    done();
  });
  it('Should mark an answer as reported', async done => {
    const response = await request.put('/qa/answers/1172692/report');
    expect(response.status).toBe(204);
    done();
  })
  it('Should send post body to test endpoint', async done => {
    const response = await request.post('/qa/questions/test').send({body: 'this is a body'});
    expect(response.status).toBe(200);
    expect(response.body.body).toBe('this is a body');
    done();
  });
});