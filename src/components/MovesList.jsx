import React from 'react'

export default function MovesList({ user, customerId }) {
  return (
    <section className="moves-list">
      <h2>Moves List</h2>
      <ul>
        {user.moves?.map((move, idx) => {
          if (move.toId === customerId) {
            return (
              <li className="move-item" key={idx}>
                <h1>{move.to}</h1>
                <h1>{move.amount}</h1>
              </li>
            )
          } else {
            return <h1 key={idx}>No moves have been made yet...</h1>
          }
        })}
      </ul>
    </section>
  )
}
