import React, { Component } from 'react'
import { connect } from 'react-redux'
import Letter from './Letter'
import { replaceLetter } from '../scrabbleLogic/gameLogic'
import { randomLettersAction, replaceLetterAction, showValidAction } from '../actions'


class RandomLetters extends Component {
  render() {
    const sevenLetters = [];
    for (let i = 0; i < 7; i++) {
      sevenLetters.push(
        <Letter string={ this.props.randomLetters }
        index={i} parent='randomLetters' key={i}
        replaceLetter={ replaceLetter } replaceLetterAction={ replaceLetterAction }
        showValidAction={ showValidAction } />
        )
    }
    return (
      <div>
        <span className="border-bottom border-secondary d-inline-block">
          {sevenLetters}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { randomLetters: state.randomLetters };
}

const mapDispatchToProps = dispatch => {
  return { newRandomLetters: (string) => dispatch(randomLettersAction(string))   }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomLetters);
