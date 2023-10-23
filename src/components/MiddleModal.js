/* eslint-disable */
import axios from "axios"
import Swal from "sweetalert2"
import { useState } from "react"
import { Modal,Button } from "react-bootstrap"
import DetailDataTable from "./DetailDataTable"
import { FaThList } from "react-icons/fa"

const MiddleModal = ()=>{
  const [show, setShow] = useState(false)
  const [middleDt,setMiddleDt] = useState([])
  const fetchData =(filter)=>{
    let api
    if(filter === '-'){
      api = `${process.env.REACT_APP_API}/middle`
    }else{
      api = `${process.env.REACT_APP_API}/middle/${filter}`
    }
    axios.get(api)
    .then(response=>{
      setMiddleDt(response.data) })
    .catch(err=>{
      Swal.fire('Errors','getข้อมูลไม่สำเร็จ','error')
    })
  }
  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    fetchData('-')
    setShow(true)
  }
  return(
    <>
    <Button variant="secondary" size="sm" className="ms-1" onClick={handleShow}><FaThList size={18} /> ข้อมูลตารางกลางแบบละเอียด</Button>
    <Modal size="xl" className="text-white" show={show} onHide={handleClose} dialogClassName="modal-dialog-scrollable">
      <Modal.Header className="bg-headercard text-gray" closeButton>
        <Modal.Title>ข้อมูลตารางกลางแบบละเอียด</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-contentcard pt-1">
        <DetailDataTable data={middleDt} search={fetchData} />
      </Modal.Body>
    </Modal>
    </>
  )
}

export default MiddleModal