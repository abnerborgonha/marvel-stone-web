import ICharacterDTO from './ICharacterDTO'

export default interface IComicDataDTO {
  id: number
  title: string
  desciption?: string
  thumbnail: { path: string; extension: string }
  characters: { items: ICharacterDTO[] }
}
