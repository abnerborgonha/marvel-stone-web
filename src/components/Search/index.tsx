import { InputHTMLAttributes } from 'react'

import { Container } from './styles'

const Search: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({...rest}) => {
  return (
    <Container>
      <section>
        <b>Search</b>
      </section>
      <input {...rest} placeholder="Search your favorite character or comic"/>
    </Container>
  )
}

export default Search
