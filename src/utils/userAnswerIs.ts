/*
checks if the user's answer is in the incorrect array
when answer is in the incorrect array then return "incorrect"
else would be "correct"
*/

function userAnswerIs(userAnswer:string, incorrectAnswers:string[]) {
  const isAnswerIncorrect = incorrectAnswers.includes(userAnswer);
  const didAnswer = isAnswerIncorrect ? "incorrect" : "correct";
  return didAnswer;
}

export default userAnswerIs;