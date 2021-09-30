import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useRef } from 'react'
import { FormHandles } from '@unform/core'

import useAuth from '../hooks/useAuth'

import Button from '../components/Button'
import Input from '../components/Input'

import {
  Text,
  Form,
  Content,
  LeftSide,
  Container,
  RightSide,
  ButtonContainer
} from '../styles/pages/Login'

const Login: React.FC = () => {
  const { signIn } = useAuth()
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(
    async (data: { email: string; password: string }) => {
      try {
        await signIn(data)
       
        router.push('app/characters')
      } catch (error) {
       
      }
    },
    [signIn]
  )

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
              type="email"
              placeholder="Enter your email"
            />
            <Input
              name="password"
              label="Set Password"
              type="password"
              placeholder="Enter password"
            />
            <ButtonContainer>
              <Button
                label="Sign In"
                type="submit"
                onClick={() => formRef.current?.submitForm()}
              />

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
