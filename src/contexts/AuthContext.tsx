import { createContext, useCallback, useContext, useState } from 'react'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import api from '../services/api'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCredentials {
  email: string
  password: string
}

export interface IAuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signOut(): void
}

export const AuthContext = createContext<IAuthContextData>(
  {} as IAuthContextData
)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const { '@marvelstone:token': token } = parseCookies()
    const { '@marvelstone:user': user } = parseCookies()

    if (token && user) {
      console.log({ token, user })
      api.defaults.headers.common.Authorization = `Bearer ${token}`

      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('session', {
      email,
      password
    })

    const { token, user } = response.data

    setCookie(undefined, '@marvelstone:token', token)
    setCookie(
      undefined,
      '@marvelstone:user',
      JSON.stringify({ id: user.id, name: user.name, email: user.email })
    )

    api.defaults.headers.common.Authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signOut = useCallback(async () => {
    destroyCookie(undefined, '@marvelstone:token')
    destroyCookie(undefined, '@marvelstone:user')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
