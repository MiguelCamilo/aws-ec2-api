import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()

const port = 4041

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This route works')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})