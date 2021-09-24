import { useCallback, useRef } from 'react';
import Image from 'next/image'
import { FormHandles } from '@unform/core';

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
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {

  }, [])

  return (
    <Container>
      <LeftSide />
      <RightSide>
        <Content>

          <Image src="/img/marvel-logo.png"  width={200} height={100}/>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name="email" label="Email address" placeholder="Enter your email" />
            <Input name="password" label="Set Password"  placeholder="Enter password"/>
            <ButtonContainer>
            <Button label="Sign In" />

            <Text>or</Text>

            <Button label="Sign Up" secondary/>
            </ButtonContainer>
          
          </Form>
        </Content>
      </RightSide>
    </Container>
  )
}

export default Login
