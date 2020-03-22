const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
    content: {
        type: String,
        required: true,
      },
    tag: {
        type: String,
        required: true,
      },
    // group: { // each report belongs to a group. One to one relationship
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Group",
    //     required: true 
    // },
    group: {
      type: String,
      required: true,
    },
    owner: { // many reports belong to one user. Many to one relationship
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Report', reportSchema)