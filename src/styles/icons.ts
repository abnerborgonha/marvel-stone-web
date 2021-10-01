import styled, { css } from 'styled-components'

import { FiMenu, FiSearch } from 'react-icons/fi'
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io'
import { GrClose } from 'react-icons/gr'

const defaultIconStyle = css`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
`

export const Menu = styled(FiMenu)`
  ${defaultIconStyle};
  cursor: pointer;
`

export const Close = styled(GrClose)`
  ${defaultIconStyle};
  cursor: pointer;
`
export const Heart = styled(IoMdHeart)`
  ${defaultIconStyle};
  cursor: pointer;
`

export const HeartEmpty = styled(IoMdHeartEmpty)`
  ${defaultIconStyle};
  cursor: pointer;
`
export const Search = styled(FiSearch)`
  ${defaultIconStyle};
  cursor: pointer;
`
