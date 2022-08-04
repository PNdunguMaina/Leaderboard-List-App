import scoresUrl from './ApiUrl.js';

//  display scores on the UI
const showScores = (allScores) => {
  let scores = document.getElementById('added-scores');
  let table = `<table class="scores-table">`;
  allScores.forEach((player) => {
    table += `<tr class="row"> 
    <td class="name">${player.user}:</td>
    <td class="score">${player.score}</td>
    </tr>`;
  });
  table += `</table>`;
  scores.innerHTML = table;
};

// fetch scores list from the API
const fetchScores = async () => {
  await fetch(scoresUrl)
    .then((data) => data.json())
    .then((scores) => showScores(scores.result));
};
export default fetchScores;
