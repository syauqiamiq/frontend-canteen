import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import FormCreateProductCategory from '../components/FormCreateProductCategory'

const AdminCreateProductCategory = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} className='flex justify-between'>
        <Typography variant='h5'>Tambahkan Kategori Produkmu!</Typography>
        <Link href='/admin/product-category' passHref>
          <Button>Back to Product Category</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <FormCreateProductCategory />
      </Grid>
    </Grid>
  )
}

export default AdminCreateProductCategory
