// check local storage
export default class Store {
  static getScores() {
    let scores;
    localStorage.getItem('scores') === null
      ? (scores = [])
      : (scores = JSON.parse(localStorage.getItem('scores')));
    return scores;
  }
  static addScores(score) {
    const localData = Store.getScores();
    localData.push(score);
    localStorage.setItem('scores', JSON.stringify(localData));
  }
}