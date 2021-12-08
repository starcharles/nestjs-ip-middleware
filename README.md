# Nest.js real IP Middleware

A middleware for retrieving a users' real IP address from http request and attach 'realIp' field to req.

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

## Example Usage at Controller

```typescript
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('real-ip')
  getIp(@Req() req: Request): string {
    return req['realIp']; // req.realIp is set by this middleware
  }
}


```

## Special Thanks
This middleware built using awesome 'request-ip' library.

## License
The code is under MIT license. See the LICENSE file for details.

## TODO
- add tests
- introduce GitHub actions(CI/CD)
