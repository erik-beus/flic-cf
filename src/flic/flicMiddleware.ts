import { Request, Response } from 'express'
import { errorResponse } from '../express/middleware'
import { sendPlayMessage } from '../pubsub/pubsub'
import { mapSonosPlayToPubSub } from '../sonos/sonosMappers'
import { FlicColor, flicConf, isValidFlicColor } from './flicConfig'

export const handleFlic = async (req: Request, res: Response) => {
  const flicUnit = req.query.hasOwnProperty('color') ? req.query['color'] : null
  if (!isValidFlicColor(flicUnit)) {
    return errorResponse(res, 'Unknown unit', 404)
  }
  const configuration = flicConf[flicUnit as FlicColor]
  const message = mapSonosPlayToPubSub(configuration)
  const publishSuccess = await sendPlayMessage(message)
  res.status(publishSuccess ? 200 : 400).json({ success: publishSuccess })
}
