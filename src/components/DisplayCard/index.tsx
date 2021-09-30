

import { useCallback } from 'react'
import useModal from '../../hooks/useModal'
import FavoriteButton from '../FavoriteButton'

import { Container, Title, Subtitle, Footer, Explore } from './styles'

interface IDisplayCardProps {
  type: 'comic' | "character"
  data: any
  imageUrl: string
  isFavorite: boolean
}

const DisplayCard: React.FC<IDisplayCardProps> = ({
  data,
  type,
  imageUrl,
  isFavorite
}) => {
  const {showModal} = useModal()

  const handleShowCard = useCallback(() => {
    showModal({
      type,
      data
    })
  },[])

  return (
    <Container imageUrl={imageUrl} >
      <Title>{data.name}</Title>
      <Footer>
        <Explore onClick={handleShowCard} >Explore</Explore>
        <FavoriteButton isFavorite={isFavorite} />
      </Footer>
    </Container>
  )
}

export default DisplayCard
