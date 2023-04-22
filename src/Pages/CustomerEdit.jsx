import React, { useEffect, Component } from 'react'
import { CustomerService } from '../services/customer.service'
import { useForm } from '../customHooks/useForm'
import { useNavigate, useParams } from 'react-router-dom'
import defaultCustomer from '../assets/img/user.png'
export function CustomerEdit(props) {
  const [customer, handleChange, setCustomer] = useForm(
    CustomerService.getEmptyCustomer()
  )

  const params = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    loadCustomer()
  }, [])

  async function onSaveCustomer(ev) {
    ev.preventDefault()
    try {
      await CustomerService.saveCustomer({ ...customer })
      navigate('/customer')
    } catch (err) {
      console.log('err', err)
    }
  }

  async function loadCustomer() {
    const customerId = params.id
    if (customerId) {
      try {
        const customer = await CustomerService.getCustomerById(customerId)
        setCustomer(customer)
      } catch (err) {
        console.log('err', err)
      }
    }
  }

  const { name, cocktail, spirit, _id } = customer
  const customerStyle = {
    backgroundImage: _id
      ? `url(https://api.dicebear.com/6.x/micah/svg?seed=${_id})`
      : `url(${defaultCustomer})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  return (
    <section className="customer-edit flex">
      <section className="customer-edit-wrapper">
        <h3>{customer ? 'Edit' : 'Add new'} customer:</h3>
        <div className="customer-img" style={customerStyle}></div>
        <form className="customer-edit-form" onSubmit={onSaveCustomer}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={name}
            placeholder="What's his name?"
          />

          <label htmlFor="spirit">Spirit:</label>
          <input
            type="tel"
            name="spirit"
            id="spirit"
            placeholder="What's his hard liquor?"
            onChange={handleChange}
            value={spirit}
          />
          <label htmlFor="cocktail">Cocktail:</label>
          <input
            type="cocktail"
            name="cocktail"
            id="cocktail"
            placeholder="What's his favorite cocktail?"
            onChange={handleChange}
            value={cocktail}
          />
          <input type="submit"></input>
        </form>
      </section>
    </section>
  )
}
