interface IQuestion{
    question: string,
    correct_answer: string,
    users_answer: string
}

type ContextType = {
  answerQs: IQuestion[]
  saveTodo: (answerQ: IQuestion) => void
}