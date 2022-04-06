import { Response } from "express";

class Responses {
  static errorResponse(res: Response, msg: string, error: Error, code: number) {
    return res.status(code).json({
      ok: false,
      msg,
      error,
    });
  }

  //Standard success response, can be personalized with a message
  static customResponse(res: Response, msg: string, code: number = 200) {
    return res.status(code).json({
      ok: true,
      msg,
    });
  }

  //Standard error response, can be personalized with a message
  static customErrorResponse(res: Response, msg: string, code: number) {
    return res.status(code).json({
      ok: false,
      msg,
    });
  }
}

export default Responses;
