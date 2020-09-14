import React from 'react';

class Computer extends React.Component {
    constructor() {
      super()
      this.state = {
        weaponCpu : ""
      }
      this.selectWeapon = this.selectWeapon.bind(this);
    }



    render () {
      const weapons = ["rock", "paper", "scissor"]
      const i = Math.floor(Math.random() * 2) + 0
      return (
        <div className="computer">
        <img src={() => { return this.selectWeapon(weapons[i])}} alt={weapons[i]}/>
        <img src={`./${weapons[i]}.png`} alt={weapons[i]}/>
          <p>{weapons[i]}</p>
        </div>
      )
    }
}

export default Computer;
