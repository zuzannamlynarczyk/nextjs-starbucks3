// next js components
import Head from 'next/head'

//custome compoenents
import Layout from '../components/layout'
import Col from '../components/col'
import Row from '../components/row'
import Paragraph from '../components/paragraph'


export default function About () {
    return (
        <Layout>
            <Head>
                <title>About | zuzanna mlynarczyk</title>
                <meta name="description" content="An about page" />
            </Head>
            <h1>Our Heritage</h1>
            <Row justifyContentCenter margin>
            <Col xs ={10} sm={10} md={8}>
    <Paragraph>Every day, we go to work hoping to do two things: share great coffee with our friends and help make the world a little better. It was true when the first Starbucks opened in 1971, and it’s just as true today.
    </Paragraph>

    <Paragraph>Back then, the company was a single store in Seattle’s historic Pike Place Market. From just a narrow storefront, Starbucks offered some of the world’s finest fresh-roasted whole bean coffees. The name, inspired by Moby Dick, evoked the romance of the high seas and the seafaring tradition of the early coffee traders.</Paragraph>

    <Paragraph>From the beginning, Starbucks set out to be a different kind of company. One that not only celebrated coffee and the rich tradition, but that also brought a feeling of connection.</Paragraph>

    <Paragraph>Our mission to inspire and nurture the human spirit – one person, one cup, and one neighborhood at a time.</Paragraph>
</Col>
</Row>
</Layout>
    )
}