const mongoose = require('mongoose')

const gallerySchema = mongoose.Schema({
    image: {
        type: String
    },

    // author: {
    //     ref: 'Shelter',
    //     type: mongoose.Schema.Types.ObjectId
    // }
})

const Gallery = mongoose.model('Gallery', gallerySchema)

module.exports = Gallery