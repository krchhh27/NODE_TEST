const request = require('supertest');
const app = require('./index'); // Assuming this is your Express app

describe('GET /example', () => {
  test('should return 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
});