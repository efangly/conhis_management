/* eslint-disable */
import DataTable from "react-data-table-component"
import { useState } from "react"
import { FaTrashAlt } from "react-icons/fa"
import { Col,Row,Button } from "react-bootstrap"
import { columnDrugImage } from "../utils/Columns"
import { Toast,DeleteSwal } from "../utils/Swal"
import axios from "axios"
import Swal from "sweetalert2"
import available from "../assets/images/image_available.png"

const DrugImageDatatable = (props)=>{
  const [preview, setPreview] = useState(available)
  const columns = columnDrugImage()
  columns.push({
    name: "ลบ",
    cell: row => (
      <Button variant="outline-danger" onClick={() => handleDelete(row.DrugCode,row.DrugImage)}><FaTrashAlt size={24}/></Button>   
    ),
    button: true,
    maxWidth: "70px",
    center: true
  })
  const paginationOptions = {
    noRowsPerPage: true,
    rangeSeparatorText: 'จาก'
  }
  const handleRowClicked = row => {
    setPreview(`${process.env.REACT_APP_API}${row.DrugImage}`)
  }
  const handleDelete = (drugcode,drugimage) => {
    DeleteSwal().then((result) => {
      if (result.isConfirmed){
        const drugname = drugimage.split("/")
        axios.delete(`${process.env.REACT_APP_API}/drugimage/${drugcode}/${drugname[drugname.length - 1]}`
        ).then(response=>{
          setPreview(available)
          props.updateadd()
          Toast().fire({icon: 'info',title: "ลบรายการสำเร็จ"})
        })
        .catch(err=>{
          Swal.fire('Errors','ลบข้อมูลไม่สำเร็จ','error')
        }) 
      }
    }) 
  }

  return(
    <Row className="flex-column-reverse flex-lg-row">
      <Col lg={9}>
        <DataTable
        columns={columns}
        data={props.data}
        pagination
        onRowClicked={handleRowClicked}
        paginationComponentOptions={paginationOptions}
        />
      </Col>
      <Col lg={3} className="d-flex justify-content-center align-items-center p-1">
        <img alt="" src={preview} width="360" height="197" />
      </Col>
    </Row>
  )
}

export default DrugImageDatatable