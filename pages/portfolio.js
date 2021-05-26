// next js components
import Head from 'next/head'

//custome compoenents
import Layout from '../components/layout'


export default function Portfolio () {
    return (
        <Layout>
            <Head>
                <title>Portfolio | zuzanna mlynarczyk</title>
                <meta name="description" content="A robust portfolio of web design projects"/>
            </Head>
            <h1>Portfolio</h1>
            <p>Porfolio content goes here</p>
        </Layout>
    )
}