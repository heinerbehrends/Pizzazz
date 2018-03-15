import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var letterDistribution = {e:12, a:9, i:9, o:8, n:6, r:6, t:6, l:4, s:4, u:4, d:4, g:3, b:2,
                          c:2, m:2, p:2, f:2, h:2, v:2, w:2, y:2, k:1, j:1, x:1, q:1, z:1};

function makeBagOfLetters (letterDistribution) {
  let bagOfLettersArray = [];
  for (let letter in letterDistribution) {
    for (let i = 0; i < letterDistribution[letter]; i++) {
      bagOfLettersArray.push(letter);
    }
  }
  return bagOfLettersArray;
}

const bagOfLetters = makeBagOfLetters(letterDistribution);

function makeRandomLetters(bagOfLetters, nrOfLetters) {
  let randomString = "";
  for (let i = 0; i < nrOfLetters; i++) {
    let randomIndex = Math.floor(Math.random() * bagOfLetters.length)
    randomString += bagOfLetters[randomIndex];
  }
  return randomString.toUpperCase();
}
const randomLetters = makeRandomLetters(bagOfLetters, 7);

function Letter(props) {
  return <img style={{width: 66 + 'px'}} src={'images/' + props.string[props.index] + '.jpg'}/>
}

function RandomLetters() {
  return (
    <div className="App">
    <Letter string={randomLetters} index='0'/>
    <Letter string={randomLetters} index='1'/>
    <Letter string={randomLetters} index='2'/>
    <Letter string={randomLetters} index='3'/>
    <Letter string={randomLetters} index='4'/>
    <Letter string={randomLetters} index='5'/>
    <Letter string={randomLetters} index='6'/>
    </div>
  );
}

export default RandomLetters;
