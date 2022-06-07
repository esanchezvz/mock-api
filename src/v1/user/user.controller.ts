import { NextFunction, Request, Response } from 'express';

import { UserService } from '.';

export class UserController {
  public static async getAll(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const users = await UserService.getAll();

      return res.status(200).json({ data: users });
    } catch (error) {
      next(error);
    }
  }
}
