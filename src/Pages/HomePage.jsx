import React, { Component } from 'react'
import { UserService } from '../services/user.service'
import { CocktailService } from '../services/cocktail.service'
import videoFile from '../assets/video/homepage.mp4'
export class HomePage extends Component {
  state = {
    user: null,
    bitcoinRate: null,
  }
  componentDidMount() {
    this.loadUser()
    this.loadBitcoinRate()
  }
  loadUser = async () => {
    try {
      const user = await UserService.getUser()
      this.setState({ user })
    } catch (err) {
      console.log('err:', err)
    }
  }
  loadBitcoinRate = async () => {
    try {
      const bitcoinRate = await CocktailService.getRate()
      this.setState({ bitcoinRate })
    } catch (err) {
      console.log('err', err)
    }
  }
  render() {
    const { user, bitcoinRate } = this.state
    return (
      <section className="homepage">
        <div className="landing-page">
          <h1>
            Rev Up Your Bar Business with Our Customer Database and Tailored
            Cocktail Recipes!
          </h1>
          <video controls autoplay loop>
            <source src={videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <section className="moves-wrapper">
          <div className="user">
            <h3>{user?.name}</h3>
            {user && <h2>{bitcoinRate * user.coins}</h2>}
          </div>
          <section className="moves-list">
            <h1>Your last 3 moves</h1>
            {user?.moves.map((move, idx) => {
              return (
                <div className="move" key={idx}>
                  <h1>To: {move.to}</h1>
                  <h1>Amount: {move.amount}</h1>
                </div>
              )
            })}
          </section>
        </section>
      </section>
    )
  }
}

export default HomePage
