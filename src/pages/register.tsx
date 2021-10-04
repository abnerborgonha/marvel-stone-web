import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useRef, useState } from 'react'
import { FormHandles } from '@unform/core'

import Input from '../components/Input'
import Button from '../components/Button'
import Loader from '../components/Loader'

import useAuth from '../hooks/useAuth'

import SignUpValidation from '../validations/SignUpValidation'

import {
  Container,
  LeftSide,
  Content,
  Form,
  Text,
  RightSide,
  ButtonContainer
} from '../styles/pages/Register'
import { ValidationError } from 'yup'
import getYupValidationErrors from '../utils/getYupValidationsErros'
import useToastNotification from '../hooks/useToastNotification'

const Login: React.FC = () => {
  const { signUp } = useAuth()
  const router = useRouter()
  const formRef = useRef<FormHandles>(null)
  const [isLoading, setLoading] = useState(false)
  const { showToastNotification } = useToastNotification()

  const handleSubmit = useCallback(
    async (data: { name: string; email: string; password: string }) => {
      try {
        await SignUpValidation.validate(data, {
          abortEarly: false
        })

        setLoading(true)
        await signUp(data)

        setLoading(false)
        showToastNotification({
          message: 'User created successfully!',
          type: 'success'
        })
        router.push('/')
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
            type: 'error'
          })

          formRef.current?.clearField('email')
          formRef.current?.clearField('password')
        }
      }
    },
    [signUp]
  )

  return (
    <Container>
      <LeftSide />
      <RightSide>
        <Content>
          <Image src="/img/marvel-logo.png" width={200} height={100} />
          {isLoading && <Loader />}
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
              type="password"
              placeholder="Enter password"
            />
            <ButtonContainer>
              <Button label="Sign Up" type="submit" />

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
