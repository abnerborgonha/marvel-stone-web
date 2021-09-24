import styled, { css } from 'styled-components'

import { FiMenu } from 'react-icons/fi'

const defaultIconStyle = css`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
`

export const Menu = styled(FiMenu)`
  ${defaultIconStyle};
  cursor: pointer;
`
