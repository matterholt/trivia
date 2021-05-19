import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import data from './mockdata'

import App from '../App'

const server = setupServer(
    rest.get('/greeting', (req, res, ctx) => {
        return res(ctx.json(data))
    })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Trivia Home Page', () => {
    render(<App />)
    expect(screen.getByText(/Trivia Challenge/i)).toBeInTheDocument()
    expect(screen.getByText(/True or False/i)).toBeInTheDocument()
    expect(screen.getByText(10)).toBeInTheDocument()
    expect(screen.getByText(/100%/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Begin' })).toBeInTheDocument()
})

test('Trivia Waiting for Data',() => {
        render(<App />)
        fireEvent.click(
            screen.getByRole('button', { name: 'Begin' })
        )
    expect(screen.getByText(/Getting Questions/i)).toBeInTheDocument()
}
)
test('Trivia question', async() => {
    render(<App />)
    fireEvent.click(screen.getByRole('button', { name: 'Begin' }))
    
    await waitFor(() => screen.debug())
})