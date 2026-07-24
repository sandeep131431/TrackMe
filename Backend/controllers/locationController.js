const locations = new Map();

const saveLocation = (req, res) => {

    const { linkId, latitude, longitude } = req.body;

    locations.set(linkId, {
        latitude,
        longitude,
        time: new Date()
    });

    res.json({
        success: true,
        message: "Location Saved"
    });
};

const getLocation = (req, res) => {

    const data = locations.get(req.params.id);

    if (!data) {
        return res.status(404).json({
            message: "Location Not Found"
        });
    }

    res.json(data);
};

module.exports = {
    saveLocation,
    getLocation
};