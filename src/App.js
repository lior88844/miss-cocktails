
import React, { Component } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage'
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import { CustomerPage } from './Pages/CustomerPage'
import { CustomerDetails } from './Pages/CustomerDetailsPage';
import { CustomerEdit } from './Pages/CustomerEdit';
import { StatisticsPage } from './Pages/StatisticsPage';
import SignupPage from './Pages/SignupPage';
import './assets/scss/global.scss'


class App extends Component {

	render() {
		return (
			<section className="main-app" >
				<Router>
					<AppHeader />
					<main className="container">
						<Routes>
							<Route path="/customer/edit/:id?" element={<CustomerEdit />} />
							<Route path="/customer/:id" element={<CustomerDetails />} />
							<Route path="/customer" element={<CustomerPage />} />
							<Route path="/signup" element={<SignupPage />} />
							<Route path="/statistics" element={<StatisticsPage />} />
							<Route path="/" element={<HomePage />} />
						</Routes>
					</main>
					<AppFooter />
				</Router>
			</section>
		)
	}
}

export default App
