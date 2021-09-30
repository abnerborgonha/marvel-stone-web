import Image from 'next/image'
import Link from 'next/link'
import useAuth from '../../../hooks/useAuth'
import reduceUserName from '../../../utils/reduceUserName'

import ProfileIcon from '../../ProfileIcon'

import { Container, Options } from './styles'

const DesktopMenu: React.FC = () => {
  const { user } = useAuth()

  return (
    <Container>
      <Image src="/img/marvel-logo.png" width={100} height={50} />
      <Options>
        <ul>
          <Link href="/app/characters">
            <li>Characters</li>
          </Link>
          <Link href="/app/comics">
            <li>Comics</li>
          </Link>
          <li>Favorites</li>
        </ul>
      </Options>
      <ProfileIcon name={reduceUserName(user.name)} />
    </Container>
  )
}

export default DesktopMenu
