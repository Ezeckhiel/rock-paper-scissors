import React from 'react';

class Score extends React.Component {
  render() {
    return (
      <div className="score">
        <p>The score is </p>
        <div className='game-info'>
          <div className='game-wins'>
            Wins: {' '}
            <span className='wins-color'>{this.props.wins}</span>
          </div>
          <div className='game-draws'>
            Draws: {' '}
            <span className='draws-color'>{this.props.draws}</span>
          </div>
          <div className='game-losses'>
            Losses: {' '}
            <span className='losses-color'>{this.props.losses}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Score;
