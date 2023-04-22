import React, { Component, useEffect, useState } from 'react'
import { useFormRegister } from '../customHooks/useFormRegister'
import { ReactComponent as Search } from '../assets/svg/Search.svg'
export function CustomerFilter({ filterBy, onChangeFilter }) {
  const { cocktail, name } = filterBy
  const [register] = useFormRegister(filterBy, onChangeFilter)
  const [selectedOption, setSelectedOption] = useState('name') // add state for selected option
  useEffect(() => {}, [])
  if (!filterBy) return <div>Loading...</div>
  return (
    <section className="customer-filter">
      <form className="filter-form">
        <section className="input-wrapper">
          <Search className="search svg" />
          <input {...register(selectedOption)} />
        </section>
        <div className="select-wrapper">
          <select onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="cocktail">Cocktail</option>
            <option value="name">Customer</option>
          </select>
        </div>
      </form>
    </section>
  )
}
