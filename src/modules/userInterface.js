export default class UserInterface {
  static displayScores() {
    const localData = Store.getScores();
    localData.forEach((s) => {
      UserInterface.addScores(s);
    });
  }

  static addScores(newScore) {
    const scoreBoard = document.getElementById('added-scores');
    const scoresTable = document.createElement('table');
    scoresTable.classList.add ('scores-table');
    scoreBoard.appendChild(scoresTable);
    const row = document.createElement('tr');
    row.classList.add('row');
    row.innerHTML = `
  <td class="name">${newScore.name}:</td>
  <td class="score">${newScore.score}</td>
  `;
    scoresTable.appendChild(row);
  }

  static clearFields() {
    const inputName = document.getElementById('name');
    const inputScore = document.getElementById('score');
    inputName.value = null;
    inputScore.value = null;
  }
}