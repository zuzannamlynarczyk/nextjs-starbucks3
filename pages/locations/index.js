import Layout from '../../components/layout'
import Card from '../../components/card'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
// getStaticProps

import { getAllLocations } from '../../lib/api'

export async function getStaticProps() {

    const locationsData = await getAllLocations()

    return {
        props: { locationsData }
    }
}

 export default function Locations({ locationsData, }) {
  
    return (
  
        <Layout>
            <h1>Locations</h1>
            <p>Check out all of our locations for Starbucks near you.</p>
            <Row justifyContentCenter>
            <Section>
                {locationsData.edges.map((edge, index, ) => {
                    const { node } = edge;
                    const { title } = node;
            
                    return (
                        <Row justifyContentCenter>
                        <Col xs ={8} sm={8} md={6}>
                        <Card node={node} key={index} parentPath="locations"/>
                        </Col>
                        </Row>
                    )

                })}
            </Section>
            </Row>
        </Layout>
    )
}


