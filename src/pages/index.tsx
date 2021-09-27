import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'

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
} from '../styles/pages/Login'

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
              <Button label="Sign In" onClick={() => router.push('/home')} />

              <Text>or</Text>

              <Button
                label="Sign Up"
                secondary
                onClick={() => router.push('/register')}
              />
            </ButtonContainer>
          </Form>
        </Content>
      </RightSide>
    </Container>
  )
}

export default Login
