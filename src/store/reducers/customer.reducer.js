
export const SET_CUSTOMERS = 'SET_CUSTOMERS'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'
export const SET_FILTER_BY = 'SET_FILTER_BY'

const INITIAL_STATE = {
    customers: null,
    filterBy: {
        name: '',
        phone: '',
    }
}

export function customerReducer(state = INITIAL_STATE, action = {}) {

    switch (action.type) {
        case SET_CUSTOMERS:
            return {
                ...state,
                customers: action.customers
            }
        case ADD_CUSTOMER:
            return {
                ...state,
                customers: [...state.customers, action.customer]
            }
        case REMOVE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.filter(customer => customer._id !== action.customerId)
            }
        case UPDATE_CUSTOMER:
            return {
                ...state,
                customers: state.customers.map(customer => customer._id === action.customer._id ? action.customer : customer)
            }
        case SET_FILTER_BY:
            return {
                ...state,
                filterBy: { ...action.filterBy }
            }

        default:
            return state;
    }
}