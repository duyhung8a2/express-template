import { NextFunction, Request, Response } from 'express';

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const testString = 'joke';
    req.test = testString;
    next();
  } catch (error) {
    next(error);
  }
};
