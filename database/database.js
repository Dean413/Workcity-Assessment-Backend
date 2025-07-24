const mongoose = require("mongoose")
require("dotenv").config()

const dataBase = async (req, res)=>{
    try {
<<<<<<< HEAD
      await mongoose.connect(process.env.MONGO_URL)    
    } catch (e) {
       console.error("something went wrong", e.message)
       process.exit(1)   
    }
}
=======
       await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected")
        
    } catch (e) {
       console.error("something went wrong")
       process.exit(1)   
    }
}

>>>>>>> 917f0fea52fe173064ad4e1da1520ad91fd178d5
module.exports = dataBase