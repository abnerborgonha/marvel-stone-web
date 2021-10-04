import BounceLoader from 'react-spinners/BounceLoader'
import theme from '../../styles/theme'
import { Container } from './styles'

const Loader: React.FC = () => {
  return (
    <Container>
      <BounceLoader color={theme.colors.primary} size={100} />
    </Container>
  )
}

export default Loader
