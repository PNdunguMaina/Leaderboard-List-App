// check local storage
export default class Store {
  static getScores() {
    let scores;
    if (localStorage.getItem('scores') === null) {
      scores = [];
    } else {
      scores = JSON.parse(localStorage.getItem('scores'));
    }

    return scores;
  }

  static addScores(score) {
    const localData = Store.getScores();
    localData.push(score);
    localStorage.setItem('scores', JSON.stringify(localData));
  }
}
