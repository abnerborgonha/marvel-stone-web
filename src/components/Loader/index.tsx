import PuffLoader from 'react-spinners/RingLoader'
import theme from '../../styles/theme'
import { Container } from './styles'

const Loader: React.FC = () => {
  return (
    <Container>
      <PuffLoader color={theme.colors.primary} size={160} />
    </Container>
  )
}

export default Loader
