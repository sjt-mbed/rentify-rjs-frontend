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
					{this.primaryColumn()}
				  </Layout.Section>
				  <Layout.Section secondary>
					{this.secondaryColumn()}
				  </Layout.Section>
				</Layout>
			</Page>
		);
	}

	primaryColumn () {
		return (
			<Card
			  title="Order details"
			  sectioned
			>
			  <p>View a summary of your order.</p>
			</Card>
		);
	}

	secondaryColumn () {
		return (
			<Card
			  title="Tags"
			  sectioned
			>
			  <p>Add tags to your order.</p>
			</Card>
		);
	}

}

export default addProduct;