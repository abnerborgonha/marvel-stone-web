import styled from 'styled-components'

export interface IDisplayCardProps {
  imageUrl?: string
}

export const Container = styled.div<IDisplayCardProps>`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 1rem;
  margin: 0 10px;

  width: 30rem;
  height: 30rem;
  border-radius: 2.8rem;

  filter: grayscale(0.7);
  background: url(${({ imageUrl }) => imageUrl});
  background-repeat: no-repeat;
  background-size: cover;

  transition: 0.3s;
  cursor: pointer;

  :hover {
    width: 30.5rem;
    height: 30.5rem;
    filter: grayscale(0);

    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  }
`

export const Title = styled.h2`
  font-size: 3.4rem;
  font-weight: bold;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
`

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: lighter;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors.white};
`

export const Footer = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem 2rem;
  border-radius: 0 0 2.8rem 2.8rem;

  width: 100%;
`


export const Explore = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underline;

  color: ${({ theme }) => theme.colors.white};
`
