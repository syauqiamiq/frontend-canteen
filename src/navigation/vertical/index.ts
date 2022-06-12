// ** Icon imports
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CubeOutline from 'mdi-material-ui/CubeOutline'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import { ChartBar } from 'mdi-material-ui'

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/admin'
    },
    {
      sectionTitle: 'Product'
    },
    {
      title: 'Product Category',
      icon: CubeOutline,
      path: '/admin/product-category'
    },
    {
      title: 'Products',
      icon: CubeOutline,
      path: '/admin/products'
    },
    {
      title: 'Promo',
      icon: CubeOutline,
      path: '/admin/promo'
    },
    {
      sectionTitle: 'Analytics'
    },
    {
      title: 'Reporting',
      icon: ChartBar,
      path: '/admin/report'
    },
    {
      sectionTitle: 'Users'
    },
    {
      title: 'User Account',
      icon: AccountCogOutline,
      path: '/admin/user-account'
    }

    // {
    //   sectionTitle: 'Pages'
    // },
    // {
    //   title: 'Login',
    //   icon: Login,
    //   path: '/pages/login',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
