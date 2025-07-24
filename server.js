<<<<<<< HEAD
require("dotenv").config()
const app = require("./app")
=======
require("dotenv").config
const express = require ("express")
app = express()
>>>>>>> 917f0fea52fe173064ad4e1da1520ad91fd178d5
const dataBase = require("./database/database")

PORT = process.env.PORT || 5000


const startServer = async ()=>{
    await dataBase();
    app.listen(PORT, ()=>{
    console.log(`server is now listening on port ${PORT}`)
})   
}
startServer()
