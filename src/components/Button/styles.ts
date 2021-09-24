import styled from "styled-components";

interface IButtonProps {
  secondary?: boolean
}

export const Container = styled.button<IButtonProps>`
  width: 30%;
  padding: 10px 46px;
  border: none;
  border-radius: 10px;
  border: 2px solid ${({ theme, secondary }) => secondary && theme.colors.primary };
  background: ${({ theme, secondary }) => secondary? 'transparent' : theme.colors.primary };
  color: ${({ theme, secondary }) => secondary? theme.colors.primary : theme.colors.white };
  font-size: 1.25rem;
  font-weight: bold;

  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`;