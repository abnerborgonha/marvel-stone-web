import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

import { marvel } from '../../services/marvel'

import Header from '../../components/Header'
import Search from '../../components/Search'
import DisplayCard from '../../components/DisplayCard'

import useAuth from '../../hooks/useAuth'
import useDebounce from '../../hooks/useDebounce'

import IComicDTO from '../../dtos/IComicDTO'

import { Container, Content, Grid } from '../../styles/pages/App'
import api from '../../services/api'

const Comics: React.FC = () => {
  const { user } = useAuth()
  const router = useRouter()
  const [search, setSearch] = useState<string | undefined>()
  const debouncedSearch = useDebounce<string | undefined>(search, 500)
  const [comics, setComics] = useState<IComicDTO[]>([])
  const [favoriteComics, setFavoriteComics] = useState<
    { marvel_comic_id: string }[]
  >([])

  const handleSearch = useCallback(
    (event: React.FormEvent<HTMLInputElement>) => {
      const comicsName = event.currentTarget.value || undefined

      setSearch(comicsName)
    },
    [debouncedSearch]
  )

  const handleGetAllComics = useCallback(async (value?: string | undefined) => {
    const { data } = await marvel.get('comics', {
      params: value ? { titleStartsWith: value } : {}
    })

    setComics(data.data.results)
  }, [search])

  const handleGetAllFavoriteComics = useCallback(async () => {
    const { data } = await api.get('favorite-comics')

    setFavoriteComics(data)
  }, [])

  useEffect(() => {
    handleGetAllComics(search)
  }, [debouncedSearch])

  useEffect(() => {
    handleGetAllFavoriteComics()
  }, [])

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

          {!!comics.length && (
            <Grid>
              {comics.map(comic => (
                <DisplayCard
                  key={comic.id}
                  imageUrl={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
                  type="comic"
                  data={comic}
                  isFavorite={favoriteComics.some(
                    favoriteComic =>
                      favoriteComic.marvel_comic_id === String(comic.id)
                  )}
                />
              ))}
            </Grid>
          )}
        </Content>
      </Container>
    </>
  )
}

export default Comics
