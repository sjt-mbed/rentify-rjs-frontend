import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import samplePage from './App'
import landingPage from './landingPage'
import manageRentalProducts from './manageRentalProducts'
import addProduct from './addProduct'
import returnsManagement from './returns'
import chooseProduct from './chooseProduct'
import holdsManagement from './holdsManagement'

import {
	Heading,
	Subheading,
	TextContainer,
	DisplayText,
	Icon
} from '@shopify/polaris';


const RentifyApp = () => {
	return <Router>
		<div>
			{layoutHeader()}
				{layoutNav()}
			<article>
				<Route exact path="/" component={landingPage}/>
				<Route exact path="/sample" component={samplePage}/>
				<Route exact path="/landing" component={landingPage}/>
				<Route exact path="/topics" component={Topics}/>
				<Route exact path="/managerentalproducts" component={manageRentalProducts}/>
				<Route exact path="/addproduct" component={addProduct}/>
				<Route exact path="/returns" component={returnsManagement}/>
				<Route exact path="/chooseproduct" component={chooseProduct}/>
				<Route exact path="/holdsmanagement" component={holdsManagement}/>
			</article>
			<footer>Footer</footer>
		</div>
	</Router>;
}

const Topics = () => {
	return <div>
		<h2>Topics</h2>
	</div>;
}

const layoutHeader = () => {
	return 	<header><DisplayText>Shopify</DisplayText></header>;
}

const layoutNav = () => {
	return 	<nav>
				<ul><TextContainer spacing="loose">
					<li><Heading>Home</Heading></li>
					<li><Subheading>Orders</Subheading></li>
					<li><Heading>Products</Heading></li>
					<li><Heading>Customers</Heading></li>
					<li><Heading>Analytics</Heading></li>
					<li><Heading>Discounts</Heading></li>
					<li><Heading>Apps</Heading></li>
				</TextContainer></ul>
			</nav>;
}

export default RentifyApp;