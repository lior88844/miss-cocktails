import React, { Component, useEffect } from 'react'
import { CustomerList } from '../components/CustomerList'
import { CustomerFilter } from '../components/CustomerFilter'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import useFormRegister from '../customHooks/useFormRegister'
import { ReactComponent as Add } from '../assets/svg/Add.svg'
import {
  loadCustomers,
  removeCustomer,
  setFilterBy,
} from '../store/actions/customer.actions'

export function CustomerPage(props) {
  const dispatch = useDispatch()
  const customers = useSelector(
    (storeState) => storeState.customerModule.customers
  )
  const filterBy = useSelector(
    (storeState) => storeState.customerModule.filterBy
  )

  useEffect(() => {
    dispatch(loadCustomers())
  }, [])

  async function onRemoveCustomer(customerId) {
    try {
      const res = dispatch(removeCustomer(customerId))
      console.log('res', res)
    } catch (error) {
      console.log('error', error)
    }
  }

  function onChangeFilter(filterBy) {
    dispatch(setFilterBy(filterBy))
    dispatch(loadCustomers())
  }

  if (!customers) return <div>Loading...</div>
  return (
    <section className="customer-index">
      <>
        <CustomerFilter filterBy={filterBy} onChangeFilter={onChangeFilter} />
        <section className="customer-add">
          <Add />
          <p>
            Add a new customer to the website to track and serve their favorite
            drinks {'>'}
          </p>
          <Link to="/customer/edit">
            <button>Add a new customer</button>
          </Link>
        </section>
        <CustomerList
          customers={customers}
          onRemoveCustomer={onRemoveCustomer}
        />
      </>
    </section>
  )
}
