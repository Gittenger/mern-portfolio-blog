const dotenv = require('dotenv')
dotenv.config({ path: './.env' })
const mongoose = require('mongoose')

process.on('uncaughtException', err => {
	console.log(err.name, err.message)
	console.log('Uncaught exception! 💥 Shutting down...')
	process.exit(1)
})

const app = require('./app')

const db = process.env.DB_CONNECTION.replace(
	/<PASSWORD>/,
	process.env.DB_PW
).replace(/<DB_NAME>/, process.env.DB_NAME)

mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(
		() => console.log('database connected successfully'),
		err => console.log(err)
	)

const port = process.env.PORT | 8080
const server = app.listen(port, () => {
	console.log(`server is running on port ${port}`)
})

process.on('unhandledRejection', err => {
	console.log(err.name, err.message)
	console.log('UNHANDLED REJECTION! 💥 Shutting down...')
	//close server, then end application
	server.close(() => {
		process.exit(1)
	})
})
