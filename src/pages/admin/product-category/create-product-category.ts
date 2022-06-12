import AdminCreateProductCategory from 'src/modules/admin/product-category/pages/AdminCreateProductCategory'

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

export default AdminCreateProductCategory
