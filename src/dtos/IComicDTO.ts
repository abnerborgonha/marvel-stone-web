import ICharacterDTO from './ICharacterDTO'

export default interface IComicDataDTO {
  id: number
  title: string
  description: string | null
  thumbnail: { path: string; extension: string }
  characters: { items: ICharacterDTO[] }
}
