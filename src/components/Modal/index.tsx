import React from 'react'

import IModalDataDTO from '../../dtos/IModalDataDTO'
import { Close } from '../../styles/icons'

import ComicModalContent from '../ComicModalContent'
import CharacterContent from '../CharacterContent'

import { Background, Container, Content } from './styles'

interface IModalProps extends IModalDataDTO {
  close(): void
}

const Modal: React.FC<IModalProps> = ({ type, data, close }) => {
  return (
    <Background>
      <Container>
        <Close onClick={close} />

        <Content>
          {type === 'comic' ? (
            <ComicModalContent data={data} />
          ) : (
            <CharacterContent data={data} />
          )}
        </Content>
      </Container>
    </Background>
  )
}

export default Modal
