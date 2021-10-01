import { useState } from 'react'

import { Container, HeartIcon, HeartEmptyIcon } from './styles'

interface IFavoriteButtonProps {
  isFavorite: boolean
  favoriteEvent(): Promise<void>
}

const FavoriteButton: React.FC<IFavoriteButtonProps> = ({
  isFavorite,
  favoriteEvent
}) => {
  const [isFavorited, setIsFavorited] = useState(isFavorite || false)

  const handleFavoritePress = async () => {
    setIsFavorited(state => !state)
    await favoriteEvent()
  }

  return (
    <Container onClick={handleFavoritePress}>
      {isFavorited ? <HeartIcon /> : <HeartEmptyIcon />}
    </Container>
  )
}

export default FavoriteButton
