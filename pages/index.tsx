import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { getDataTable } from "../api/DataInfo/DataTableApi";
import Header from "../components/data-table/Header";
import TableComponent from "../components/data-table/TableComponent";
import { DataTypes } from "../types/DataTableDisplay/DataTypes";

export default function Home() {

  const [dataTable, setDataTable] = useState<DataTypes>();

  const getDataTableInformation = async (page: null | number) => {
    let requestApi;
    if (page) {
      requestApi = await getDataTable(page);
    } else {
      requestApi = await getDataTable(null);
    }
    const payload = await requestApi.data;
    setDataTable(payload)
  }

  useEffect(() => {
    getDataTableInformation(null);
  }, [])


  return (
    <div className="table-container">
      <Header></Header>
      <TableComponent data={dataTable} onChangePage={getDataTableInformation} />
    </div>
  )
}
