require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./configs/databaseConnection.js");
const verifyToken = require("./middleware/authMiddleware.js");
const errorHandler = require("./middleware/errorMiddleware.js");

const port = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/signup", require("./routes/signup.js"));
app.use("/login", require("./routes/login.js"));
app.use(verifyToken);
app.use("/accomodations", require("./routes/api/accomodations.js"));
app.use("/editAccount", require("./routes/updateUser.js"));
app.use("/addAccomodation", require("./routes/addAccomodation.js"));
app.use("/editAccomodation", require("./routes/editAccomodation.js"));
app.use("/deleteAccomodation", require("./routes/deleteAccomodation.js"));
app.all("*", (req, res) => res.status(404).json({ error: "not found" }));
app.use(errorHandler);

connectDB();
app.listen(port, () => {
    console.log(
        `database connected, server running on http://localhost:${port}`
    );
});
