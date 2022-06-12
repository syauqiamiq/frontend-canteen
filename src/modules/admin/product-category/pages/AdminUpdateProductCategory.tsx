import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import FormUpdateProductCategory from '../components/FormUpdateProductCategory'

const AdminUpdateProductCategory = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} className='flex justify-between'>
        <Typography variant='h5'>Update Kategori Produkmu!</Typography>
        <Link href='/admin/product-category' passHref>
          <Button>Back to Product Category</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <FormUpdateProductCategory id={id} />
      </Grid>
    </Grid>
  )
}

export default AdminUpdateProductCategory
