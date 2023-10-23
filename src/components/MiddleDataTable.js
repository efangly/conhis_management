/* eslint-disable */
import DataTable from "react-data-table-component"
import { columnMiddle } from "../utils/Columns"

const MiddleDatatable = (props)=>{
  const columns = columnMiddle()
  const paginationOptions = {
    noRowsPerPage: true,
    rangeSeparatorText: 'จาก'
  }
  const conditionalRowStyles = [{
    when: row => row.f_status === "2",
    style: { color: 'red' }
  }]

  return(
    <>
    <DataTable
      columns={columns}
      data={props.data}
      pagination
      paginationComponentOptions={paginationOptions}
      conditionalRowStyles={conditionalRowStyles}
    />
    </>
  )
}

export default MiddleDatatable