function List ({ data }) {
  return (
    <>
      <h1>Liste</h1>
      <ul>
        {
          data.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </>
  )
}

export default List