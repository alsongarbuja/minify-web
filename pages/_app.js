import Layout from '../layouts/Layout.tsx'

import '../styles/globals.css'
import '../styles/terms.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
