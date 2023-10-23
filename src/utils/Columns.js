/* eslint-disable */
export const columnMiddle=()=>{
  const columns = [
    {
      name: "เลขที่ใบสั่งยา",
      selector: (row) => row.f_prescriptionno,
      maxWidth: "150px",
      center: true
    },
    {
      name: "HN",
      selector: (row) => row.f_hn,
      hide: "md",
      width: "100px",
      center: true
    },
    {
      name: "ชื่อผู้ป่วย",
      selector: (row) => row.f_patientname
    },
    {
      name: "ชื่อยา",
      selector: (row) => row.f_orderitemname
    },
    {
      name: "QTY",
      selector: (row) => row.f_orderqty,
      width: "70px",
      center: true
    },
    {
      name: "หอผู้ป่วย",
      selector: (row) => row.f_warddesc,
      hide: "md",
      maxWidth: "130px"
    },
    {
      name: "เครื่อง",
      cell: row => (row.f_tomachineno == '2' ? 'Proud' : 'LGS'),
      hide: "md",
      width: "80px",
      center: true
    },
    {
      name: "เวลา",
      selector: (row) => row.f_lastmodified,
      maxWidth: "180px",
      center: true
    }
  ]
  return columns
}

export const columnDrugImage=()=>{
  const columns = [
    {
      name: "รูป",
      cell: row => (
        <img alt="" src={`${process.env.REACT_APP_API}${row.DrugImage}`} width="170" height="52" />
      ),
      hide: "sm",
      width: "120px",
      center: true
    },
    {
      name: "กระบอก",
      selector: (row) => row.DrugCassette,
      width: "90px",
      hide: "sm",
      center: true
    },
    {
      name: "รหัสยา",
      selector: (row) => row.DrugCode,
      hide: "md",
      width: "100px"
    },
    {
      name: "ชื่อยา",
      selector: (row) => row.DrugName
    },
    {
      name: 'DrugImage',
      selector: row => row.DrugImage,
      omit: true
    }
  ]
  return columns
}

export const columnDetail=()=>{
  const columns = [
    {
      name: "f_prescriptionno",
      selector: (row) => row.f_prescriptionno,
      width: "160px",
      center: true
    },
    {
      name: "f_seq",
      selector: (row) => row.f_seq,
      width: "90px",
      center: true
    },
    {
      name: "f_seqmax",
      selector: (row) => row.f_seqmax,
      width: "110px",
      center: true
    },
    {
      name: "f_prescriptiondate",
      selector: (row) => row.f_prescriptiondate,
      width: "180px",
      center: true
    },
    {
      name: "f_prioritycode",
      selector: (row) => row.f_prioritycode,
      width: "140px",
      center: true
    },
    {
      name: "f_prioritydesc",
      selector: (row) => row.f_prioritydesc,
      width: "140px",
      center: true
    },
    {
      name: "f_durationcode",
      selector: (row) => row.f_durationcode,
      width: "150px",
      center: true
    },
    {
      name: "f_durationdesc",
      selector: (row) => row.f_durationdesc,
      width: "150px",
      center: true
    },
    {
      name: "f_orderitemtype",
      selector: (row) => row.f_orderitemtype,
      width: "160px",
      center: true
    },
    {
      name: "f_orderitemgroupcode",
      selector: (row) => row.f_orderitemgroupcode,
      width: "220px",
      center: true
    },
    {
      name: "f_orderitemcode",
      selector: (row) => row.f_orderitemcode,
      width: "160px",
      center: true
    },
    {
      name: "f_orderitemname",
      selector: (row) => row.f_orderitemname,
      width: "260px"
    },
    {
      name: "f_orderitemnameTH",
      selector: (row) => row.f_orderitemnameTH,
      width: "260px"
    },
    {
      name: "f_orderitemgenericname",
      selector: (row) => row.f_orderitemgenericname,
      width: "260px"
    },
    {
      name: "f_orderqty",
      selector: (row) => row.f_orderqty,
      width: "120px",
      center: true
    },
    {
      name: "f_orderunitcode",
      selector: (row) => row.f_orderunitcode,
      width: "160px",
      center: true
    },
    {
      name: "f_orderunitdesc",
      selector: (row) => row.f_orderunitdesc,
      width: "155px",
      center: true
    },
    {
      name: "f_dosage",
      selector: (row) => row.f_dosage,
      width: "110px",
      center: true
    },
    {
      name: "f_dosagedispense",
      selector: (row) => row.f_dosagedispense,
      width: "170px",
      center: true
    },
    {
      name: "f_dosageunit",
      selector: (row) => row.f_dosageunit,
      width: "135px",
      center: true
    },
    {
      name: "f_maxdispenseqtyperday",
      selector: (row) => row.f_maxdispenseqtyperday,
      width: "230px",
      center: true
    },
    {
      name: "f_maxdispenseqtyperdayunit",
      selector: (row) => row.f_maxdispenseqtyperdayunit,
      width: "260px",
      center: true
    },
    {
      name: "f_drugform",
      selector: (row) => row.f_drugform,
      width: "120px",
      center: true
    },
    {
      name: "f_drugformname",
      selector: (row) => row.f_drugformname,
      width: "170px",
      center: true
    },
    {
      name: "f_ordercreatedate",
      selector: (row) => row.f_ordercreatedate,
      width: "170px",
      center: true
    },
    {
      name: "f_ordercreatetime",
      selector: (row) => row.f_ordercreatetime,
      width: "170px",
      center: true
    },
    {
      name: "f_orderacceptdate",
      selector: (row) => row.f_orderacceptdate,
      width: "180px",
      center: true
    },
    {
      name: "f_orderaccepttime",
      selector: (row) => row.f_orderaccepttime,
      width: "180px",
      center: true
    },
    {
      name: "f_orderacceptfromip",
      selector: (row) => row.f_orderacceptfromip,
      width: "190px",
      center: true
    },
    {
      name: "f_ordertargetdate",
      selector: (row) => row.f_ordertargetdate,
      width: "170px",
      center: true
    },
    {
      name: "f_ordertargettime",
      selector: (row) => row.f_ordertargettime,
      width: "170px",
      center: true
    },
    {
      name: "f_itemlotcode",
      selector: (row) => row.f_itemlotcode,
      width: "140px"
    },
    {
      name: "f_itemlotexpire",
      selector: (row) => row.f_itemlotexpire,
      width: "150px",
      center: true
    },
    {
      name: "f_itemidentify",
      selector: (row) => row.f_itemidentify,
      width: "150px"
    },
    {
      name: "f_noteprocessing",
      selector: (row) => row.f_noteprocessing,
      width: "200px"
    },
    {
      name: "f_ipdpf_record_no",
      selector: (row) => row.f_ipdpf_record_no,
      width: "180px",
      center: true
    },
    {
      name: "f_highAlertDrug",
      selector: (row) => row.f_highAlertDrug,
      width: "160px",
      center: true
    },
    {
      name: "f_useracceptby",
      selector: (row) => row.f_useracceptby,
      width: "150px"
    },
    {
      name: "f_userorderby",
      selector: (row) => row.f_userorderby,
      width: "150px"
    },
    {
      name: "f_instructioncode",
      selector: (row) => row.f_instructioncode,
      width: "170px",
      center: true
    },
    {
      name: "f_instructiondesc",
      selector: (row) => row.f_instructiondesc,
      width: "170px"
    },
    {
      name: "f_frequencycode",
      selector: (row) => row.f_frequencycode,
      width: "160px"
    },
    {
      name: "f_frequencydesc",
      selector: (row) => row.f_frequencydesc,
      width: "170px"
    },
    {
      name: "f_frequencyTime",
      selector: (row) => row.f_frequencyTime,
      width: "160px",
      center: true
    },
    {
      name: "f_sex",
      selector: (row) => row.f_sex,
      width: "90px",
      center: true
    },
    {
      name: "f_PRN",
      selector: (row) => row.f_PRN,
      width: "90px",
      center: true
    },
    {
      name: "f_patientname",
      selector: (row) => row.f_patientname,
      width: "260px"
    },
    {
      name: "f_patientepisodedate",
      selector: (row) => row.f_patientepisodedate,
      width: "200px",
      center: true
    },
    {
      name: "f_en",
      selector: (row) => row.f_en,
      width: "90px",
      center: true
    },
    {
      name: "f_patientdob",
      selector: (row) => row.f_patientdob,
      width: "130px",
      center: true
    },
    {
      name: "f_hn",
      selector: (row) => row.f_hn,
      width: "100px",
      center: true
    },
    {
      name: "f_daily_dose_flag",
      selector: (row) => row.f_daily_dose_flag,
      width: "170px",
      center: true
    },
    {
      name: "f_doctorcode",
      selector: (row) => row.f_doctorcode,
      width: "150px",
      center: true
    },
    {
      name: "f_doctorname",
      selector: (row) => row.f_doctorname,
      width: "220px"
    },
    {
      name: "f_wardcode",
      selector: (row) => row.f_wardcode,
      width: "130px",
      center: true
    },
    {
      name: "f_warddesc",
      selector: (row) => row.f_warddesc,
      width: "180px"
    },
    {
      name: "f_roomcode",
      selector: (row) => row.f_roomcode,
      width: "150px",
      center: true
    },
    {
      name: "f_roomdesc",
      selector: (row) => row.f_roomdesc,
      width: "150px"
    },
    {
      name: "f_fromlocationname",
      selector: (row) => row.f_fromlocationname,
      width: "190px"
    },
    {
      name: "f_pharmacylocationcode",
      selector: (row) => row.f_pharmacylocationcode,
      width: "230px",
      center: true
    },
    {
      name: "f_pharmacylocationdesc",
      selector: (row) => row.f_pharmacylocationdesc,
      width: "230px"
    },
    {
      name: "f_tomachineno",
      selector: (row) => row.f_tomachineno,
      width: "150px",
      center: true
    },
    {
      name: "f_freetext1",
      selector: (row) => row.f_freetext1,
      width: "190px"
    },
    {
      name: "f_freetext2",
      selector: (row) => row.f_freetext2,
      width: "190px"
    },
    {
      name: "f_freetext3",
      selector: (row) => row.f_freetext3,
      width: "190px"
    },
    {
      name: "f_freetext4",
      selector: (row) => row.f_freetext4,
      width: "190px"
    },
    {
      name: "f_bedcode",
      selector: (row) => row.f_bedcode,
      width: "130px",
      center: true
    },
    {
      name: "f_beddesc",
      selector: (row) => row.f_beddesc,
      width: "170px"
    },
    {
      name: "f_referenceCode",
      selector: (row) => row.f_referenceCode,
      width: "210px",
      center: true
    },
    {
      name: "f_status",
      selector: (row) => row.f_status,
      width: "110px",
      center: true
    },
    {
      name: "f_num_type_desc",
      selector: (row) => row.f_num_type_desc,
      width: "170px"
    },
    {
      name: "f_num_type_of_daily_dose",
      selector: (row) => row.f_num_type_of_daily_dose,
      width: "240px",
      center: true
    },
    {
      name: "f_dispensestatus",
      selector: (row) => row.f_dispensestatus,
      width: "160px",
      center: true
    },
    {
      name: "f_opd_adminby",
      selector: (row) => row.f_opd_adminby,
      width: "160px"
    },
    {
      name: "f_comment",
      selector: (row) => row.f_comment,
      width: "200px"
    },
    {
      name: "f_ipd_admincontinue",
      selector: (row) => row.f_ipd_admincontinue,
      width: "200px",
      center: true
    },
    {
      name: "f_opd_admindatetime",
      selector: (row) => row.f_opd_admindatetime,
      width: "200px",
      center: true
    },
    {
      name: "f_opd_adminlocation",
      selector: (row) => row.f_opd_adminlocation,
      width: "200px"
    },
    {
      name: "f_bagspecialdrug",
      selector: (row) => row.f_bagspecialdrug,
      width: "170px",
      center: true
    },
    {
      name: "f_opd_adminremark",
      selector: (row) => row.f_opd_adminremark,
      width: "190px"
    },
    {
      name: "f_opd_adminstatus",
      selector: (row) => row.f_opd_adminstatus,
      width: "180px",
      center: true
    },
    {
      name: "f_lastmodified",
      selector: (row) => row.f_lastmodified,
      width: "180px",
      center: true
    },
    {
      name: "RowID",
      selector: (row) => row.RowID,
      width: "350px"
    }
  ]
  return columns
}