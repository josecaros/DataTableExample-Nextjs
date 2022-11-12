import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { DataTypes } from '../../types/DataTableDisplay/DataTypes'

interface PropsTable {
  data?: DataTypes,
  onChangePage: (page: number | null) => void
}

const TableComponent = ({ data, onChangePage }: PropsTable) => {
  const headers: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 80,
    },
    {
      field: 'avatar',
      headerName: ' ',
      width: 50,
      renderCell(params: GridRenderCellParams<string>) {
        return (
          <img src={params.value} alt="" width={30} height={30} />
        )
      },
    },
    {
      field: 'first_name',
      headerName: 'Nombres',
      width: 300,
      editable: false,
    },
    {
      field: 'last_name',
      headerName: 'Apellidos',
      width: 200,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Correo',
      width: 200,
      editable: false,
    },
  ]
  console.log(data?.data)
  if (data)
    return (
      <div className='dataContainer'>
        <DataGrid rows={data.data}
          columns={headers}
          pageSize={data.per_page}
          pagination
          rowCount={data.total}
          onPageChange={(newPage) => {
            onChangePage(newPage + 1)
          }}
          paginationMode="server"


        />
      </div>
    )
  return (
    <div>Cargando datos de tabla...</div>
  )
}

export default TableComponent