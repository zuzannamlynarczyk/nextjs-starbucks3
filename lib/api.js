const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}
//menu items
export async function getAllMenuItems() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						title
						slug
						featuredImage {
							node {
								altText
								mediaDetails {
									width
									height
								}
								sourceUrl
							}
						}
					}
				}
			}
		}
		
	`)
	return data?.items
}

export async function getAllMenuItemSlugs() {
	const data = await fetchAPI(`
		query MyQuery {
			items {
				edges {
					node {
						id
						slug
					}
				}
			}
		}
	`)
	return data?.items
}

export async function getMenuItemBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		item(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		  nutritionalInformation {
			nutritionalData {
			  property
			  value
			}
		  }
		}
	  }
	  `, {
			  variables: {
				  "id" : id
			  }
		  })
		  return data?.item
}

export async function getMenuTypesAndMenuItems() {
	const data = await fetchAPI(`
	query MyQuery {
		menuTypes {
		  edges {
			node {
			  id
			  name
			  items {
				edges {
				  node {
					id
					title
					slug
					featuredImage {
					  node {
						altText
						sourceUrl
						mediaDetails {
						  height
						  width
						}
					  }
					}
					nutritionalInformation {
					  nutritionalData {
						property
						value
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }	  
	`)
	return data?.menuTypes
}

//locations
export async function getAllLocations() {
	const data = await fetchAPI(`
	query MyQuery {
		locations {
		  edges {
			node {
			  id
			  slug
			  featuredImage {
				node {
				  altText
				  sourceUrl
				  mediaDetails {
					height
					width
				  }
				}
			  }
			  title
			  locationInformation {
				city
				phoneNumber
				state
				streetAddress
				zipcode
			  }
			  menuTypes {
				edges {
				  node {
					items {
					  edges {
						node {
						  id
						  title
						  featuredImage {
							node {
							  altText
							  sourceUrl
							  mediaDetails {
								height
								width
							  }
							}
						  }
						}
					  }
					}
					name
				  }
				}
			  }
			}
		  }
		}
	  }
	`)
	return data?.locations
}
export async function getAllTheLocationSlugs() {
	const data = await fetchAPI(`
	query MyQuery {
		locations {
			edges {
				node {
					id
					slug
				}
			}
		}
	}
`)
return data?.locations
}
export async function getLocationBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		location(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		  locationInformation {
			phoneNumber
			city
			state
			streetAddress
			zipcode
		  }
		  relatedPeople {
			locationsEmployees {
			  ... on Person {
				id
				title
				slug
				featuredImage {
				  node {
					altText
					mediaDetails {
					  height
					  width
					}
					sourceUrl
				  }
				}
			  }
			}
		  }
		  menuTypes {
			edges {
			  node {
				name
				items {
				  edges {
					node {
					  content
					  title
					  featuredImage {
						node {
						  altText
						  sourceUrl
						  mediaDetails {
							height
							width
						  }
						  title
						}
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	  `, {
			variables: {
				"id" : id
			}
		})
		return data?.location
}


//people
export async function getAllPeople() {
	const data = await fetchAPI(`
	query MyQuery {
		people {
		edges {
			node {
			id
			slug
			featuredImage {
				node {
				altText
				sourceUrl
				mediaDetails {
					height
					width
				}
				}
			}
			title
			}
		}
		}
	}
`)
return data?.people
}

export async function getAllThePeopleSlugs() {
	const data = await fetchAPI(`
	query MyQuery {
		people {
			edges {
				node {
					id
					slug
				}
			}
		}
	}
`)
return data?.people
}
export async function getPersonBySlug(id) {
	const data = await fetchAPI(`
	query MyQuery($id: ID!) {
		person(id: $id, idType: SLUG) {
		  id
		  title
		  content
		  featuredImage {
			node {
			  altText
			  mediaDetails {
				height
				width
			  }
			  sourceUrl
			}
		  }
		  personInformation {
			emailAddress
			jobTitle
		  }
		  relatedLocations {
			locationsEmployees {
			  ... on Location {
				id
				title
				slug
				featuredImage {
				  node {
					altText
					mediaDetails {
					  height
					  width
					}
					sourceUrl
				  }
				}
			  }
			}
		  }
		}
	  }	  
	  `, {
			variables: {
				"id" : id
			}
		})
		return data?.person
}
