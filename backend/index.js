const express = require("express");
const app = express();

require("dotenv").config();
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
app.use("/edit-account", require("./routes/updateUser.js"));

app.listen((port = 3001), () => {
    console.log(`Server running on http://localhost:${port}`);
});

console.log(process.env.MONGODB_URI);

const { MongoClient, ServerApiVersion } = require("mongodb");
const { Collection } = require("mongoose");
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log(Collection);
    client.close();
});
