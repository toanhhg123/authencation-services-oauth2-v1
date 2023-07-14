import express from 'express'
import useRouter from './routes'
import morganMiddleware from './middlewares/morganMiddleware'
import cors from 'cors'
import helmet from 'helmet'

async function BootStrap() {
    const app = express()

    // middleware
    app.use(helmet())
    app.use(
        cors({
            origin: '*'
        })
    )
    app.use(morganMiddleware)

    //router
    useRouter(app)

    const port = process.env.PORT
    app.listen(port, () => {
        console.log('app listening in port ' + port)
    })
}

export default BootStrap
