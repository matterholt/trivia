
interface userQuestionInputsProps {
  userDidAnswer: string;
  userQuestionInputs: {
    userDidAnswer: string,
    correctAnswer: string,
    question: string,
    questionId: number,
    userInputAnswer:string,
  }
}

function correctAnswerCount(userQuestionInputs:userQuestionInputsProps[]) {
    const userAnswers = userQuestionInputs
      .map((question) => {
        return question.userDidAnswer;
      })
        .filter((qCorrect) => qCorrect === "correct")
        .length;
    return userAnswers
}

export default correctAnswerCount;