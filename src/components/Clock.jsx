import { useState, useEffect } from "react"

function Clock (props) {
  // On déclare un état local
  const [date, setDate] = useState(new Date())

  // On créé une fonction tick() permettant de mettre à jour notre état local
  const tick = () => {
    setDate(new Date())
  }

  // On utilise la fonctionnalité (hook) de React permettant de contrôler 
  // le cycle de vie de mon composant
  useEffect(() => {
    // On déclare un interval pour mettre à jour la date toute les secondes
    const interval = setInterval(tick, props.interval)
    // On nettoie l'interval lors du démontage du composant
    return () => {
      clearInterval(interval)
    }
  }, [])

  // On affiche la variable d'état
  return (
    <h2>{date.toLocaleTimeString()}</h2>
  )
}

export default Clock
