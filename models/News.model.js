const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
    title: String,
    description: String,
    author: String,
    date: {
        type: Date
    }
})

const News = mongoose.model('News', newsSchema)

module.exports = News