import './style.css';
import updateScores from './modules/update';
import clearFields from './modules/clearField';
import fetchScores from './modules/fetchScores';

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  if (name && score) {
    updateScores(name, score);
    clearFields();
  }
});

document.querySelector('#refresh').addEventListener('click', () => {
  document.location.reload();
  fetchScores();
});
fetchScores();
