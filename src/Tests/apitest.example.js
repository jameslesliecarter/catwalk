/*
==============================================
GETTING STARTED
==============================================
the beginning of your test file should include the following:

const app = require('../../server/index.js');
const supertest = require('supertest');
const request = supertest(app);

=============================================
WRITING YOUR OWN TESTS
=============================================

Test suites should be of the following form:

describe('FILL_ME_IN this area should describe what the *suite* of tests accomplishes', () => {
  it('FILL_ME_IN this is a single unit test', async done => {
    const response = await request.[HTTP METHOD YOU ARE TESTING]('[ENDPOINT YOU ARE TESTING]');
    expect([LIVE RESULT FROM SERVER]).toBe([EXPECTED RESULT]);
    done();
  });
});

Each "it" block should have several meaningful tests, i.e.
expect(response.status).toBe(200) or whatever you think it should be
expect(response.body).to.exist

and other tests of this nature.

Make sure you end each "it" block with 'done()' or else it will hang.

*/