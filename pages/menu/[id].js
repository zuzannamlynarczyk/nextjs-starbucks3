import Layout from '../../components/layout'
import Image from 'next/image'
import Link from 'next/link'
import Row from '../../components/row'
import Col from '../../components/col'
import Button from '../../components/button'

import { getAllMenuItemSlugs, getMenuItemBySlug } from'../../lib/api'
import Paragraph from '../../components/paragraph'

export async function getStaticPaths() {

    const allSlugs = await getAllMenuItemSlugs() //get al the slugs and get json feed of slugs
    
    const paths = allSlugs.edges.map(edge => {
        const { slug } = edge.node
        //grabbing the slugs from edges
        return {
            params: {
                id: slug
                //and placing inside params ... building list of all the slugs
            }
        }
    })
    //returns an array of paths and buils latte.js salad.js etc with no fallback aka a website that doesn't exist will show a 404
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const menuItemData = await getMenuItemBySlug(params.id)

    //structing all the data that comes in as props
    return {
        props : {
            menuItemData
        }
    }
}

export default function MenuItem({ menuItemData }) {

    const { title, featuredImage, content, nutritionalInformation } = menuItemData;

    const { sourceUrl, mediaDetails, altText } = featuredImage.node; 

    const { width, height } = mediaDetails;

    const { nutritionalData } = nutritionalInformation;

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
            <Col xs ={8} sm={6} md={4}>
            <Image
                src={sourceUrl}
                width={width}
                height={height}
                alt={altText}
            />
            </Col>
            </Row>
            
            <h1>{title}</h1>
            <Row justifyContentCenter margin>
                <Col xs ={8} sm={8} md={4}>
            <div dangerouslySetInnerHTML={{__html: content }}/>
            </Col >
            </Row>
            <Col> 
            <Row justifyContentCenter propertyFontSize margin>
            {nutritionalData.map((item, index)=>{
                const {property, value} = item
                return (
                    <div key={index}>
                        <Col><strong>{property}</strong></Col>
                        <Col>{value}</Col>
                    </div>
                )
            })}
            <Row>
                <Col>
                <Button
                label="Order Now"
                path="/menu"
                type="primary"
                />
                </Col>
            </Row>
         
        </Row>
            </Col>
        </Layout>
    )
}