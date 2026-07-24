const express = require("express");
const router = express.Router();

const {
    saveLocation,
    getLocation
} = require("../controllers/locationController");

router.post("/location", saveLocation);
router.get("/location/:id", getLocation);

module.exports = router;