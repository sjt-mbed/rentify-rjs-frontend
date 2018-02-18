import React, { Component } from "react";
import {
  Page,
  Layout,
  Card,
  Badge,
  Tabs,
  FormLayout,
  TextField,
  Select,
  Icon,
  ResourceList,
  Thumbnail
} from "@shopify/polaris";

class manageRentalProducts extends Component {
  render() {
    return (
      <Page
        breadcrumbs={[{ content: "Rentify Home", url: "/landing" }]}
        title="Rental Products"
        primaryAction={{
          content: "Add Rental Product",
          disabled: false
        }}
        fullWidth={false}
      >
        <Card>
          {this.tabMenu()}
          <Card.Section>{this.searchField()}</Card.Section>
          <Card.Section>{this.productList()}</Card.Section>
          <Card.Section>Product List should be here</Card.Section>
        </Card>
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
      <ResourceList/>
    );
  }
}

export default manageRentalProducts;
