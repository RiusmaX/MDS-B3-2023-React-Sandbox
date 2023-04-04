import { useCounter } from '../../contexts/CounterContext'

function CounterView () {
  const { state } = useCounter()
  return (
    <>
      <h1>COUNTER VIEW</h1>
      <h2>Valeur compteur = {state.counter}</h2>
    </>
  )
}

export default CounterView
