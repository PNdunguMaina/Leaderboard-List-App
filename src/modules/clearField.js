// clear all fields
const clearFields = () => {
  const inputName = document.getElementById('name');
  const inputScore = document.getElementById('score');
  inputName.value = null;
  inputScore.value = null;
};
export default clearFields;