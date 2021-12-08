import { Injectable, NestMiddleware } from '@nestjs/common';
import { getClientIp } from 'request-ip';
import { NextFunction, Request } from 'express';

@Injectable()
export class RequestIpMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    req['realIp'] = getClientIp(req);
    next();
  }
}
