import userAnswerIs from '../userAnswerIs'

test('user answer is not in incorrect answer', () => {
    expect(userAnswerIs('True', ['False'])).toBe('correct')
})
test('user answer is incorrect', () => {
    expect(userAnswerIs('False', ['False'])).toBe('incorrect')
})
