import Image from 'next/image'

import ProfileIcon from '../../ProfileIcon'

import { Container, Options } from './styles'

const DesktopMenu : React.FC = () => {
  return (
      <Container>
        <Image src="/img/marvel-logo.png" width={100} height={50} />
        <Options>
          <ul>
            <li>Characters</li>
            <li>Comics</li>
            <li>Favorites</li>
          </ul>
        </Options>
        <ProfileIcon />
      </Container>
  )
}

export default DesktopMenu 
