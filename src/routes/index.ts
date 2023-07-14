import { Express } from 'express'
import roleRouter from './roleRoute'

export default function useRouter(app: Express) {
    app.use('/api/v1/role', roleRouter)
}
