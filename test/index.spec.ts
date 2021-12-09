import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { TestModule } from './util/test.module';

describe('test', () => {
  describe('1+1', () => {
    it('should pass', () => {
      expect(1 + 1).toBe(2);
    });
  });
  describe('Middleware', () => {
    let server;
    beforeAll(async () => {
      const module = await Test.createTestingModule({
        imports: [TestModule],
      }).compile();
      const app = module.createNestApplication();
      await app.init();
      server = app.getHttpServer();
    });

    afterAll(() => {
      server.close();
    });

    it('GET /hello', () => {
      return request(server)
        .get('/hello')
        .expect(200)
        .expect('hello');
    });

    it('GET /ip', () => {
      return request(server)
        .get('/ip')
        .set('X-Forwarded-For', '10.10.10.10')
        .expect(200)
        .expect('10.10.10.10');
    });
  });
});
