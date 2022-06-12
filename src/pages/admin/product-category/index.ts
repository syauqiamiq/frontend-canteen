import AdminProductCategory from 'src/modules/admin/product-category/pages/AdminProductCategory'

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

export default AdminProductCategory
