import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { CocktailService } from '../services/cocktail.service'
import { ReactComponent as Trash } from '../assets/svg/Trash.svg'
import { ReactComponent as Edit } from '../assets/svg/Edit.svg'
import defaultCocktail from '../assets/img/cocktail.jpeg'
import { useCocktailImg } from '../customHooks/useCocktailImg'
export function CustomerPreview({ customer, onRemoveCustomer }) {
  const cocktailImg = useCocktailImg(customer)
  const navigate = useNavigate()

  {
    return (
      <Link to={`/customer/${customer._id}`} className="customer-preview card">
        <div className="card-bcg"></div>
        <div className="card-content">
          <section className="cocktail flex">
            <img src={cocktailImg} />
            <h1>{customer.cocktail}</h1>
          </section>
          <section className="customer flex">
            <section className="info">
              <img
                src={`https://api.dicebear.com/6.x/micah/svg?seed=${customer._id}`}
              />
              <h2>{customer.name}</h2>
            </section>
          </section>
          <section className="actions flex">
            <div class="remove">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  onRemoveCustomer(customer._id)
                }}
              >
                <Trash />
              </button>
            </div>
            <div class="edit">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                  navigate(`/customer/edit/${customer._id}`)
                }}
              >
                <Edit />
              </button>
            </div>
          </section>
        </div>
      </Link>
    )
  }
}
