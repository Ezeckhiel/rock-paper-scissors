import React from 'react';
import './App.css';
import Computer from './components/Computer'
import Score from './components/Score'
import Player from './components/Player'

const weapons = ["rock", "paper", "scissor"]
const winCondition = {
'rock': 'scissor',
'scissor': 'paper',
'paper': 'rock',
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      wins: 0,
      losses: 0,
      draws: 0,
      weaponPlayer : '',
      weaponCpu : '',
      isRigged: Boolean(false),
      currentGameResult: null
    }
  }

  getResult = (weaponPlayer, weaponCpu) => {
    if (weaponPlayer === weaponCpu) return 'draws'
    if (weaponCpu === winCondition[weaponPlayer]) return 'wins';
    else return 'losses';
  }

  getRandomWeapon = () => {
    return weapons[Math.floor(Math.random() * weapons.length)]
  }

  getWinningWeapon = (weaponPlayer) => {
    return Object.keys(winCondition).find(key => winCondition[key] === weaponPlayer);
  }

  selectWeapon = weaponPlayer => {
      const weaponCpu = this.state.isRigged ? this.getWinningWeapon(weaponPlayer) : this.getRandomWeapon();
      const result = this.getResult(weaponPlayer, weaponCpu);

      this.setState((prevState) => {
        if (result === 'wins')
          return { wins: prevState[result] + 1 }
        else if (result === 'draws')
          return { draws: prevState[result] + 1 }
        else if (result === 'losses')
          return { losses: prevState[result] + 1 }
      });

      this.setState({currentGameResult: result, weaponPlayer: weaponPlayer, weaponCpu: weaponCpu});
  }

  rigTheGame = () => {
    this.setState(prevState => {
      return {
        isRigged: !prevState.isRigged
      }
    })
  }

  resetGame = () => {
    this.setState({currentGameResult: null, weaponPlayer: '', weaponCpu: ''})
  }

  render() {
    const buttonLabel = (this.state.wins > 0 || this.state.losses > 0 || this.state.draws > 0) ? "again !" : "!";

    return (
        <div className="App">
          <header className="App-header">
            Rock Paper Scissor
          </header>
          <input type="checkbox" onClick={this.rigTheGame} className="rigIt"/>Rig the game
          <Score
            wins={this.state.wins}
            losses={this.state.losses}
            draws={this.state.draws}
          />

          <div className="Game-container">
            <Player onWeaponSelect={this.selectWeapon} weapon={this.state.weaponPlayer} />

            <div className="computer">
              <img src={`./${this.state.weaponCpu}.png`} alt={this.state.weaponCpu}/>
              <p>{this.state.weaponCpu}</p>
            </div>
          </div>

          <button className='replay' onClick={this.resetGame}>Play {buttonLabel}</button>
      </div>
    )
  }



}

export default App;
