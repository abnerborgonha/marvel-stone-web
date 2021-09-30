import React from 'react'

import { Container, HeartIcon, HeartEmptyIcon } from './styles'

interface IFavoriteButtonProps {
  isFavorite: boolean
}

const FavoriteButton: React.FC<IFavoriteButtonProps> = ({ isFavorite }) => {
  return (
    <Container>
      {isFavorite ? <HeartIcon /> : <HeartEmptyIcon />}
    </Container>
  )
}

export default FavoriteButton
