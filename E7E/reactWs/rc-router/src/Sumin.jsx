import { Link } from "react-router"

function Sumin({ name }) {
    return (
        <div><h1>나 {name}이라고</h1>
            <Link to={"/"}>홈</Link>
        </div>
    )
}

export default Sumin