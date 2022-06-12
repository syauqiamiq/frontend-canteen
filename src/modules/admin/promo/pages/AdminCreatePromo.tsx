import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { FormCreatePromo } from '../components'

const AdminCreatePromo = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} className='flex justify-between'>
        <Typography variant='h5'>Tambahkan Promo Menarikmu!</Typography>
        <Link href='/admin/products' passHref>
          <Button>Back to Promo</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <FormCreatePromo />
      </Grid>
    </Grid>
  )
}

export default AdminCreatePromo
