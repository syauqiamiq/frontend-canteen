import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { TableStickyProduct } from '../components'

const AdminProductPage = () => {
  return (
    <Grid container spacing={6}>
      {' '}
      <Grid item xs={12} className='flex justify-between'>
        <Typography variant='h5'>Product Table</Typography>
        <Link href='/admin/products/create-product' passHref>
          <Button>Create Product</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <TableStickyProduct />
      </Grid>
    </Grid>
  )
}

export default AdminProductPage
