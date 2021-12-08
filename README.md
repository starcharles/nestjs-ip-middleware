# Nest.js real ip Middleware

A middleware for retrieving an IP address from http request and attach 'realIp' field to req.

[![NPM package link](https://nodei.co/npm/nestjs-real-ip.png?downloads=true&cacheBust=2)](https://www.npmjs.com/package/nestjs-real-ip)

## Installation

```shell script
npm install nestjs-ip-middleware

```

## Example module setup

```typescript
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { LoggerMiddleware } from 'nestjs-ip-middleware;
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('cats');
  }
}
// import { RealIP } from 'nestjs-real-ip';

// @Controller('/')
// class TestController {
//   @Get('my-ip')
//   get(@RealIP() ip: string): string {
//     return ip;
//   }
// }
```

## Special Thanks
This middleware is built using 'request-ip' library.

## License
The code is under MIT license. See the LICENSE file for details.
