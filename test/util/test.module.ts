import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { RequestIpMiddleware } from '../../src';

@Module({
  imports: [],
  providers: [RequestIpMiddleware],
  controllers: [TestController],
})
export class TestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestIpMiddleware).forRoutes('*');
  }
}
