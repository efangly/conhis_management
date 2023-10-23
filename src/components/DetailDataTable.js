/* eslint-disable */
import DataTable from "react-data-table-component"
import { useState } from "react"
import { Button,InputGroup,Form,Row,Col } from "react-bootstrap"
import { FaSearch } from "react-icons/fa"
import { columnDetail } from "../utils/Columns"

const DetailDataTable = (props)=>{
  const [filter,setFilter] = useState("")
  const columns = columnDetail()
  const paginationOptions = {
    noRowsPerPage: true,
    rangeSeparatorText: 'จาก'
  }
  const searchFilter =()=>{
    props.search(filter)
    setFilter("")
  }

  return(
    <div className="bg-contentcard">
      <Row className="mb-1">
        <Col md={4}></Col>
        <Col md={3}></Col>
        <Col>
          <InputGroup>
            <Form.Control
              size="sm"
              placeholder="เลขที่ใบสั่งยา/HN"
              aria-label="เลขที่ใบสั่งยา/HN"
              aria-describedby="addon"
              value={filter}
              onChange={(e)=>setFilter(e.target.value)}
            />
            <Button variant="secondary" onClick={searchFilter} id="addon"><FaSearch /></Button>
          </InputGroup>
        </Col> 
      </Row>
      <DataTable
        columns={columns}
        data={props.data}
        pagination
        paginationComponentOptions={paginationOptions}
      />
    </div>
  )
}

export default DetailDataTable