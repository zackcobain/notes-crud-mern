const mongoose = require("mongoose");


mongoose.set('strictQuery', false)
mongoose.connect('Your URI', {useNewUrlParser: true, useUnifiedTopology: true}).then(
    console.log("Connected")
)

module.exports = mongoose;