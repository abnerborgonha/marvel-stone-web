import Image from 'next/image'
import { ValidationError } from 'yup'
import { useRouter } from 'next/router'
import { FormHandles } from '@unform/core'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  Container,
  Content,
  Title,
  Form,
  Line,
  Text,
  ButtonContainer
} from '../styles/pages/Profile'

import useAuth from '../hooks/useAuth'
import Input from '../components/Input'
import Button from '../components/Button'
import Loader from '../components/Loader'

import api from '../services/api'
import ChangeProfileValidation from '../validations/ChangeProfileValidation'
import getYupValidationErrors from '../utils/getYupValidationsErros'
import useToastNotification from '../hooks/useToastNotification'

const Profile: React.FC = () => {
  const router = useRouter()
  const { signOut, user, refreshDataUser } = useAuth()
  const formRef = useRef<FormHandles>(null)
  const { showToastNotification } = useToastNotification()

  const [isLoading, setLoading] = useState(false)

  const handleSetUserData = useCallback(() => {
    const { name, email } = user

    formRef.current?.setFieldValue('name', name)
    formRef.current?.setFieldValue('email', email)
  }, [])

  const handleUpdateUser = useCallback(async () => {
    event?.preventDefault()

    try {
      const fields = formRef.current?.getData()

      if (!(fields?.password || fields?.old_password)) {
        delete fields?.password
        delete fields?.old_password
      }

      await ChangeProfileValidation.validate(fields, {
        abortEarly: false
      })

      setLoading(true)
      const { data } = await api.patch(`users/${user.id}`, fields)

      refreshDataUser(data)

      setLoading(false)
      showToastNotification({
        message: 'User updated successfully!',
        type: 'success'
      })
      router.replace('/app/characters')
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
  }, [formRef, showToastNotification])

  const handleSignOut = useCallback(() => {
    signOut()

    router.push('/')
  }, [])

  useEffect(() => {
    handleSetUserData()
  }, [])

  return (
    <Container>
      <Content>
        <Image src="/img/fake-profile.png" width={100} height={100} />

        <Title>My Account</Title>

        {isLoading && <Loader />}

        <Form ref={formRef} onSubmit={handleUpdateUser}>
          <Input name="name" label="Name" placeholder="Enter your name" />

          <Input
            name="email"
            label="Email address"
            placeholder="Enter your email"
          />

          <Line />

          <Input
            name="old_password"
            label="Old Password"
            type="password"
            placeholder="Enter your old password"
          />
          <Input
            name="password"
            label="New Password"
            type="password"
            placeholder="Enter your new password"
          />
          <ButtonContainer>
            <Button label="Update" type="submit" />

            <Text>Or</Text>

            <Button
              label="Come back"
              secondary
              onClick={() => router.replace('/app/characters')}
            />
            <Button label="SignOut" onClick={handleSignOut} />
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  )
}

export default Profile
