import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { TablePromo } from '../components'

const AdminPromoPage = () => {
  return (
    <Grid container spacing={6}>
      {' '}
      <Grid item xs={12} className='flex justify-between'>
        <Typography variant='h5'>Promo Table</Typography>
        <Link href='/admin/promo/create-promo' passHref>
          <Button>Create Promo</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <TablePromo />
      </Grid>
    </Grid>
  )
}

export default AdminPromoPage
