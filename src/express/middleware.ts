import { Request, Response } from 'express'

export function errorResponse(response: Response, message: string, statusCode: number) {
  return response
    .status(statusCode)
    .json({ message })
    .end()
}

export const hasMagicHeader = (req: Request) => {
  const headerName = process.env.hasOwnProperty('HEADER_NAME') ? process.env.HEADER_NAME! : 'magic'
  const headerValue = process.env.hasOwnProperty('HEADER_VALUE') ? process.env.HEADER_VALUE! : 'JOHNSON'
  return req.headers[headerName] && req.headers[headerName] === headerValue ? true : false
}
