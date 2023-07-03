const express = require("express")
const mongoose = require("mongoose")
const {config} = require("dotenv")
config()
const cors = require("cors")
const app = express()


app.use(express.json())
app.use(cors())


mongoose.connect(process.env.MONGODB_URL)
    .then(()=> console.log("MongoDb is connected"))
    .catch(()=> console.log("MongoDb is not connected"))

app.get("/", async(req, res)=>{
    // res.send("MERN stack")
    res.json("MERN stack")
})

const Products = require("./router/products")
const Blogs = require("./router/blogs")

app.use("/products", Products)
app.use("/blogs", Blogs)

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=> console.log(`${PORT} is listening`))

