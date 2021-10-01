import { useCallback } from 'react'
import useModal from '../../hooks/useModal'
import api from '../../services/api'
import FavoriteButton from '../FavoriteButton'

import { Container, Title, Footer, Explore } from './styles'

interface IDisplayCardProps {
  type: 'comic' | 'character'
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
  const { showModal } = useModal()

  const handleShowCard = useCallback(() => {
    showModal({
      type,
      data
    })
  }, [])

  const handleFavorite = async () => {
    const isCharacterType = type === 'character'

    if (isCharacterType) {
      try {
        await api.get(`favorite-characters/${data.id}`)

        await api.delete(`favorite-characters/${data.id}`)
      } catch (error) {
        await api.post(`favorite-characters`, {
          marvel_character_id: String(data.id)
        })
      }
    } else {
      try {
        await api.get(`favorite-comics/${data.id}`)

        await api.delete(`favorite-comics/${data.id}`)
      } catch (error) {
        await api.post(`favorite-comics`, {
          marvel_comic_id: String(data.id)
        })
      }
    }
  }

  return (
    <Container imageUrl={imageUrl}>
      <Title>{data.name || data.title}</Title>
      <Footer>
        <Explore onClick={handleShowCard}>Explore</Explore>
        <FavoriteButton
          isFavorite={isFavorite}
          favoriteEvent={handleFavorite}
        />
      </Footer>
    </Container>
  )
}

export default DisplayCard
