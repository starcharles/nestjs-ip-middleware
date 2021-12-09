import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller()
export class TestController {
  @Get('/hello')
  hello(): string {
    return 'hello';
  }

  @Get('/ip')
  getIp(@Req() req: Request): string {
    return req.realIp;
  }
}
