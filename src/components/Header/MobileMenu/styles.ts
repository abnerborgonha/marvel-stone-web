import styled from 'styled-components'

import { Menu, Close } from '../../../styles/icons'

interface IMobileMenuProps {
  open: boolean
}

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem;
  width: 100vw;

  @media (min-width: 1200px) {
    display: none;
  }
`

export const MenuIcon = styled(Menu).attrs({
  size: 50
})``

export const CloseIcon = styled(Close).attrs({
  size: 45
})``

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  z-index: 2;
`

export const MenuContent = styled.div<IMobileMenuProps>`
  width: 100%;

  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-150%)')};
`

export const Options = styled.div`
  width: 100%;

  ul {
    display: flex;
    flex-direction: column;

    text-align: center;
    list-style-type: none;
  }

  li {
    color: ${({ theme }) => theme.colors.black};
    margin: 20px 0;

    font-size: 1.5rem;

    cursor: pointer;

    :hover {
      font-weight: bold;
    }
  }
`
