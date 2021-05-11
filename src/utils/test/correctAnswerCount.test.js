import correctAnswerCount from '../correctAnswerCount'

const mocData = [
    {
        userDidAnswer: 'incorrect',
        correctAnswer: 'True',
        question: 'Some random question 1 that is not false',
        questionId: 0,
        userInputAnswer: 'False',
    },
    {
        userDidAnswer: 'correct',
        correctAnswer: 'True',
        question: 'Some random question 2 that is not false',
        questionId: 1,
        userInputAnswer: 'True',
    },
    {
        userDidAnswer: 'correct',
        correctAnswer: 'True',
        question: 'Some random question 2 that is not false',
        questionId: 1,
        userInputAnswer: 'True',
    },
]

test('correct answer amount', () => {
    expect(correctAnswerCount(mocData)).toBe(2)
})
