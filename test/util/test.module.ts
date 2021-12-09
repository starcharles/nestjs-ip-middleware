import { MiddlewareConsumer, Module } from '@nestjs/common';
import { RequestIpMiddleware } from '../../dist';
import { TestController } from './test.controller';

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
