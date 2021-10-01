import IComicDataDTO from '../../dtos/IComicDTO'

import { Container, Header, Title, Image, Description } from './styles'

interface IComicModalContentProps {
  data: IComicDataDTO
}

const ComicModalContent: React.FC<IComicModalContentProps> = ({ data }) => {
  return (
    <Container>
      <Header>
        <Image
          imageUrl={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}
        />
        <Title>{data.title}</Title>
      </Header>

      <Description>
        {!!data.description
          ? data.description.replace(/<[^>]+>/g, '')
          : 'This comic has no history to telling ...'}
      </Description>
    </Container>
  )
}

export default ComicModalContent
