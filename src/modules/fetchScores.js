import scoresUrl from './ApiUrl';
// fetch scores list from the API
const fetchScores = async () => {
  await fetch(scoresUrl)
    .then((data) => data.json())
    .then((scores) => showScores(scores.result));
};

//  display scores on the UI
const showScores = (allScores) => {
  allScores.forEach((player) => {
    document.getElementById('added-scores').innerHTML += `
    <table class="scores-table">
    <tr class="row">
    <td class="name">${player.user}</td>
    <td class="score">${player.score}</td>
    </tr>
    </table>`;
  });
};

export default fetchScores;
