import * as PubSub from '@google-cloud/pubsub'
import { SonosPlay, isPlayFavorite } from './sonosTypes'

export const mapSonosPlayToPubSub = (play: SonosPlay): PubSub.Publisher.Attributes => {
  const message: PubSub.Publisher.Attributes = {
    speaker: `${play.speaker}`,
  }
  if (play.volume) {
    message.volume = `${play.volume}`
  }
  if (isPlayFavorite(play)) {
    message.favorite = `${play.favorite}`
  } else {
    message.playlist = `${play.playlist}`
  }
  return message
}
