import './style.css';
import Leaderboard from './modules/mainClassContainer';
import Store from './modules/localStorage';
import UserInterface from './modules/userInterface';

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
