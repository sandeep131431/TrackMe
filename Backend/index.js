const express = require("express");
const cors = require("cors");

const locationRoutes = require("./routes/locationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", locationRoutes);

app.post("/api/link", (req, res) => {

    const id = Math.random().toString(36).substring(2, 10);

    res.json({
        id,
        url: `http://localhost:5173/track/${id}`
    });

});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});