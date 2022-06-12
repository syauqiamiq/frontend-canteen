import { Button, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormUpdatePromo } from '../components'


const AdminUpdatePromo = () => {
  const router = useRouter()

  const { id } = router.query

  return (
    <Grid container spacing={6}>
      <Grid item xs={12} className='flex justify-between'>
        <Typography variant='h5'>Update Promomu!</Typography>
        <Link href='/admin/products' passHref>
          <Button>Back to Promo</Button>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <FormUpdatePromo id={id} />
      </Grid>
    </Grid>
  )
}

export default AdminUpdatePromo
