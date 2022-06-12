import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { FormCreateProduct } from '../components'

const AdminCreateProductPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} className='flex justify-between'>
        <Typography variant='h5'>Tambahkan Produk Baru mu!</Typography>
        <Link href='/admin/products' passHref>
          <Button>Back to Products</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <FormCreateProduct />
      </Grid>
    </Grid>
  )
}

export default AdminCreateProductPage
