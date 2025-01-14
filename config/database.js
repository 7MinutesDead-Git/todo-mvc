const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const mongooseDB = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log(`MongoDB Connected: ${mongooseDB.connection.host}`)

  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
