

function Test({name, age, alias ,fuct}) {
  return (
    <>
        <div onClick={fuct}>{name}</div>
        <div>{age}</div>
        <div>{alias}</div>
    </>
  )
}
export default Test
