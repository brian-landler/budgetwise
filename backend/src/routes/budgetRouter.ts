import { Router } from "express"

const router = Router()

router.get('/', (res, req) => {
    console.log('From /api/budgets')
})

export default router