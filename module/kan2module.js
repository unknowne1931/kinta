const mongoose = require('mongoose');

const kan02Schema = new mongoose.Schema({
    qno: Number,
    Question: String,
    img: {
        default : "none",
        type : String
      },
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    answer: String
});

module.exports = mongoose.model('Kan_dat_02', kan02Schema)