import { CocktailService } from '../services/cocktail.service'
import { LineChart } from '../components/Chart'
import { useEffect, useState } from 'react'
import { loadCustomers } from '../store/actions/customer.actions'
import { useDispatch, useSelector } from 'react-redux'

export function StatisticsPage() {
  const dispatch = useDispatch()
  const customers = useSelector(
    (storeState) => storeState.customerModule.customers
  )
  const [spirits, setSpirits] = useState(null)

  useEffect(() => {
    dispatch(loadCustomers())
  }, [])
  useEffect(() => {
    loadSpirits()
  }, [customers])

  async function loadSpirits() {
    if (!customers) return
    try {
      const spirits = customers.reduce((obj, { spirit }) => {
        if (!obj[spirit]) obj[spirit] = 0
        obj[spirit]++
        return obj
      }, {})
      setSpirits(spirits)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <section className="statistics">
      <div>Statistics Page</div>
      {spirits && <LineChart spirits={spirits} />}
    </section>
  )
}
