import { InputHTMLAttributes } from 'react'

import { Container } from './styles'

interface ISearchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Search: React.FC<ISearchProps> = ({ label, ...rest }) => {
  return (
    <Container>
      <h2>{label}</h2>
      <input {...rest} />
    </Container>
  )
}

export default Search
