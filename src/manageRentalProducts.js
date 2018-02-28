import React, { Component } from "react";
import {
  Page,
  Layout,
  Card,
  Tabs,
  FormLayout,
  TextField,
  Select,
  Icon,
  ResourceList,
  TextStyle,
} from "@shopify/polaris";

class manageRentalProducts extends Component {
  render() {
    return (

      <Page
		fullWidth
        breadcrumbs={[{ content: "Rentify Home", url: "/landing" }]}
        title="Rental Products"
        primaryAction={{
          content: "Add Rental Product",
		  url: '/addproduct',
          disabled: false
        }}
        fullWidth={false}
      >
	   <Layout fullWidth={true}>
	    <Layout.Section>
        <Card>
          {this.tabMenu()}
          <Card.Section>{this.searchField()}</Card.Section>
		  <Card.Section>{this.productListBak()}</Card.Section>
        </Card>
	   </Layout.Section>
	   </Layout>
	  </Page>

    );
  }

  searchField() {
    return (
      <FormLayout>
        <TextField
          placeholder="Search"
          prefix={<Icon source="search" disabled />}
          connectedLeft={
            <Select
              label="Unit of time"
              labelHidden
              options={["Filter Products"]}
            />
          }
        />
      </FormLayout>
    );
  }

  tabMenu() {
    return (
      <Tabs
        selected={0}
        tabs={[
          {
            id: "all-customers",
            content: "All",
            accessibilityLabel: "All customers",
            panelID: "all-customers-content"
          },
          {
            id: "accepts-marketing",
            content: "Accepts marketing",
            panelID: "accepts-marketing-content"
          },
          {
            id: "repeat-customers",
            content: "Repeat customers",
            panelID: "repeat-customers-content"
          },
          {
            id: "prospects",
            content: "Prospects",
            panelID: "prospects-content"
          }
        ]}
      />
    );
  }


  productList () {
    return (
			<ResourceList
			  items={[
				{
				  url: '#',
				  attributeOne: 'How to Get Value from Wireframes',
				  attributeTwo: 'by Jonathan Mangrove',
				  attributeThree: <TextStyle variation="subdued">Today, 7:14pm</TextStyle>,
				},
				{
				  url: '#',
				  attributeOne: 'Test blog post',
				  attributeTwo: 'by Jonathan Mangrove',
				  attributeThree: <TextStyle variation="subdued">Jan 14, 2016, 8:24am</TextStyle>,
				  badges: [{content: 'Hidden'}],
				},
			  ]}
			  renderItem={() => {}}
			/>
    );
  }
  productListBak () {
	  const items = [
		  {id: 1, name: 'Call of Duty', inventory: '45', type: 'Video Game', vendor: 'Activision'},
		  {id: 2, name: 'War Craft', inventory: '25', type: 'Video Game', vendor: 'Activision'},
		  {id: 3, name: 'Halo 2', inventory: '15', type: 'Video Game', vendor: 'Microsoft'},
		  {id: 4, name: 'Assasins Creed', inventory: '28', type: 'Video Game', vendor: 'Mahjong'},
		  {id: 5, name: 'Minecraft', inventory: '34', type: 'Video Game', vendor: 'Microsoft'},
		  {id: 6, name: 'Fifa 2018', inventory: '22', type: 'Video Game', vendor: 'Activision'},
		  {id: 7, name: 'Mario Cart', inventory: '45', type: 'Video Game', vendor: 'Nintendo'},
	  ];
	  const tableStyle = {
		width: '100%',
		'border-collapse': 'collapse',

	  };
	  const tableItemStyle = {
		  'border-bottom': '1px solid',
		  'text-align': 'left',
		  padding: '8px',
	  };
	  const productList = items.map((item) =>
		<tr key={item.id}>
			<td style={tableItemStyle}><TextStyle>{item.name}</TextStyle></td>
			<td style={tableItemStyle}><TextStyle>{item.inventory}</TextStyle></td>
			<td style={tableItemStyle}><TextStyle>{item.type}</TextStyle></td>
			<td style={tableItemStyle}><TextStyle>{item.vendor}</TextStyle></td>
		</tr>
	  );


	  return (

		<table style={tableStyle}>
			<tr>
				<th style={tableItemStyle}><TextStyle>Name</TextStyle></th>
				<th style={tableItemStyle}><TextStyle>Inventory</TextStyle></th>
				<th style={tableItemStyle}><TextStyle>Type</TextStyle></th>
				<th style={tableItemStyle}><TextStyle>Vendor</TextStyle></th>
			</tr>
			<tbody>
			{productList}
			</tbody>
		</table>

	  );
  }
}

export default manageRentalProducts;
