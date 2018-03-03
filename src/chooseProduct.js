import React, { Component } from 'react'
import {
	Page,
	Layout,
	Card
} from "@shopify/polaris"

class chooseProduct extends Component {
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
			  <a href="https://polaris.shopify.com/components/embedded/embedded-resource-picker#navigation">
				<p> Using Embedded Resource Picker reactjs component, this becomes much easier</p>
			  </a>
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

export default chooseProduct;