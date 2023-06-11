const mongoose = require("mongoose");
// const uri = "mongodb+srv://doshiheet2872003:GNZPbmCIXRU5NUj4@api-backend.bi9hcl8.mongodb.net/?retryWrites=true&w=majority";

const connectDB = (uri) => {
    console.log("connect database!");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
