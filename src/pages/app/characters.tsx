import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { marvel } from '../../services/marvel'

import useAuth from '../../hooks/useAuth'
import useDebounce from '../../hooks/useDebounce'

import Header from '../../components/Header'
import Search from '../../components/Search'
import Loader from '../../components/Loader'
import DisplayCard from '../../components/DisplayCard'

import ICharacterDTO from '../../dtos/ICharacterDTO'

import { Container, Content, Grid } from '../../styles/pages/App'
import api from '../../services/api'

const Characters: React.FC = () => {
  const { user } = useAuth()
  const router = useRouter()
  const [search, setSearch] = useState<string | undefined>()
  const debouncedSearch = useDebounce<string | undefined>(search, 500)
  const [characters, setCharacters] = useState<ICharacterDTO[]>([])
  const [favoriteCharacters, setFavoriteCharacters] = useState<
    { marvel_character_id: string }[]
  >([])
  
  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const characterName = event.currentTarget.value || undefined

      setSearch(characterName)
    },
    [debouncedSearch]
  )

  const handleGetAllCharacters = useCallback(
    async (value?: string | undefined) => {
      const { data } = await marvel.get('characters', {
        params: value ? { nameStartsWith: value } : {}
      })

      setCharacters(data.data.results)
    },
    [search]
  )

  const handleGetAllFavoriteCharacters = useCallback(async () => {
    const { data } = await api.get('favorite-characters')

    setFavoriteCharacters(data)
  }, [])

  useEffect(() => {
    if (!user) {
      router.replace('/')
    }
  }, [router, user])

  useEffect(() => {
    handleGetAllCharacters(search)
  }, [debouncedSearch])

  useEffect(() => {
    handleGetAllFavoriteCharacters()
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Search
            label="Search character: "
            value={search}
            onChange={handleSearch}
          />
          {!!characters.length?  (
            <Grid>
              {characters.map(character => (
                <DisplayCard
                  imageUrl={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                  type="character"
                  data={character}
                  isFavorite={favoriteCharacters.some(
                    favoriteCharacter =>
                      favoriteCharacter.marvel_character_id ===
                      String(character.id)
                  )}
                />
              ))}
            </Grid>
          ): (<Loader />)}
        </Content>
      </Container>
    </>
  )
}

export default Characters
