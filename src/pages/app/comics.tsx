import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { marvel } from '../../services/marvel'

import Header from '../../components/Header'
import Search from '../../components/Search'
import DisplayCard from '../../components/DisplayCard'

import useAuth from '../../hooks/useAuth'

import IComicDTO from '../../dtos/IComicDTO'

import { Container, Content, Grid } from '../../styles/pages/Charactes'

const Comics: React.FC = () => {
  const { user } = useAuth()
  const router = useRouter()
  const [search, setSearch] = useState<string | undefined>()
  const [comics, setComics] = useState<IComicDTO[]>([])

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const comicsName = event.currentTarget.value || undefined

      setSearch(comicsName)
    },
    []
  )

  const handleGetAllComics = useCallback(
    async (value?: string | undefined) => {
      const { data } = await marvel.get('comics', {
        params: value ? { titleStartsWith: value } : {}
      })

      setComics(data.data.results)
    },
    []
  )

  useEffect(() => {
    handleGetAllComics(search)
  }, [search, setSearch])

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
            label="Search comics: "
            value={search}
            onChange={handleSearch}
          />

          <Grid>
            {comics.map(comics => (
              <DisplayCard
                imageUrl={`${comics.thumbnail.path}/portrait_uncanny.${comics.thumbnail.extension}`}
                title={comics.title}
              />
            ))}
          </Grid>
        </Content>
      </Container>
    </>
  )
}

export default Comics
