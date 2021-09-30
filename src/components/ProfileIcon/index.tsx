import Link from 'next/link'

import { Container, FakeAvatar, Name } from './styles'

interface IProfileIconProps {
  name: string
}

const ProfileIcon: React.FC<IProfileIconProps> = ({name}) => {
  return (
    <Container>
      <FakeAvatar src="/img/fake-profile.png" width={50} height={50} />
      <Link  href='/profile' ><Name>{name}</Name></Link>
    </Container>
  )
}

export default ProfileIcon
