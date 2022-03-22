const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
require('./db/mongoose')
const todoRoutes = require('./routes/todo-routes')
const userRoutes = require('./routes/user-routes')
const errorRoutes = require('./routes/error-routes')
let cookieParser = require('cookie-parser')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors({
  origin: 'http://localhost',
  credentials: true
}))

app.use(cookieParser())

app.use(helmet())
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
  }
}))

app.get('/healthz', (req, res) => res.send("Server is healthy"))

app.use(todoRoutes)
app.use(userRoutes)
app.use(errorRoutes)

app.listen(port, () => {
  console.log('Todo server is up on port ' + port)
})

