import supertest from 'supertest';
import app from '../src/app';

const request = supertest(app);

describe('/test endpoint', () => {
  it('should return a response', async () => {
    const response = await request.get('/test');
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual({ users: 'hello' });
  });
});
