import { FormEvent, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/Contato'

const Registro = () => {
  const dispactch = useDispatch()
  const [titulo, setTitulo] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispactch(
      cadastrar({
        titulo,
        email,
        telefone
      })
    )

    setTitulo('')
    setEmail('')
    setTelefone('')
  }

  return (
    <S.Registrar>
      <h2>Registrar Novo Contato</h2>
      <form onSubmit={cadastrarContato}>
        <S.Label htmlFor="nome">Nome:</S.Label>
        <S.Input
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          id="nome"
          name="nome"
          required
        />

        <S.Label htmlFor="e-mail">E-mail:</S.Label>
        <S.Input
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="email"
          id="email"
          name="email"
          required
        />

        <S.Label htmlFor="telefone">Telefone:</S.Label>
        <S.Input
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="tel"
          id="telefone"
          name="telefone"
          required
        />

        <S.Button type="submit">Salvar Contato</S.Button>
      </form>
    </S.Registrar>
  )
}
export default Registro
