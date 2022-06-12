import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormUpdateProduct } from '../components'

const AdminUpdateProductPage = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} className='flex justify-between'>
        <Typography variant='h5'>Update Produkmu!</Typography>
        <Link href='/admin/products' passHref>
          <Button>Back to Products</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <FormUpdateProduct id={id} />
      </Grid>
    </Grid>
  )
}

export default AdminUpdateProductPage
