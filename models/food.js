const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    calories: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0) throw new Error("マイナスのカロリーは存在しません。")
        }
    }
})

const food = mongoose.model("food", foodSchema)

module.exports = food


