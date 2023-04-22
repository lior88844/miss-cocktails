export const CustomerService = {
	getCustomers,
	getCustomerById,
	removeCustomer,
	saveCustomer,
	getEmptyCustomer,
}

const customers = [
	{
		_id: '5a56640269f443a5d64b32ca',
		name: 'Ochoa Hyde',
		spirit: 'Vodka',
		cocktail: 'Bellini Martini',
	},
	{
		_id: '5a5664025f6ae9aa24a99fde',
		name: 'Hallie Mclean',
		spirit: 'Gin',
		cocktail: 'Gin And Tonic',
	},
	{
		_id: '5a56640252d6acddd183d319',
		name: 'Parsons Norris',
		spirit: 'Whiskey',
		cocktail: 'Old Fashioned',
	},
	{
		_id: '5a566402ed1cf349f0b47b4d',
		name: 'Rachel Lowe',
		spirit: 'rum',
		cocktail: 'Negroni',
	},
	{
		_id: '5a566402abce24c6bfe4699d',
		name: 'Dominique Soto',
		spirit: 'tequila',
		cocktail: 'Daiquiri',
	},
	{
		_id: '5a566402a6499c1d4da9220a',
		name: 'Shana Pope',
		spirit: 'tequila',
		cocktail: 'Dry Martini',
	},
	{
		_id: '5a566402f90ae30e97f990db',
		name: 'Faulkner Flores',
		spirit: 'vodka',
		cocktail: 'Manhattan',
	},
	{
		_id: '5a5664027bae84ef280ffbdf',
		name: 'Holder Bean',
		spirit: 'vodka',
		cocktail: 'Aperol Spritz',
	},
	{
		_id: '5a566402e3b846c5f6aec652',
		name: 'Rosanne Shelton',
		spirit: 'gin',
		cocktail: 'Mojito',
	},
	{
		_id: '5a56640272c7dcdf59c3d411',
		name: 'Pamela Nolan',
		spirit: 'rum',
		cocktail: 'Bloody Mary',
	},
	{
		_id: '5a5664029a8dd82a6178b15f',
		name: 'Roy Cantu',
		spirit: 'tequila',
		cocktail: 'Moscow Mule',
	},
	{
		_id: '5a5664028c096d08eeb13a8a',
		name: 'Ollie Christian',
		spirit: 'rum',
		cocktail: 'Penicillin',
	},
	{
		_id: '5a5664026c53582bb9ebe9d1',
		name: 'Nguyen Walls',
		spirit: 'Whiskey',
		cocktail: 'Whiskey Sour',
	},
	{
		_id: '5a56640298ab77236845b82b',

		name: 'Glenna Santana',
		spirit: 'vodka',
		cocktail: 'Mai Tai',
	},
	{
		_id: '5a56640208fba3e8ecb97305',
		name: 'Malone Clark',
		spirit: 'Whiskey',
		cocktail: 'Boulevardier',
	},
	{
		_id: '5a566402abb3146207bc4ec5',
		name: 'Floyd Rutledge',
		spirit: 'vodka',
		cocktail: 'Amaretto Sour',
	},
	{
		_id: '5a56640298500fead8cb1ee5',
		name: 'Grace James',
		spirit: 'Gin',
		cocktail: 'Gin Fizz',
	},
	{
		_id: '5a56640243427b8f8445231e',
		name: 'Tanner Gates',
		spirit: 'rum',
		cocktail: 'Bellini',
	},
	{
		_id: '5a5664025c3abdad6f5e098c',
		name: 'Lilly Conner',
		spirit: 'rum',
		cocktail: 'Pina Colada',
	},
]

function sort(arr) {
	return arr.sort((a, b) => {
		if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
			return -1
		}
		if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
			return 1
		}

		return 0
	})
}

function getCustomers(filterBy = null) {
	return new Promise((resolve, reject) => {
		var customersToReturn = customers
		if (filterBy) {
			customersToReturn = filter(filterBy)
		}
		resolve(sort(customersToReturn))
	})
}

function getCustomerById(id) {
	return new Promise((resolve, reject) => {
		const customer = customers.find(customer => customer._id === id)
		customer ? resolve(customer) : reject(`Customer id ${id} not found!`)
	})
}

function removeCustomer(id) {
	return new Promise((resolve, reject) => {
		const index = customers.findIndex(customer => customer._id === id)
		if (index !== -1) {
			customers.splice(index, 1)
		}

		resolve(customers)
	})
}

function _updateCustomer(customer) {
	return new Promise((resolve, reject) => {
		const index = customers.findIndex(c => customer._id === c._id)
		if (index !== -1) {
			customers[index] = customer
		}
		resolve(customer)
	})
}

function _addCustomer(customer) {
	return new Promise((resolve, reject) => {
		customer._id = _makeId()
		customers.push(customer)
		resolve(customer)
	})
}

function saveCustomer(customer) {
	return customer._id ? _updateCustomer(customer) : _addCustomer(customer)
}

function getEmptyCustomer() {
	return {
		name: '',
		spirit: '',
		cocktail: '',
	}
}

function filter(filterBy) {
	const nameRegex = new RegExp(filterBy.name, 'i')
	const cocktailRegex = new RegExp(filterBy.cocktail, 'i')
	return customers.filter(customer => nameRegex.test(customer.name) && cocktailRegex.test(customer.cocktail))
}

function _makeId(length = 10) {
	var txt = ''
	var possible =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	for (var i = 0; i < length; i++) {
		txt += possible.charAt(
			Math.floor(Math.random() * possible.length)
		)
	}
	return txt
}
