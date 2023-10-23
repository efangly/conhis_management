/* eslint-disable */
import { Card } from "react-bootstrap"
import { FaUserInjured } from "react-icons/fa"

const CardPrescription = (props)=>{
  let f_hn = ""
  let hn = 0
  if(props.data.length !== 0){
    for(let i = 0;i < props.data.length;i++){
      if(props.data[i].f_hn !== f_hn){
        f_hn = props.data[i].f_hn
        hn = hn + 1
      }
    }
  }
  return(
    <Card className="bg-headercard text-white">
      <Card.Header className="bg-secondary">
        <span><FaUserInjured size={20} /> จำนวนผู้ป่วย</span>
      </Card.Header>
      <Card.Body align="center">
        <h4>{`${hn} คน`}</h4>
      </Card.Body>
    </Card>
  )
}

export default CardPrescription