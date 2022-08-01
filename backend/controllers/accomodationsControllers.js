const Accomodation = require("../models/Accomodation.js");
const asyncHandler = require("express-async-handler");

const getAllAccomodations = asyncHandler(async (req, res) => {
    try {
        const accomodations = await Accomodation.find({});
        res.status(200).json(accomodations);
    } catch (err) {
        res.status(404);
        throw new Error(err);
    }
});

const addAccomodation = asyncHandler(async (req, res) => {
    try {
        console.log(req.body.ownerId);
        if (
            !req.body.ownerId ||
            !req.body.name ||
            !req.body.category ||
            !req.body.reservationFee ||
            !req.body.occupancy ||
            !req.body.monthlyFee ||
            !req.body.phone ||
            !req.body.space ||
            !req.body.facilities ||
            !req.body.description
        ) {
            res.status(400);
            console.log("bug here bthch!");
            throw new Error("incomplete inputs for adding accomodation entry");
        }

        const newAccomodation = {
            ownedBy: req.body.ownerId,
            name: req.body.name,
            category: req.body.category,
            reservationFee: req.body.reservationFee,
            occupancy: req.body.occupancy,
            monthlyFee: req.body.monthlyFee,
            phone: req.body.phone,
            space: req.body.space,
            availability: req.body.availability,
            facilities: req.body.facilities,
            description: req.body.description,
        };

        const accomodation = await Accomodation.create(newAccomodation);
        res.status(200).json({ message: "room added" });
    } catch (err) {
        throw new Error(err);
    }
});

const editAccomodation = asyncHandler(async (req, res) => {
    try {
        if (
            !req.body.id ||
            !req.body.name ||
            !req.body.category ||
            !req.body.reservationFee ||
            !req.body.occupancy ||
            !req.body.monthlyFee ||
            !req.body.phone ||
            !req.body.space ||
            !req.body.facilities ||
            !req.body.description
        ) {
            res.status(400);
            throw new Error("incomplete inputs for editing accomodation entry");
        }

        const accomodation = await Accomodation.findOneAndUpdate(
            req.user.id,
            { $set: req.body, $push: { phone: req.body.phone } },
            { returnDocument: "after" }
        ).exec();

        console.log(accomodation);
        res.status(200).json({ message: "room data updated" });
    } catch (err) {
        throw new Error(err);
    }
});

const deleteAccomodation = asyncHandler(async (req, res) => {
    try {
        const accomodationName = req.body.name;
        if (!accomodationName) {
            res.status(400);
            throw new Error("Accomodation id is needed.");
        }

        const deleted = await Accomodation.findOneAndDelete({
            name: accomodationName,
        }).exec();

        console.log("deleted", deleted);

        if (!deleted) {
            res.status(404).json({
                message: "accomodation to be deleted does not exists",
            });
        } else {
            res.status(200).json({
                message: "accomodation deleted",
            });
        }
    } catch (err) {
        throw new Error(err);
    }
});

module.exports = {
    getAllAccomodations,
    addAccomodation,
    editAccomodation,
    deleteAccomodation,
};
