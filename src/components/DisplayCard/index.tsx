import FavoriteButton from '../FavoriteButton'
import { Container, Title, Subtitle, Footer, Explore } from './styles'

interface IDisplayCardProps {
  title: string
  subtitle: string
  imageUrl: string
}

const DisplayCard: React.FC<IDisplayCardProps> = ({
  imageUrl,
  title,
  subtitle
}) => {
  return (
    <Container imageUrl={imageUrl}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Footer>
        <Explore>Explore</Explore>
        <FavoriteButton />
      </Footer>
    </Container>
  )
}

export default DisplayCard
