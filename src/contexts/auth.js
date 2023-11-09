import axios from 'axios'
import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState()

  const urlLogin = 'http://localhost:3001/api/user/login'

  const signin = async (credentials) => {
    const response = await axios.post(urlLogin, credentials)
    //console.log(response.data.dataUser.email)
    if (response.data.email !== '') {
      const token = response.data.token
      const email = response.data.dataUser.email
      localStorage.setItem('user_token', JSON.stringify({ email, token }))
      setUser(response.data.dataUser)
      return
    } else {
      return { error: 'Usuário ou senha incorretos' }
    }
  }

  const signup = (email, password) => {
    const usersStorage = JSON.parse(localStorage.getItem('users_bd'))

    const hasUser = usersStorage?.filter((user) => user.email === email)

    if (hasUser?.length) {
      return 'Já tem uma conta com esse E-mail'
    }

    let newUser

    if (usersStorage) {
      newUser = [...usersStorage, { email, password }]
    } else {
      newUser = [{ email, password }]
    }

    localStorage.setItem('users_bd', JSON.stringify(newUser))

    return
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem('user_token')
  }

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signup, signout }}
    >
      {children}
    </AuthContext.Provider>
  )
}
