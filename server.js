import dotenv from "dotenv"
import connectDB from "./src/db/index.js"

import { app } from "./src/App.js"
console.log(process.env.PORT)

dotenv.config({
    path:"./env"
})

connectDB()
.then(()=>{
  



    app.listen(process.env.PORT ,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)

    })

})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ", err)
})