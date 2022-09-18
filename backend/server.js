const express = require('express')
const app = express()

const mainRouters = require('./routes/mainRoutes')

require("dotenv").config({ path: "./config/.env" });


app.use('/', mainRouters)

app.listen(process.env.PORT, ()=>{
  console.log(`Server is running in PORT: ${process.env.PORT}`)
})