import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { marvel } from '../../services/marvel'

import useAuth from '../../hooks/useAuth'

import Header from '../../components/Header'
import Search from '../../components/Search'
import DisplayCard from '../../components/DisplayCard'

import ICharacterDTO from '../../dtos/ICharacterDTO'

import { Container, Content, Grid } from '../../styles/pages/Charactes'

const Characters: React.FC = () => {
  const { user } = useAuth()
  const router = useRouter()
  const [search, setSearch] = useState<string | undefined>()
  const [characters, setCharacters] = useState<ICharacterDTO[]>([])

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const characterName = event.currentTarget.value || undefined

      setSearch(characterName)
    },
    []
  )

  const handleGetAllCharacters = useCallback(
    async (value?: string | undefined) => {
      const { data } = await marvel.get('characters', {
        params: value ? { nameStartsWith: value } : {}
      })

      setCharacters(data.data.results)
    },
    []
  )
  
  useEffect(() => {
    if (!user) {
      router.replace('/')
    }
  }, [router, user])

  useEffect(() => {
    handleGetAllCharacters(search)
  }, [search, setSearch])

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
          <Grid>
            {characters.map(character => (
              <DisplayCard
                imageUrl={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
                title={character.name}
              />
            ))}
          </Grid>
        </Content>
      </Container>
    </>
  )
}

export default Characters
