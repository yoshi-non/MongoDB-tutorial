const express = require("express")
const app = express()
const mongoose = require("mongoose")

const foodRouter = require("./routes/foodRoutes")

app.use(foodRouter)

mongoose.connect(process.env.MON_URL)
.then(() => console.log("データベース接続に成功しました。"))
.catch((err) => console.log(err))

app.listen(3000, () => {
    console.log("サーバーが起動しました")
})