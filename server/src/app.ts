import express, { Application, json } from 'express'
import dotenv from 'dotenv'
import apiRoutes from './routes/index'
import db from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {
	ErrorMiddleware,
	notFoundMiddleware,
} from './middlewares/errors.middleware'

dotenv.config()

const PORT = process.env.PORT || 3000
const app: Application = express()

app.use(json())
app.use(cookieParser())
app.use(
	cors({
		origin: process.env.CLIENT_URL as string,
		credentials: true,
		methods: ['POST', 'GET', 'PUT', 'DELETE'],
		maxAge: 3600,
	})
)

app.use('/api', apiRoutes)

app.use(notFoundMiddleware)
app.use(ErrorMiddleware)

const main = async () => {
	try {
		await db
			.connect(process.env.DB_URL as string)
			.then(() => console.log(`Connection to the database is successful.`))

		app.listen(PORT, () => {
			console.log(`The server was running on port ${PORT}...`)
		})
	} catch (error: any) {
		console.error(error.message)
	}
}

main()
