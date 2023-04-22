import { Component, useEffect, useState } from 'react'
import { CustomerService } from '../services/customer.service'
import { TransferFund } from '../components/TransferFund'
import MovesList from '../components/MovesList'
import { UserService } from '../services/user.service'
import { useNavigate, useParams } from 'react-router-dom'
import { CocktailService } from '../services/cocktail.service'
import { loadCustomers } from '../store/actions/customer.actions'
import defaultCocktail from '../assets/img/cocktail.jpeg'
import { useCocktailImg } from '../customHooks/useCocktailImg'
import CocktailRecipe from '../components/CocktailRecipe'
import { ReactComponent as Back } from '../assets/svg/Back.svg'

export function CustomerDetails(props) {
  const [customer, setCustomer] = useState(null)
  const [user, setUser] = useState(null)
  const [cocktail, setCocktail] = useState(null)
  const cocktailImg = useCocktailImg(customer)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadCustomer()
    loadUser()
    loadCocktail()
  }, [params.id])

  useEffect(() => {
    loadCocktail()
  }, [customer])

  async function loadCocktail() {
    if (!customer) return
    try {
      const cocktail = await CocktailService.getCocktail(customer.cocktail)
      console.log('cocktail', cocktail)
      setCocktail(cocktail)
    } catch (error) {
      console.log('error', error)
    }
  }

  async function loadCustomer() {
    const customerId = params.id
    try {
      const customer = await CustomerService.getCustomerById(customerId)
      setCustomer(customer)
    } catch (error) {
      console.log('error:', error)
    }
  }

  function loadUser() {
    const user = UserService.getUser()
    setUser(user)
  }

  function onBack() {
    navigate('/customer')
  }

  if (!customer) return <div className="loader"></div>
  return (
    <section className="customer-details">
      {cocktail ? (
        <section className="cocktail">
          <div
            className="cocktail-background"
            style={{
              backgroundImage: `url(${cocktailImg})`,
            }}
          ></div>
          <CocktailRecipe cocktail={cocktail} />
        </section>
      ) : (
        <div className="loader"></div>
      )}
      <section className="customer">
        <section className="customer-info">
          <div className="customer-avatar">
            <img
              src={`https://api.dicebear.com/6.x/micah/svg?seed=${customer._id}`}
            />
            <h3>{customer.name}</h3>
          </div>
          <table className="customer-drinks">
            <tbody>
              <tr>
                <td>Spirit</td>
                <td>{customer.spirit}</td>
              </tr>
              <tr>
                <td>Cocktail</td>
                <td> {customer.cocktail}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
      <button className="btn-back" onClick={onBack}>
        <Back />
        Back
      </button>
    </section>
  )
}
