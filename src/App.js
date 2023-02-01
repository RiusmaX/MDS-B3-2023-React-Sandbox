import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Clock from './components/Clock';
import ConditionalRender from './components/ConditionalRender';
import List from './components/List';

const data = [
  'toto',
  'tatas',
  'foo',
  'bar',
  'MyDigitalSchool',
  'super'
]

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="App">
      <Clock interval={1000} />
      <Clock interval={2000} />
      <Clock interval={3000} />
      <Button
        text={isLoggedIn ? 'Déconnexion' : 'Connexion'}
        onClick={() => setIsLoggedIn(!isLoggedIn)} 
      />
      <ConditionalRender isLoggedIn={isLoggedIn} />
      <List data={data} />
    </div>
  );
}

export default App;
