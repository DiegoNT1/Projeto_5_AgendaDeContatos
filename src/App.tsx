import { Provider } from 'react-redux'
import ListaDeContatos from './containers/ListaDeContatos'
import Registro from './containers/Registro'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Registro />
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
