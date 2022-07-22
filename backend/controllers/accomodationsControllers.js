const accomodation = {
    data: require("../models/accomodation.js"),
    setData: function (data) {
        this.data = data;
    },
};

const getAllAccomodations = (req, res) => {
    res.status(200);
    res.json(accomodation);
};

const getAccomodations = (req, res) => {
    const matchedAccomodation = accomodation.filter(
        (accomodation) => req.params.id == accomodation.id
    );

    if (matchedAccomodation.length !== 0) {
        res.status(200);
        res.send(matchedAccomodation);
    } else {
        res.status(404);
        res.send(matchedAccomodation);
    }
};

const addAccomodations = (req, res) => {};

const editAccomodations = (req, res) => {};
const deleteAccomodations = (req, res) => {};

module.exports = {
    getAllAccomodations,
    getAccomodations,
    addAccomodations,
    editAccomodations,
    deleteAccomodations,
};
