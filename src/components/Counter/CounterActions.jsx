import { useCounter, CounterActions as ActionTypes } from '../../contexts/CounterContext'

function CounterActions () {
  const { dispatch } = useCounter()

  const handlePlus = () => {
    dispatch({
      type: ActionTypes.INCREMENT
    })
  }

  const handleMinus = () => {
    dispatch({
      type: ActionTypes.DECREMENT
    })
  }

  return (
    <>
      <h1>COUNTER ACTIONS</h1>
      <button onClick={handleMinus}>-</button>
      <button onClick={handlePlus}>+</button>
    </>
  )
}

export default CounterActions
