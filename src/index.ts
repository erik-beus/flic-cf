import { Request, Response } from 'express'
import { hasMagicHeader, errorResponse } from './express/middleware'
import { handleFlic } from './flic/flicMiddleware'

export function flicTrigger(req: Request, res: Response) {
  if (!hasMagicHeader(req)) {
    return errorResponse(res, 'Invalid request', 403)
  }
  if (req.method !== 'GET') {
    return errorResponse(res, 'Invalid method', 403)
  }
  handleFlic(req, res)
}
