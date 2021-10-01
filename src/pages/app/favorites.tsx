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

type SelectedOptionFavorite = 'character' | 'comic'

const Favorites: React.FC = () => {
  const { user } = useAuth()
  const router = useRouter()

  const [search, setSearch] = useState<string | undefined>()

  const [selectedOptionFavorite, setSelectedOptionFavorite] =
    useState<SelectedOptionFavorite>('character')

  const [favorites, setFavorites] = useState<IComicDTO[] | ICharacterDTO[]>([])


  const handleSelectedOptionFavorite = useCallback((type: SelectedOptionFavorite) => {
    setSelectedOptionFavorite(type)
  }, [])

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const comicsName = event.currentTarget.value || undefined

      setSearch(comicsName)
    },
    []
  )

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

          <Grid>
            {/* {comics.map(comics => (
              <DisplayCard
                imageUrl={`${comics.thumbnail.path}/portrait_uncanny.${comics.thumbnail.extension}`}
                type="comic"
                data={comics}
                isFavorite
              />
            ))} */}
          </Grid>
        </Content>
      </Container>
    </>
  )
}

export default Favorites
