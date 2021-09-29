import Image from 'next/image'
import { useState } from 'react'

import {
  Content,
  Options,
  MenuIcon,
  CloseIcon,
  Container,
  MenuContent
} from './styles'

const MobileMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <Container>
        <Content>
          <Image src="/img/marvel-logo.png" width={100} height={50} />
          {openMenu ? (
            <CloseIcon onClick={() => setOpenMenu(!openMenu)} />
          ) : (
            <MenuIcon onClick={() => setOpenMenu(!openMenu)} />
          )}
        </Content>
        <MenuContent open={openMenu}>
          <Options>
            <ul>
              <li>My Account</li>
              <li>Characters</li>
              <li>Comics</li>
              <li>Favorites</li>
            </ul>
          </Options>
        </MenuContent>
      </Container>
    </>
  )
}

export default MobileMenu
