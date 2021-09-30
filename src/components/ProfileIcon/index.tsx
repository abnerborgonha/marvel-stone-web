import Link from 'next/link'

import { Container, FakeAvatar, Name } from './styles'

const ProfileIcon: React.FC = () => {
  return (
    <Container>
      <FakeAvatar src="/img/fake-profile.png" width={50} height={50} />
      <Link  href='/profile' ><Name>Abnêr</Name></Link>
    </Container>
  )
}

export default ProfileIcon
