
function UserGreeting () {
  return (
    <h1>
      Bienvenue !
    </h1>
  )
}

function GuestGreeting () {
  return (
    <h1>
      Veuillez vous connecter
    </h1>
  )
}

function ConditionalRender ({ isLoggedIn }) {
  return (
    isLoggedIn
    ? <UserGreeting />
    : <GuestGreeting />
  )
}

export default ConditionalRender