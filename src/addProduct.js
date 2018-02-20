import React, { Component } from 'react'
import {
	Page,
	Layout,
	Card
} from "@shopify/polaris"

class addProduct extends Component {
	render () {
		return (
			<Page 
				breadcrumbs={[{ content: "Rental Products", url: "/manageRentalProducts"}]}
				title="Add Rental Product"
				fullWidth={false}
			>
				<Layout>
				  <Layout.Section>
					<Card
					  title="Order details"
					  sectioned
					>
					  <p>View a summary of your order.</p>
					</Card>
				  </Layout.Section>
				  <Layout.Section secondary>
					<Card
					  title="Tags"
					  sectioned
					>
					  <p>Add tags to your order.</p>
					</Card>
				  </Layout.Section>
				</Layout>
			</Page>
		);
	}
}

export default addProduct;