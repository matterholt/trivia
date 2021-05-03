

function userAnswerIs(userAnswer:string, incorrectAnswers:string[]) {
  const isAnswerIncorrect = incorrectAnswers.includes(userAnswer);
  const didAnswer = isAnswerIncorrect ? "incorrect" : "correct";
  return didAnswer;
}

export default userAnswerIs;