import { configureStore } from '@reduxjs/toolkit'

import contatosRuducer from './reducers/Contato'

const store = configureStore({
  reducer: {
    contatos: contatosRuducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
