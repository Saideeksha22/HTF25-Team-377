const express = require("express")
const {connection} = require("./db")
const {userRouter}= require("./routes/user.route")
const { eventRouter } = require("./routes/event.route");
const cors = require('cors');
const port = process.env.PORT || 8080

const app = express()
app.use(express.json());

app.use(cors());

app.use("/user",userRouter)
app.use("/event",eventRouter)

app.get("/",(req,res)=>{
res.send("Hi my name is khan.")
})

 app.listen(port,async()=>{
     try {
         await connection
         console.log("Connected to the DB");
         console.log(`Server is Running on http://localhost:${port}`);
     } catch (error) {
         console.log(error);
     }
 })