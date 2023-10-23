/* eslint-disable */
import { Card } from "react-bootstrap"
import { FaHdd } from "react-icons/fa"

const CardLgs = (props)=>{
  let order = 0
  if(props.data.length !== 0){
    for(let i = 0;i < props.data.length;i++){
      if(props.data[i].f_tomachineno == 4){
        order = order + 1
      }
    }
  }
  return(
    <Card className="bg-headercard text-white">
      <Card.Header className="bg-secondary">
        <span><FaHdd size={20} /> ยาเครื่องLGS</span>
      </Card.Header>
      <Card.Body align="center">
        <h4>{`${order} รายการ`}</h4>
      </Card.Body>
    </Card> 
  )
}

export default CardLgs