import {idols} from "./dummyData";
import Idol from "./idol";

function IdolList() {

const newArr = idols.map((idol) => {
    return <Idol name={idol.name + "만세"} song={idol.song}/>
})

  return (
    <div>
        {
            newArr
        }
    </div>
  )
}

export default IdolList