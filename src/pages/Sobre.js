import React, { useEffect } from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import HeaderLogado from '../layout/HeaderLogado'
import useAuth from '../hooks/useAuth'

function Sobre() {
  const { user } = useAuth() // Supondo que useAuth retorne os dados do usuário, ajuste conforme necessário

  useEffect(() => {
    // Recupera os dados do usuário do localStorage
    const storedUserData = localStorage.getItem('userData')

    if (storedUserData) {
      const userData = JSON.parse(storedUserData)
      // Faça algo com os dados do usuário recuperados, se necessário
      console.log('Dados do usuário recuperados:', userData)
    }
  }, []) // Executará apenas uma vez, quando o componente for montado

  return (
    <div style={{ height: '100vh' }}>
       {/* Renderiza um cabeçalho diferente com base no estado de login */}
      {user ? <HeaderLogado /> : <Header />}
      <h2 className='text-center mt-2'>Sobre</h2>
      {/* Renderize as informações do usuário, se necessário */}
      {user && (
        <div className='container'>
          <p>Nome: {user.nome}</p>
          <p>Email: {user.email}</p>
          {/* Adicione mais informações conforme necessário */}
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Sobre
