import React, { Component, useState } from 'react'
import { UserService } from '../services/user.service'

export function TransferFund(props) {
  const [amount, setAmount] = useState(0)
  function onTransferCoins(ev) {
    ev.preventDefault()
    UserService.addMove(props.customer, amount)
    setAmount(amount)
  }
  function handleChange(target) {
    this.setState({ amount: target.value })
  }

  return (
    <section className="transfer-fund">
      <h2>Transfer Funds</h2>
      <div className="transfer-container">
        <h1>Transfer funds to {props.customer.name}</h1>
        <form onSubmit={onTransferCoins}>
          <label htmlFor="transfer">Amount:</label>
          <input
            onChange={handleChange}
            id="transfer"
            name="transfer"
            type="number"
            value={amount}
          />
          <button>Transfer</button>
        </form>
      </div>
    </section>
  )
}
