import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

//custom components
import Button from '../components/button'

//styles

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Welcome to Starbucks</h1>
        <p>Home to Coffee</p>
        <Button 
                label="View Menu"
                path="/menu"
                type="primary"
        />
        <Button 
                label="Locations"
                path="/locations"
                type="primary"
        />
        <Button 
                label="People"
                path="/people"
                type="secondary"
        />
      </section>
    </Layout>
  )
}
