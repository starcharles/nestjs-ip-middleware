import { Injectable, NestMiddleware } from '@nestjs/common';
import { getClientIp, RequestHeaders } from 'request-ip';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class RequestIpMiddleware implements NestMiddleware {
  use(
    req: Request & { headers: RequestHeaders },
    res: Response,
    next: NextFunction,
  ): void {
    req.realIp = getClientIp(req);
    next();
  }
}
