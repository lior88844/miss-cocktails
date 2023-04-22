import { CustomerService } from "../../services/customer.service"
import { REMOVE_CUSTOMER, SET_FILTER_BY, SET_CUSTOMERS, UPDATE_CUSTOMER, ADD_CUSTOMER } from "../reducers/customer.reducer"

export function loadCustomers() {
    return async (dispatch, getState) => {
        try {
            const customers = await CustomerService.getCustomers(getState().customerModule.filterBy)
            const action = {
                type: SET_CUSTOMERS,
                customers
            }
            dispatch(action)
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function removeCustomer(customerId) {
    return async (dispatch) => {
        try {
            await CustomerService.removeCustomer(customerId)
            const action = { type: REMOVE_CUSTOMER, customerId }
            dispatch(action)
            return 'Removed!'
        } catch (error) {
            console.log('error:', error)
        }
    }
}
export function saveCustomer(customerId) {
    return async (dispatch) => {
        try {
            await CustomerService.saveCustomer(customerId)
            if (customerId) {
                const action = { type: UPDATE_CUSTOMER, customerId }
                dispatch(action)
                return 'updated!'
            } else {
                const action = { type: ADD_CUSTOMER, customerId }
                dispatch(action)
                return 'Added!'
            }
        } catch (error) {
            console.log('error:', error)
        }
    }
}

export function setFilterBy(filterBy) {
    return (dispatch) => {
        dispatch({ type: SET_FILTER_BY, filterBy })
    }
}