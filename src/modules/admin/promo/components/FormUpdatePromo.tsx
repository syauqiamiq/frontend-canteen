// ** React Imports

// ** MUI Imports
import { InputLabel } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'

// ** Icons Imports

interface FormUpdateState {
  name: string
  discount: number
}

const FormUpdatePromo = ({ id }: any) => {
  // ** States
  const [loading, setLoading] = useState<boolean>(false)
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [values, setValues] = useState<FormUpdateState>({
    name: '',
    discount: 0
  })

  useEffect(() => {
    getPromoById()
  }, [])

  const getPromoById = async () => {
    setLoading(true)
    try {
      const result = await axios.get(`https://syauqi-vps.my.id/api/canteen/v1/promo/${id}`)
      const data = result.data
      if (data.meta.status === 'success') {
        setLoading(false)
        setValues({
          name: data.data.name,
          discount: data.data.discount
        })
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const handleChange = (prop: keyof FormUpdateState) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setBtnLoading(true)
    try {
      const cookies = parseCookies()
      const result = await axios.put(`https://syauqi-vps.my.id/api/canteen/v1/promo/${id}`, values, {
        headers: {
          Authorization: 'Bearer ' + cookies.token
        }
      })
      const data = result.data
      if (data.meta.status === 'success') {
        setBtnLoading(false)
        alert('SUCCESS UPDATE DATA')
        router.replace('/admin/promo')
      } else {
        setBtnLoading(false)
        console.log(data.meta.message)
      }
    } catch (error) {
      setBtnLoading(false)
      console.log(error)
    }
  }

  return (
    <Card>
      <CardHeader title='Update Promo' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        {loading ? 'Loading ...' : ''}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <InputLabel id='form-layouts-separator-select-label'>Nama Promo</InputLabel>
              <TextField
                onChange={handleChange('name')}
                value={values.name}
                fullWidth
                placeholder='Masukkan nama produk'
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id='form-layouts-separator-select-label'>Discount</InputLabel>
              <TextField
                onChange={handleChange('discount')}
                fullWidth
                value={values.discount}
                type='number'
                placeholder='Masukan stok Produk'
                helperText='Masukan stok produk anda dengan tepat'
              />
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                {btnLoading ? (
                  'Loading ..'
                ) : (
                  <Button type='submit' variant='contained' size='large'>
                    Submit
                  </Button>
                )}
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default FormUpdatePromo
