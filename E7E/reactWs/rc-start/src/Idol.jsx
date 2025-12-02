
function Idol(Props) {
  return (
    <div style={jsStyle}>
        <h3>이름 : {Props.name}</h3>
        <h3>노래 : {Props.song}</h3>
    </div>
  )
}

const jsStyle = {
    border: "3px solid blue",
    color: "white",
    backgroundColor: "black"
}
export default Idol