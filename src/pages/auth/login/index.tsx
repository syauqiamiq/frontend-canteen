import LoginPage from 'src/modules/auth/login/pages/LoginPage'
import nookies from 'nookies'

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx)

  if (cookies.token) {
    return {
      redirect: {
        destination: '/'
      }
    }
  }

  return {
    props: {}
  }
}

export default LoginPage
