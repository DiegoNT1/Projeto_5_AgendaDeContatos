import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 16px;
`

export const Label = styled.label`
  display: flex;
  align-items: center;
`
export const Span = styled.span`
  font-size: 24px;
  line-height: 1;
`

export const Descricao = styled.textarea`
  font-size: 16px;
  color: rgb(63, 63, 63);
  margin-left: 10px;
  width: 95%;
  height: 20px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 10px 16px;
  border: nome;
  cursor: pointer;
  background-color: ${variaveis.corBotao};
  border-radius: 12px;
  margin-right: 8px;
  border: none;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoRemoverCancelar = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
