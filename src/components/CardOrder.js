/* eslint-disable */
import { Card } from "react-bootstrap"
import { FaFilePrescription } from "react-icons/fa"

const CardOrder = (props)=>{

  return(
    <Card className="bg-headercard text-white">
      <Card.Header className="bg-secondary">
        <span><FaFilePrescription size={20} /> รายการทั้งหมด</span>
      </Card.Header>
      <Card.Body align="center">
        <h4>{`${props.data.length} รายการ`}</h4>
      </Card.Body>
    </Card>
  )
}

export default CardOrder