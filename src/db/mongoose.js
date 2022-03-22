const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
  minPoolSize: 10,
  serverSelectionTimeoutMS: 25000
})

mongoose.connection.on('connected', () => console.log('Database connected'))
mongoose.connection.on('error', () => console.log('Database error'))