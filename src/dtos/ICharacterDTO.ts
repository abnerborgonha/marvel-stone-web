import IComicDTO from './IComicDTO'

export default interface ICharacterDTO {
  id: number
  thumbnail: { path: string; extension: string }
  comics: { items: IComicDTO[] }
  name: string
}
