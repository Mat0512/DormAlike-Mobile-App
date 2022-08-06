require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./configs/databaseConnection.js");
const verifyToken = require("./middleware/authMiddleware.js");
const errorHandler = require("./middleware/errorMiddleware.js");
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 3001;

app.use(cors(require("./configs/corsOption")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/signup", require("./routes/signup.js"));
app.use("/login", require("./routes/login.js"));
app.use("/accomodations", require("./routes/api/accomodations.js"));

//app.use(verifyToken);

app.use("/updatePreference", require("./routes/updatePreference.js"));
app.use("/getPreference", require("./routes/getPreference.js"));
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/views/index.html"));
    //__dirname : It will resolve to your project folder.
});
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
