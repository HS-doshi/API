require("dotenv").config();
const express = require("express");
const router = require("./routes/products");
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products")

app.get("/", (req, res) => {
    res.send("Heet is a best logical react developer!!That's why his starting salary is 6.9 LPA. He got placement in well known IT company as a fresher due to his expertise and he cleared interview with successfully at GCET!");
});

// middleware or to set router
app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes! I'm connected.`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
// eOUJKsDT92PCIvXB
// GNZPbmCIXRU5NUj4
// mongodb + srv://doshiheet2872003:<password>@api-backend.bi9hcl8.mongodb.net/?retryWrites=true&w=majority