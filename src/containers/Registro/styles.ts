import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Registrar = styled.aside`
  border-radius: 16px;
  padding: 30px;
  background: linear-gradient(
    to bottom,
    ${variaveis.corPrimaria},
    ${variaveis.corSecundaria}
  );
  height: 100vh;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  margin-top: 16px;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: none;
`

export const Button = styled.button`
  margin-top: 10px;
  font-weight: bold;
  padding: 12px;
  background-color: ${variaveis.corBotao};
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 16px;
`
