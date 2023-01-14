const mongoose = require('mongoose');
const conn = mongoose.connect("mongodb://localhost:27017/motihari", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connected successfully");
}).catch((err) => {
    console.log(err);
})

module.exports = conn;