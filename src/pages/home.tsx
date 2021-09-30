import Header from '../components/Header'
import DisplayCard from '../components/DisplayCard'
import Search from '../components/Search'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        {/* <Search /> */}
        {/* <DisplayCard
          imageUrl="/img/iron-man.jpg"
          title="Iron Man"
          subtitle="Tony Stark"
        />
        <DisplayCard
          imageUrl="/img/spider-man.jpg"
          title="Spider Man"
          subtitle="Piter Parker"
        />
        <DisplayCard
          imageUrl="/img/hulk.jpg"
          title="Hulk"
          subtitle="Bruce Banner"
        /> */}
      </Container>
    </>
  )
}

export default Home
