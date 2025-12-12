import { useParams } from "react-router"

function Jiwon() {
    const { sid } = useParams();
    console.log("눈으로 확인", sid);


    return (
        <div>
            <h1>지원임당 {sid} 넘어 왔디용!</h1>
        </div>
    )
}

export default Jiwon