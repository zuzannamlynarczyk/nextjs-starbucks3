// next js components
import Head from 'next/head'

//custome compoenents
import Layout from '../components/layout'

import Paragraph from '../components/paragraph'

export default function About () {
    return (
        <Layout>
            <Head>
                <title>Contact</title>
                <meta name="description" content="A contact page" />
            </Head>
            <h1>Contact</h1>
            <h2>Phone</h2>
            <Paragraph>800-Starbuc (800-782-7282)<br/>Hours: 5AM – 8PM PT, 7 days a week</Paragraph>
            <h2>Email</h2>
            <p>starbucks@gmail.com</p>
        </Layout>
    )
}