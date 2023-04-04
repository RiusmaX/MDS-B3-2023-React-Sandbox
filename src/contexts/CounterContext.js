import React from 'react'

const CounterContext = React.createContext()

const initialState = {
  counter: 0
}

const CounterActions = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

const CounterReducer = (state, action) => {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return {
        counter: state.counter + 1
      }
    case CounterActions.DECREMENT:
      return {
        counter: state.counter - 1
      }
    default:
      throw new Error('Action non gérée : ' + action.type)
  }
}

const CounterProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CounterReducer, initialState)
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

const useCounter = () => {
  const context = React.useContext(CounterContext)
  if (!context) throw new Error('useCounter doit être utilisé dans un CounterProvider')
  return context
}

export {
  CounterActions,
  CounterProvider,
  useCounter
}
