import React from 'react';

class Player extends React.Component {

  render() {
    return (
      <div className="player">
      <p>{this.props.weapon}</p>
        <img src="./rock.png" alt="Rock" onClick={() => {this.props.onWeaponSelect("rock")}} className={this.props.weapon === "rock" ? "show" : this.props.weapon ? "hide" : "show"}/>
        <img src="./paper.png" alt="Paper" onClick={() => {this.props.onWeaponSelect("paper")}} className={this.props.weapon === "paper" ? "show": this.props.weapon ? "hide" : "show" }/>
        <img src="./scissor.png" alt="Scissor" onClick={() => {this.props.onWeaponSelect("scissor")}} className={this.props.weapon === "scissor" ? "show": this.props.weapon ? "hide" : "show"}/>
      </div>
    );
  }
}

export default Player;
