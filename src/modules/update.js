import scoresUrl from './ApiUrl.js';

const updateScores = async (user, score) => {
  await fetch(scoresUrl, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  }).then((result) => result.json());
};
export default updateScores;
