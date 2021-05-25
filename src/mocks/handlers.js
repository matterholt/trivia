
import { rest } from 'msw'

import data from "./mockdata"

export const handlers = [
 rest.get('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean', (req, res, ctx) => {
        return res( ctx.json({ results: data }))
 }),
    

]