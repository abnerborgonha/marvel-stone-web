import Image from 'next/image'
import { ValidationError } from 'yup'
import { useRouter } from 'next/router'
import { useCallback, useRef, useState } from 'react'
import { FormHandles } from '@unform/core'

import useAuth from '../hooks/useAuth'
import useToastNotification from '../hooks/useToastNotification'

import Input from '../components/Input'
import Button from '../components/Button'
import Loader from '../components/Loader'

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
  const { signIn } = useAuth()
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)
  const { showToastNotification } = useToastNotification()

  const [isLoading, setLoading] = useState(false)

  const handleSubmit = useCallback(
    async (data: { email: string; password: string }) => {
      event?.preventDefault()

      try {
        await SignInValidation.validate(data, {
          abortEarly: false
        })

        setLoading(true)

        await signIn(data)

        setLoading(false)
        router.push('/app/characters')
      } catch (err) {
        setLoading(false)
        const error: ValidationError | any = err

        if (error instanceof ValidationError) {
          const errors = getYupValidationErrors(error)

          return formRef.current?.setErrors(errors)
        }

        if (error.response) {
          showToastNotification({
            message: error.response.data.message,
            type: error.response.data.status
          })
        }
      }
    },
    [signIn, formRef, showToastNotification]
  )

  return (
    <Container>
      <LeftSide />
      <RightSide>
        <Content>
          <Image src="/img/marvel-logo.png" width={200} height={100} />

          {isLoading && <Loader />}

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
