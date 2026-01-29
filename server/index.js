const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const connectDB = require("./db/connection.js");

const app = express();

//* Middleswares
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());

//* Connecting to the database
connectDB();

//*Routes
app.get("/", (req, res) => {
  res.send("Hello from server");
});

//* Dynamically include routes
readdirSync("./routes").map((route) =>
  app.use("/api", require(`./routes/${route}`))
);

//* PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
