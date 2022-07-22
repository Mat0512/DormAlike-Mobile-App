const usersData = require("./models/user.js");
const express = require("express");
const app = express();

//middleware body parser
// place this parser before the other route hundlers or otherwise contents in the body cant be used.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//post that has the availability status?
app.get("/", (req, res) => {
    res.send(accomodationData);
});

app.use("/accomodations", require("./routes/api/accomodations.js"));
app.use("/signup", require("./routes/signup.js"));

app.use("/login", require("./routes/login.js"));

app.listen((port = 3001), () => {
    console.log(`Server running on http://localhost:${port}`);
});
