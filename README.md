# Nest.js real ip Middleware

A middleware for retrieving an IP address from http request and attach 'realIp' field to req.

[![NPM package link](https://nodei.co/npm/nestjs-ip-middlewa.png?downloads=true&cacheBust=2)](https://www.npmjs.com/package/nestjs-ip-middleware)

## Installation

```shell script
npm install nestjs-ip-middleware

```

## Example module setup

```typescript
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestIpMiddleware } from 'nestjs-ip-middleware'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestIpMiddleware)
      .forRoutes('*');
  }
}
```

## Special Thanks
This middleware is built using 'request-ip' library.

## License
The code is under MIT license. See the LICENSE file for details.

## TODO
- add tests