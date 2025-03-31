import { useState, useEffect } from 'react'
import * as S from './style'
import { editar, remover } from '../../store/reducers/Contato'
import { useDispatch } from 'react-redux'
import ContatoClass from '../../models/Contatos'

type Props = ContatoClass

const Contato = ({
  titulo,
  email: emailOriginal,
  telefone: telefoneOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal?.length) {
      setEmail(emailOriginal)
    }
    if (telefoneOriginal?.length) {
      setTelefone(telefoneOriginal)
    }
  }, [emailOriginal, telefoneOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setEmail(emailOriginal)
    setTelefone(telefoneOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>

      <S.Label>
        <S.Span>&#9993;</S.Span>
        <S.Descricao
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
      </S.Label>

      <S.Label>
        <S.Span>&#9742;</S.Span>
        <S.Descricao
          disabled={!estaEditando}
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
        />
      </S.Label>

      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    email,
                    id,
                    telefone,
                    titulo
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </S.BotaoSalvar>
            <S.BotaoRemoverCancelar onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoRemoverCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoRemoverCancelar onClick={() => dispatch(remover(id))}>
              Romover
            </S.BotaoRemoverCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
