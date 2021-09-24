import { Container } from './styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  secondary?: boolean
}

const Button: React.FC<ButtonProps> = ({ label, secondary, ...rest }: ButtonProps) => {
  return <Container secondary={secondary} {...rest}>{label}</Container>
}

export default Button
