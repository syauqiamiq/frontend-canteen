// ** React Imports

// ** MUI Imports
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
import { useState } from 'react'

// ** Icons Imports

interface FormCreateState {
  name: string
}

const FormCreateProductCategory = () => {
  // ** States
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [values, setValues] = useState<FormCreateState>({
    name: ''
  })

  const handleChange = (prop: keyof FormCreateState) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setBtnLoading(true)
    try {
      const cookies = parseCookies()
      const result = await axios.post('https://syauqi-vps.my.id/api/canteen/v1/product-category', values, {
        headers: {
          Authorization: 'Bearer ' + cookies.token
        }
      })
      const data = result.data
      if (data.meta.status === 'success') {
        setBtnLoading(false)
        alert('SUCCESS ADD DATA')
        router.replace('/admin/product-category')
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
      <CardHeader title='Tambah Kategori Produk' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange('name')}
                fullWidth
                label='Kategori Produk'
                placeholder='Masukkan nama kategori produkmu'
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

export default FormCreateProductCategory
