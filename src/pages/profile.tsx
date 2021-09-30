import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormHandles } from '@unform/core'
import { useCallback, useRef } from 'react'
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

const Profile: React.FC = () => {
  const router = useRouter()
  const { signOut } = useAuth()
  const formRef = useRef<FormHandles>(null)

  const handleSubmit = useCallback(() => {}, [])

  const handleSignOut = useCallback(() => {
    signOut()

    router.push('/')
  }, [])

  return (
    <Container>
      <Content>
        <Image src="/img/fake-profile.png" width={100} height={100} />

        <Title>My Account</Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" label="Name" placeholder="Enter your name" />

          <Input
            name="email"
            label="Email address"
            placeholder="Enter your email"
          />

          <Line />

          <Input
           name="oldPassword"
           label="Old Password"
           placeholder="Enter your old password"
         />
          <Input
            name="password"
            label="New Password"
            placeholder="Enter your new password"
          />
          <ButtonContainer>
            <Button label="Update" />

            <Text>Or</Text>

            <Button label="Come to back" secondary onClick={() => router.back()}/>
            <Button label="SignOut" onClick={handleSignOut} />
          </ButtonContainer>
        </Form>
      </Content>
    </Container>
  )
}

export default Profile
