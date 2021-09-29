import { FiPlusSquare } from 'react-icons/fi'
import styled from 'styled-components'

import { Heart } from '../../styles/icons'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  width: 4rem;
  height: 4rem;
  padding: 1rem;
`
export const PlusIcon = styled(Heart).attrs({
  size: 30
})`
  color: ${({ theme }) => theme.colors.primary};
`