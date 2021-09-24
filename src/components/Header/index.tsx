import Image from 'next/image'

import { Container, Options, MenuIcon } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Image src="/img/marvel-logo.png" width={100} height={50} />
      <Options>
        <ul>
          <li>Characters</li>
          <li>Comics</li>
        </ul>
      </Options>
      <MenuIcon size={35} />
    </Container>
  )
}

export default Header
