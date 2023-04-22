import React, { useEffect, useState } from 'react'

export default function CustomerRecipe({ cocktail }) {
  if (cocktail)
    return (
      <div className="cocktail-recipe">
        <h1>{cocktail.name}</h1>
        <p>{cocktail.instructions}</p>
        <ul>
          {cocktail.ingredients.map((ingredient) => (
            <li className="ingredient">
              <article>{ingredient.measure}</article>
              <article>{ingredient.ingredient}</article>
            </li>
          ))}
        </ul>
      </div>
    )
}
