/* eslint-disable */
import { useState,useEffect } from "react"
import { Container,Col,Row } from "react-bootstrap"
import { FaTablets } from "react-icons/fa"
import { Helmet } from "react-helmet"
import DrugImageDatatable from "../components/DrugImageDataTable"
import AddImageModal from "../components/AddImageModal"
import NavigationBar from "../components/Navbar"
import axios from "axios"
import Swal from "sweetalert2"

const Drug =()=>{
  const [drugImage,setDrugImage] = useState([])
  const fetchData =()=>{
    axios.get(`${process.env.REACT_APP_API}/drugimage`)
    .then(response=>{
      setDrugImage(response.data) })
    .catch(err=>{
      Swal.fire('Errors','getข้อมูลไม่สำเร็จ','error')
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  return (
    <>
    <Helmet>
      <title>PSU Interface | โปรไฟล์ยา</title>
    </Helmet>
    <NavigationBar />
    <Container className="pt-1 text-gray" fluid="lg">
      <Row className="bg-headercard py-1 rounded-top">
        <Col className="pt-1" md={8}>
          <h5><FaTablets /> รายการโปรไฟล์ยา</h5>
        </Col>
        <Col className="d-flex justify-content-end">
          <AddImageModal updateadd={fetchData} />          
        </Col>
      </Row>
      <Row className="bg-contentcard pt-1 pb-2 rounded-bottom d-flex justify-content-center">
        <DrugImageDatatable data={drugImage} updateadd={fetchData} />
      </Row>
    </Container>
    </>
  )
}

export default Drug
