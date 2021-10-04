import Image from 'next/image'
import { ValidationError } from 'yup'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useRef } from 'react'
import { FormHandles } from '@unform/core'

import useAuth from '../hooks/useAuth'
import useToastNotification from '../hooks/useToastNotification'

import Button from '../components/Button'
import Input from '../components/Input'

import SignInValidation from '../validations/SignInValidation'
import getYupValidationErrors from '../utils/getYupValidationsErros'

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
  const { showToastNotification } = useToastNotification()
  const { signIn } = useAuth()
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(
    async (data: { email: string; password: string }) => {
      try {
        await SignInValidation.validate(data, {
          abortEarly: false
        })

        await signIn(data)

        router.push('/app/characters')
      } catch (error) {
        if (error instanceof ValidationError) {
          const errors = getYupValidationErrors(error)

          return formRef.current?.setErrors(errors)
        }
      }
    },
    [signIn]
  )

  useEffect(() => {
    showToastNotification({message: 'Olá', type: 'error'})
  }, [])

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
