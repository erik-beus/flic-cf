export type SpeakerName = 'Living Room' | 'Kitchen' | 'Garden' | 'Bathroom'

export const allSpeakerNames: SpeakerName[] = ['Living Room', 'Kitchen', 'Garden', 'Bathroom']

export interface ISonosPlay {
  volume?: number
  speaker: SpeakerName
}

export interface ISonosPlayFavorite extends ISonosPlay {
  favorite: number
}

export interface ISonosPlayPlaylist extends ISonosPlay {
  playlist: number
}

export type SonosPlay = ISonosPlayFavorite | ISonosPlayPlaylist

export const isPlayFavorite = (playObject: SonosPlay): playObject is ISonosPlayFavorite => {
  return playObject.hasOwnProperty('favorite')
}

export const isPlayPlaylist = (playObject: SonosPlay): playObject is ISonosPlayPlaylist => {
  return playObject.hasOwnProperty('playlist')
}
