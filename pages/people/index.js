import Layout from '../../components/layout'
import Card from '../../components/card'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
// getStaticProps

import { getAllPeople } from '../../lib/api'

export async function getStaticProps() {

    const peopleData = await getAllPeople()

    return {
        props: { peopleData }
    }
}

export default function People({ peopleData }) {
    return (
        <Layout>
            <h1>People</h1>
            <p>Meet our staff. We work hard to find the right employees to serve you.</p>
            <Row justifyContentCenter>
            <Section>
                {peopleData.edges.map((edge, index) => {
                    const { node } = edge;
                    const { title } = node;
                    return (
                        <Row justifyContentCenter>
                        <Col xs={8} sm={4} md={4}>
                    <Card node={node} key={index} parentPath="people" />
                    </Col>
                    </Row>
                    )
                })}
                </Section>
</Row>
</Layout>
    )
}

