import AdminProductPage from 'src/modules/admin/products/pages/AdminProductPage'
import nookies from 'nookies'

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx)

  if (!cookies.token) {
    return {
      redirect: {
        destination: '/auth/login'
      }
    }
  }

  return {
    props: {}
  }
}

export default AdminProductPage
