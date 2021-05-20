import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import data from './mockdata'

import QuizQuestion from '../components/pages/QuizQuestion'

const server = setupServer(
    rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.json(data))
    })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Trivia Home Page', () => {

})


