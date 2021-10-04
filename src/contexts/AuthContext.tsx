import { createContext, useCallback, useState } from 'react'
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

interface SignUpData {
  name: string
  email: string
  password: string
}

export interface IAuthContextData {
  user: User
  signIn(credentials: SignInCredentials): Promise<void>
  signUp(data: SignUpData): Promise<void>
  signOut(): void
  refreshDataUser(user: User): void
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

  const signUp = useCallback(async ({ name, email, password }) => {
    await api.post('users', {
      name,
      email,
      password
    })
  }, [])

  const signOut = useCallback(async () => {
    destroyCookie(undefined, '@marvelstone:token')
    destroyCookie(undefined, '@marvelstone:user')

    setData({} as AuthState)
  }, [])

  const refreshDataUser = useCallback(async (user: User) => {
    const { token } = data

    setData({ token, user })
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signUp, signOut, refreshDataUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
