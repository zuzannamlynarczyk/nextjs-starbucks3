// getstatic paths
//getstaticprops
// initialize the component
import Layout from "../../components/layout"
import Image from 'next/image'
import Link from 'next/link'
import Row from '../../components/row'
import Col from '../../components/col'
import Card from '../../components/card'
import Button from '../../components/button'

import { getAllThePeopleSlugs, getPersonBySlug } from '../../lib/api'
import Paragraph from "../../components/paragraph"

export async function getStaticPaths() {

    const allPeopleSlugs = await getAllThePeopleSlugs()

    const paths = allPeopleSlugs.edges.map(edge => {
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

    const singlePersonData = await getPersonBySlug(params.id)

    return {
        props : {
            singlePersonData
        }
    }
}

export default function SinglePerson({ singlePersonData }) {

    const { title, featuredImage, content, relatedLocations, personInformation } = singlePersonData;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node; 

    const { width, height } = mediaDetails;

    const { emailAddress, jobTitle } = personInformation;

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
                    <Col xs={8} sm={6} md={4}>
            <Image
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            </Col>
                </Row>

            <h2>{title}</h2>
                <Paragraph>
                        <div dangerouslySetInnerHTML={{__html: content }}/>
                        <a href=""><strong>{emailAddress}</strong></a>
                </Paragraph>
                
            <h2>Locations</h2>
                <Row justifyContentCenter margin>
                    {relatedLocations.locationsEmployees.map((edge , index)=>{
                        return (
                            <Col xs={8} sm={5} md={3} >
                                    <Card node= {edge} parentPath="locations"
                                    />
                            </Col>
                        )
                    })}
                </Row>

        </Layout>
    )
}