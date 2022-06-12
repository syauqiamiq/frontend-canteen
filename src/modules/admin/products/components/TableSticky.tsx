// ** React Imports
import { useState, ChangeEvent, useEffect } from 'react'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import axios from 'axios'
import { Button } from '@mui/material'
import Link from 'next/link'
import { parseCookies } from 'nookies'

interface Column {
  field: 'name' | 'stock' | 'price' | 'promo' | 'product_category' | 'id'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: readonly Column[] = [
  { field: 'name', label: 'Name', minWidth: 170 },
  { field: 'stock', label: 'Stocks', minWidth: 100 },
  {
    field: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right'
  },
  {
    field: 'promo',
    label: 'Promo',
    minWidth: 170,
    align: 'right'
  },
  {
    field: 'product_category',
    label: 'Category',
    minWidth: 170,
    align: 'right'
  },
  {
    field: 'id',
    label: 'Action',
    minWidth: 170,
    align: 'right'
  }
]

const TableStickyProduct = () => {
  // ** States
  const [page, setPage] = useState<number>(0)
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const [data, setData] = useState<any>([])
  const [deleteLoading, setDeleteLoading] = useState<boolean>(false)

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    const result = await axios.get('https://syauqi-vps.my.id/api/canteen/v1/product')
    if (result.data.meta.status === 'success') {
      const data = result.data.data

      setData(data)
    }
  }
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleDelete = async (id: number) => {
    setDeleteLoading(true)
    try {
      const cookies = parseCookies()
      const result = await axios.delete(`https://syauqi-vps.my.id/api/canteen/v1/product/${id}`, {
        headers: {
          Authorization: 'Bearer ' + cookies.token
        }
      })
      const data = result.data
      if (data.meta.status === 'success') {
        setDeleteLoading(false)
        alert('SUCCESS DELETE DATA')
        getProduct()
      } else {
        setDeleteLoading(false)
        alert('FAILED TO DELETE DATA')
        console.log(data.meta.message)
      }
    } catch (error) {
      setDeleteLoading(false)
      console.log(error)
    }
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      {deleteLoading ? 'Loading ...' : ''}
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell key={column.field} sx={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row: any) => {
              return (
                <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                  {columns.map(column => {
                    let value = row[column.field]

                    if (column.field === 'product_category') {
                      value = row[column.field].name
                    }
                    if (column.field === 'promo') {
                      if (row[column.field] !== null) {
                        value = row[column.field].name
                      } else {
                        value = '-'
                      }
                    }
                    if (column.field === 'id') {
                      return (
                        <TableCell key={column.field}>
                          <Button onClick={() => handleDelete(value)}>Delete Product</Button>
                          <Link href={`/admin/products/${value}`} passHref>
                            <Button>Update Product</Button>
                          </Link>
                        </TableCell>
                      )
                    }

                    return <TableCell key={column.field}>{value}</TableCell>
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default TableStickyProduct
