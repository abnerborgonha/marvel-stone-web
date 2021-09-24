import React from 'react'

import { Container, FakeAvatar, Name } from './styles'

const ProfileIcon: React.FC = () => {
  return (
    <Container>
      <FakeAvatar src="/img/fake-profile.png" width={50} height={50} />
      <Name>Abnêr</Name>
    </Container>
  )
}

export default ProfileIcon
