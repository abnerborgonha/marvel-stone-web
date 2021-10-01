import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { marvel } from '../../services/marvel'

import Header from '../../components/Header'
import Search from '../../components/Search'
import DisplayCard from '../../components/DisplayCard'

import useAuth from '../../hooks/useAuth'

import IComicDTO from '../../dtos/IComicDTO'
import ICharacterDTO from '../../dtos/ICharacterDTO'

import {
  Container,
  Content,
  Grid,
  FavoriteOptions
} from '../../styles/pages/App'
import Button from '../../components/Button'
import api from '../../services/api'
import axios from 'axios'

type SelectedOptionFavorite = 'character' | 'comic'

const Favorites: React.FC = () => {
  const { user } = useAuth()
  const router = useRouter()

  const [search, setSearch] = useState<string | undefined>()

  const [selectedOptionFavorite, setSelectedOptionFavorite] =
    useState<SelectedOptionFavorite>('character')

  const [favorites, setFavorites] = useState<IComicDTO[] | ICharacterDTO[]>([])

  const handleGetAllFavorites = useCallback(async () => {
    if (selectedOptionFavorite === 'character') {
      const { data: favoriteCharacters } = await api.get<{marvel_character_id: string}[]>('favorite-characters')

      const responses = await axios.all(
        favoriteCharacters.map(favoriteCharacter =>
          marvel.get(`characters/${favoriteCharacter.marvel_character_id}`)
        )
      )

      
      
      const characters = responses.map(response => response.data.data.results[0]) 
      setFavorites(characters)
    } else {
      const { data: favoriteComics } = await api.get<{marvel_comic_id: string}[]>('favorite-comics')

      const responses = await axios.all(
        favoriteComics.map(favoriteComic =>
          marvel.get(`comics/${favoriteComic.marvel_comic_id}`)
        )
      )

      
      
      const comics = responses.map(response => response.data.data.results[0]) 
      setFavorites(comics)
    }
  }, [selectedOptionFavorite])

  const handleSelectedOptionFavorite = useCallback(
    (type: SelectedOptionFavorite) => {
      setSelectedOptionFavorite(type)
    },
    []
  )

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const comicsName = event.currentTarget.value || undefined

      setSearch(comicsName)
    },
    []
  )
  
  useEffect(() => {
    handleGetAllFavorites()
  }, [selectedOptionFavorite])

  useEffect(() => {
    if (!user) {
      router.replace('/')
    }
  }, [router, user])

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Search
            label={`Search your favorite ${
              selectedOptionFavorite === 'character' ? 'characters' : 'comics'
            }:`}
            value={search}
            onChange={handleSearch}
          />
          <FavoriteOptions>
            <Button
              label="Characters"
              secondary={selectedOptionFavorite === 'comic'}
              onClick={() => handleSelectedOptionFavorite('character')}
            />
            <Button
              label="Comics"
              secondary={selectedOptionFavorite === 'character'}
              onClick={() => handleSelectedOptionFavorite('comic')}
            />
          </FavoriteOptions>

         {!!favorites.length && <Grid>
            {favorites.map(favorite => (
              <DisplayCard
              key={favorite.id}
                imageUrl={`${favorite.thumbnail.path}/portrait_uncanny.${favorite.thumbnail.extension}`}
                type={selectedOptionFavorite}
                data={favorite}
                isFavorite
              />
            ))}
          </Grid>}
        </Content>
      </Container>
    </>
  )
}

export default Favorites
