/* eslint-disable */
import axios from "axios"
import Swal from "sweetalert2"
import available from "../assets/images/image_available.png"
import { Toast } from "../utils/Swal"
import { useState } from "react"
import { Modal,Button,Form,Row,Col } from "react-bootstrap"
import { FaFolderPlus,FaTablets } from "react-icons/fa"

const AddImageModal = (props)=>{
  const [show, setShow] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [preview, setPreview] = useState(available)
  const [imageList,setImageList] = useState({ cassette:0 ,drugcode:"" ,drugname: "" })
  const { cassette ,drugcode ,drugname } = imageList
  const inputValue = name=>e=> {
    setImageList({...imageList,[name]:e.target.value}); 
  }
  const handleClose = () => {
    setShow(false)
    setPreview(available)
    setSelectedImage(null)
    setImageList({ cassette:0 ,drugcode:"" ,drugname: "" })
  }
  const handleShow = () => {
    setShow(true)
  }
  const handleSelect = (e) => {
    const image = e.target.files[0]
    if (!image.name.match(/\.(jpg|jpeg|png|gif)$/)) {
      Swal.fire('Errors','ต้องการเฉพาะไฟล์รูป','error') 
    }else{
      setPreview(URL.createObjectURL(image))
      setSelectedImage(image)
    }
  }
  const submitForm = (e) => {
    e.preventDefault()
    if(!selectedImage) {
      Swal.fire('Errors','ยังไม่ได้เลือกรูป','error')
    }else{
      const formData = new FormData()
      const headers = { headers:{ "Content-Type": "multipart/form-data" } }
      formData.append("fileupload", selectedImage)
      formData.append("drugcode", drugcode)
      formData.append("drugcassette", cassette)
      formData.append("drugname", drugname)
      formData.append("path", process.env.REACT_APP_API)
      axios.post(`${process.env.REACT_APP_API}/drugimage`,formData,headers
      ).then(response=>{
        props.updateadd()
        Toast().fire({ icon: 'success',title: 'เพิ่มโปรไฟล์ยาสำเร็จ' })
        handleClose()
      }).catch(err=>{
        if(err.response.statusText == "Unauthorized"){
          window.location = "/login"
        }
        else{ 
          console.log(err)
          Swal.fire('Errors',err.response.data.message,'error') 
        }
      })
    }
  }
  return(
    <>
    <Button variant="success" size="sm" className="ms-1" onClick={handleShow}><FaFolderPlus size={18} /> เพิ่มข้อมูลยา</Button>
    <Modal show={show} onHide={handleClose} dialogClassName="modal-md modal-dialog-scrollable" >
    <Form onSubmit={submitForm}>
      <Modal.Header className="bg-headercard text-gray" closeButton>
        <Modal.Title><FaTablets /> เพิ่มโปรไฟล์ยา</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-contentcard pt-1">
        <Form.Group className="d-flex justify-content-center mt-1">
          <img alt="" src={preview} width="220" height="122" />
        </Form.Group>
        <Form.Group>
          <Form.Label>รูปยา</Form.Label>
          <Form.Control type="file" accept="image/*" onChange={handleSelect} />
        </Form.Group>
        <Row className="mb-1">
          <Col>
            <Form.Label>หมายเลขกระบอก</Form.Label>
            <Form.Control type="number" value={cassette} onChange={inputValue("cassette")} required />
          </Col>
          <Col>
            <Form.Label>รหัสยา</Form.Label>
            <Form.Control type="text" value={drugcode} onChange={inputValue("drugcode")} required />
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>ชื่อยา</Form.Label>
          <Form.Control type="text" value={drugname} onChange={inputValue("drugname")} required />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer className="bg-headercard">
        <Button type="submit" variant="success" className="ms-1"><FaFolderPlus size={18} /> เพิ่มข้อมูลยา</Button>      
      </Modal.Footer>
    </Form>
    </Modal>
    </>
  )
}

export default AddImageModal