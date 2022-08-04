import './style.css';
import Leaderboard from './modules/mainClassContainer.js';
import Store from './modules/localStorage.js';
import UserInterface from './modules/userInterface.js';

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;

  const score = document.querySelector('#score').value;

  if (name && score) {
    const leaderBoard = new Leaderboard(name, score);
    UserInterface.addScores(leaderBoard);
    Store.addScores(leaderBoard);
    UserInterface.clearFields(leaderBoard);
  }
});

document.addEventListener('DOMContentLoaded', UserInterface.displayScores);
