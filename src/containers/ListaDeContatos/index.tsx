import { useSelector } from 'react-redux'
import Contato from '../../components/Contato'
import * as S from './style'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.Container>
      <S.H1>Lista De Contatos</S.H1>
      <ul>
        {itens.map((t) => (
          <li key={t.titulo}>
            <Contato
              titulo={t.titulo}
              email={t.email}
              telefone={t.telefone}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeContatos
