import styled from 'styled-components'

export interface IImageProps {
  imageUrl?: string
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  align-items: center;

  & > button {
    position: absolute;
    bottom: 20px;
  }
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.b`
  margin-top: 10px;

  font-weight: bold;
  font-size: 1.5rem;

  text-align: center;
`

export const Image = styled.div<IImageProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 10px;

  width: 200px;
  height: 200px;
  border-radius: 30px;

  background: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-size: cover;

  transition: all 0.4s;
`

export const Description = styled.p`
  margin: 20px 0;

  width: 90%;
  font-size: 1.1rem;
  text-align: justify;
`
