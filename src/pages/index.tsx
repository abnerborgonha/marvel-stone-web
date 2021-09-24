import type { NextPage } from 'next'
import Input from '../components/Input'


const Home: NextPage = () => {
return <Input name="email" label="Email" placeholder="Set your email" />
}

export default Home
