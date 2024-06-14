const mongoose = require('mongoose')

const ConnectDB = async() => {
   mongoose.connect("mongodb://127.0.0.1:27017/E-Comm");
}

module.exports = ConnectDB;