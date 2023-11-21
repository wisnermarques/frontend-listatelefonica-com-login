import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Login from '../pages/Login'
import Contato from '../pages/Contato'
import Editar from '../pages/Editar'
import Registro from '../pages/Registro'

const Private = ({ Item }) => {
  const { signed } = useAuth()

  return signed > 0 ? <Item /> : <Login />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route exact path='/home' element={<Private Item={Home} />} />
          <Route exact path='/contato' element={<Private Item={Contato} />} />
          <Route exact path='/:id' element={<Private Item={Editar} />} />
          <Route path='/registro' element={<Registro />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='*' element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp
