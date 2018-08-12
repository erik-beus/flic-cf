import { SonosPlay } from '../sonos/sonosTypes'

// Temporary place to store flic configuration - should go in db
export type FlicColor = 'Black' | 'Green' | 'Red'
export const allFlicColors: FlicColor[] = ['Black', 'Green', 'Red']
export const isValidFlicColor = (color: string) => allFlicColors.includes(color as FlicColor)

export const flicConf: Record<FlicColor, SonosPlay> = {
  Black: {
    speaker: 'Garden',
    favorite: 2,
  },
  Green: {
    speaker: 'Garden',
    favorite: 0,
  },
  Red: {
    speaker: 'Garden',
    playlist: 0,
  },
}
