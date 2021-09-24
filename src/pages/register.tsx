import { useCallback, useRef } from 'react'
import Image from 'next/image'
import { FormHandles } from '@unform/core'
import { useRouter } from 'next/router'

import Button from '../components/Button'
import Input from '../components/Input'

import {
  Container,
  LeftSide,
  RightSide,
  Content,
  Form,
  ButtonContainer,
  Text
} from '../styles/pages/Register'

const Login: React.FC = () => {
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(() => {}, [])

  return (
    <Container>
      <LeftSide />
      <RightSide>
        <Content>
          <Image src="/img/marvel-logo.png" width={200} height={100} />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="name" label="Name" placeholder="Enter your name" />

            <Input
              name="email"
              label="Email address"
              placeholder="Enter your email"
            />
            <Input
              name="password"
              label="Set Password"
              placeholder="Enter password"
            />
            <ButtonContainer>
              <Button label="Sign Up" />

              <Text>or</Text>

              <Button
                label="Sign In"
                secondary
                onClick={() => router.push('/')}
              />
            </ButtonContainer>
          </Form>
        </Content>
      </RightSide>
    </Container>
  )
}

export default Login
