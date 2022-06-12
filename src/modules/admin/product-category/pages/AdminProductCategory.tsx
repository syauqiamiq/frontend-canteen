import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import TableProductCategory from '../components/TableProductCategory'

const AdminProductCategory = () => {
  return (
    <Grid container spacing={6}>
      {' '}
      <Grid item xs={12} className='flex justify-between'>
        <Typography variant='h5'>Product Category Table</Typography>
        <Link href='/admin/product-category/create-product-category' passHref>
          <Button>Create Product Category</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <TableProductCategory />
      </Grid>
    </Grid>
  )
}

export default AdminProductCategory
