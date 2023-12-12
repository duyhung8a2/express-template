export {};

declare global {
  namespace Express {
    export interface Request {
      test: string;
    }
  }
}
