import { NextFunction, Request, Response } from 'express';
import { AppError } from '../config/AppError';

export const handleGetAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = 'hello';
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

export const handleError = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Test if CI work
    throw new AppError(418, 'Hello teapot');
  } catch (error) {
    next(error);
  }
};
