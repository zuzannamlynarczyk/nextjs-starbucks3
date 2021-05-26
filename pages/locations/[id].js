import Layout from "../../components/layout"
import Image from 'next/image'
import Link from 'next/link'
import Section from '../../components/section'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'
import Button from '../../components/button'

import { getAllTheLocationSlugs, getLocationBySlug } from '../../lib/api'
import Paragraph from "../../components/paragraph"


export async function getStaticPaths() {

    const allLocationSlugs = await getAllTheLocationSlugs()

    const paths = allLocationSlugs.edges.map(edge => {
        const { slug } = edge.node
        return {
            params: {
                id: slug
            }
        }
    })
   return {
       paths,
       fallback: false
   } 
}

export async function getStaticProps({ params }) {

    const singleLocationData = await getLocationBySlug
    (params.id)

    return {
        props : {
            singleLocationData
        }
    }

}

export default function SingleLocation({ singleLocationData,}) {

    const { title, featuredImage, content, locationInformation, relatedPeople, menuTypes } = singleLocationData;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node; 

    const { width, height } = mediaDetails;

    const { streetAddress, city, state, zipcode, phoneNumber } = locationInformation;


    return (
        <Layout>
            <Row>
                <Col>
                <Button
                label="Back to Menu"
                path="/menu"
                type="secondary"
                />
                </Col>
            </Row>
                <Row justifyContentCenter>
                    <Col xs={10} sm={8} md={6}>
                        <Image
                            src={sourceUrl}
                            width={width}
                            height={height}
                            alt={altText}
                        />
                    </Col>
                </Row>
            <h1>{title}</h1>
                <Paragraph>
                    {streetAddress}, {city}, {state} {zipcode}
                    <br/>
                    {phoneNumber}
                </Paragraph>
                        <h1>Available Menu Items</h1>
                        <Row justifyContentCenter margin>
                        {menuTypes.edges.map(edge => {
                const { name, items } = edge.node;
                return <Section title={name}>
                        <Row justifyContentCenter>
                        {items.edges.map((edge, index) => {
                            const { node } = edge;
                            return <Col xs={8} sm={4} md={3} lg={3} key={index}>
                                <Card node={node} parentPath="menu"/>
                            </Col>
                        })}
                    </Row>
                </Section>
                            })}
                        </Row>
                        <h1>Staff</h1>
                        <Row justifyContentCenter margin>
                            {relatedPeople.locationsEmployees.map((edge , index)=>{
                                return (
                                    <Col xs={8} sm={4} md={3} >
                                            <Card node= {edge} parentPath="people"
                                            />
                                    </Col>
                                )
                            })}
                        </Row>
        </Layout>
    )
}


