import { CounterProvider } from '../../contexts/CounterContext'
import CounterActions from './CounterActions'
import CounterView from './CounterView'

function Counter () {
  return (
    <>
      <h1>COUNTER</h1>
      <CounterProvider>
        <CounterView />
        <CounterActions />      
      </CounterProvider>
    </>
  )
}

export default Counter
