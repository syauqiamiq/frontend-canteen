// ** React Imports

// ** MUI Imports
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
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

interface FormCreateState {
  name: string
  price: number
  stock: number
  promo_id: string
  product_category_id: string
}

const FormUpdateProduct = ({ id }: any) => {
  // ** States
  const [productCategory, setProductCategory] = useState<any>([])
  const [promo, setPromo] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [btnLoading, setBtnLoading] = useState<boolean>(false)
  const [values, setValues] = useState<FormCreateState>({
    name: '',
    price: 0,
    product_category_id: '',
    promo_id: '',
    stock: 0
  })

  useEffect(() => {
    getPromo()
    getProductCategory()
    getProductById()
  }, [])

  const getProductById = async () => {
    setLoading(true)
    try {
      const result = await axios.get(`https://syauqi-vps.my.id/api/canteen/v1/product/${id}`)
      const data = result.data
      if (data.meta.status === 'success') {
        setLoading(false)
        setValues({
          name: data.data.name,
          price: data.data.price,
          stock: data.data.stock,
          product_category_id: data.data.product_category_id,
          promo_id: data.data.promo_id
        })
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const getPromo = async () => {
    setLoading(true)
    try {
      const result = await axios.get('https://syauqi-vps.my.id/api/canteen/v1/promo')
      const data = result.data
      if (data.meta.status === 'success') {
        setLoading(false)
        setPromo(data.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  const getProductCategory = async () => {
    setLoading(true)
    try {
      const result = await axios.get('https://syauqi-vps.my.id/api/canteen/v1/product-category')
      const data = result.data
      if (data.meta.status === 'success') {
        setLoading(false)
        setProductCategory(data.data)
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  const handleChange = (prop: keyof FormCreateState) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const router = useRouter()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setBtnLoading(true)
    try {
      const cookies = parseCookies()
      const result = await axios.put(`https://syauqi-vps.my.id/api/canteen/v1/product/${id}`, values, {
        headers: {
          Authorization: 'Bearer ' + cookies.token
        }
      })
      const data = result.data
      if (data.meta.status === 'success') {
        setBtnLoading(false)
        alert('SUCCESS UPDATE DATA')
        router.push('/admin/products')
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
      <CardHeader title='Tambah Produk' titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <InputLabel id='form-layouts-separator-select-label'>Nama Produk</InputLabel>
              <TextField
                onChange={handleChange('name')}
                value={values.name}
                fullWidth
                placeholder='Masukkan nama produk'
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id='form-layouts-separator-select-label'>Stok</InputLabel>
              <TextField
                onChange={handleChange('stock')}
                fullWidth
                value={values.stock}
                type='number'
                placeholder='Masukan stok Produk'
                helperText='Masukan stok produk anda dengan tepat'
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id='form-layouts-separator-select-label'>Price</InputLabel>
              <TextField
                onChange={handleChange('price')}
                fullWidth
                type='number'
                value={values.price}
                placeholder='Masukan harga produk'
                helperText='Masukan harga produk anda dengan tepat'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='form-layouts-separator-select-label'>Promo</InputLabel>
                <Select
                  onChange={handleChange('promo_id')}
                  label='Promo'
                  value={values.promo_id}
                  defaultValue=''
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  <MenuItem value=''>Tidak ada Promo</MenuItem>
                  {loading
                    ? 'Loading'
                    : promo.map((data: any) => {
                        return (
                          <MenuItem key={data.id} value={data.id}>
                            {data.name}
                          </MenuItem>
                        )
                      })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <InputLabel id='form-layouts-separator-select-label'>Product Category</InputLabel>
              <FormControl fullWidth>
                <Select
                  onChange={handleChange('product_category_id')}
                  label='Product Category'
                  value={values.product_category_id}
                  id='form-layouts-separator-select'
                  labelId='form-layouts-separator-select-label'
                >
                  {loading
                    ? 'Loading ..'
                    : productCategory.map((data: any) => {
                        return (
                          <MenuItem key={data.id} value={data.id}>
                            {data.name}
                          </MenuItem>
                        )
                      })}
                </Select>
              </FormControl>
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

export default FormUpdateProduct
