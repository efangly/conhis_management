/* eslint-disable */
import { useState,useEffect } from "react"
import { Container,Col,Row,Button } from "react-bootstrap"
import { FaRegListAlt } from "react-icons/fa"
import { Helmet } from "react-helmet"
import io from "socket.io-client"
import axios from "axios"
import Swal from "sweetalert2"
import { Toast } from "../utils/Swal"
import NavigationBar from "../components/Navbar"
import MiddleDatatable from "../components/MiddleDataTable"
import CardOrder from "../components/CardOrder"
import CardPrescription from "../components/CardPrescription"
import CardLgs from "../components/CardLgs"
import CardProud from "../components/CardProud"
import MiddleModal from "../components/MiddleModal"

const socket = io.connect(process.env.REACT_APP_SOCKET)

const Main =()=>{
  const [middleDt,setMiddleDt] = useState([])
  const fetchData =()=>{
    axios.get(`${process.env.REACT_APP_API}/middle`)
    .then(response=>{
      setMiddleDt(response.data) })
    .catch(err=>{
      Swal.fire('Errors','getข้อมูลไม่สำเร็จ','error')
    })
  }
  useEffect(()=>{
    socket.on("receive_message",(data)=>{
      fetchData()
      Toast().fire({icon: 'info',title: data.message})
    })
    fetchData()
  },[socket])
  
  return (
    <>
    <Helmet>
      <title>PSU Interface | หน้าแรก</title>
    </Helmet>
    <NavigationBar />
    <Container className="bg-contentcard mt-1 py-2 px-1" fluid="lg">
      <Row className="row-cols-2 row-cols-md-4 gx-2 gy-2 pb-1 px-1 rounded-3">
        <Col>
          <CardProud data={middleDt} />
        </Col>
        <Col>
          <CardLgs data={middleDt} /> 
        </Col>
        <Col>
          <CardPrescription data={middleDt} />         
        </Col>
        <Col>
          <CardOrder data={middleDt} />
        </Col>
      </Row>
      <Row className="gx-2 py-1 px-2 rounded-top text-gray">
        <Col md={8}>
          <h5><FaRegListAlt /> ข้อมูลตารางกลางประจำวัน</h5>
        </Col>
        <Col className="d-flex justify-content-end">
          <MiddleModal />
        </Col>
      </Row>
      <Row className="pb-1 px-2 gx-2 rounded-bottom">
        <Col>
          <MiddleDatatable data={middleDt} />
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Main
