import styled from 'styled-components'

import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  cursor: pointer;
  border-bottom: 2px solid transparent;
`

export const FakeAvatar = styled(Image)`
  width: 50px;
  border-radius: 50%;
`

export const Name = styled.p`
  margin-left: 15px;
  font-size: 1.2rem;
  font-weight: bold;

  :hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`
