import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Registro() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleRegistro = () => {
    // Lógica de registro aqui (por exemplo, criando um novo usuário)
    console.log(
      'Registrando com nome:',
      nome,
      'email:',
      email,
      'e senha:',
      senha
    )
    // Você pode adicionar aqui a lógica para criar um novo usuário e redirecionar após o registro.
  }

  return (
    <div className='container mt-3 animate__animated animate__fadeIn'>
      <h2 className='text-center'>Registro</h2>
      <form className='bg-light p-4 mx-auto my-3'>
        <div className='mb-3'>
          <label htmlFor='nome' className='form-label'>
            Nome:
          </label>
          <input
            type='text'
            className='form-control'
            id='nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            E-mail:
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='senha' className='form-label'>
            Senha:
          </label>
          <input
            type='password'
            className='form-control'
            id='senha'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button
          type='button'
          className='btn btn-primary'
          onClick={handleRegistro}
        >
          Registrar
        </button>
        <p className='mt-3 text-center'>
          Já tem uma conta? <Link to='/login'>Faça login aqui</Link>.
        </p>
      </form>
    </div>
  )
}

export default Registro
