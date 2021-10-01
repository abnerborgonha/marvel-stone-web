import ICharacterDataDTO from '../../dtos/ICharacterDTO'

import { Container, Header, Title, Image, Description } from './styles'

interface ICharacterModalContentProps {
  data: ICharacterDataDTO
}

const CharacterModalContent: React.FC<ICharacterModalContentProps> = ({
  data
}) => {
  return (
    <Container>
      <Header>
        <Image
          imageUrl={`${data.thumbnail.path}/portrait_uncanny.${data.thumbnail.extension}`}
        />
        <Title>{data.name}</Title>
      </Header>

      <Description>
        {data.description || 'This character has no history to telling ...'}
      </Description>
    </Container>
  )
}

export default CharacterModalContent
