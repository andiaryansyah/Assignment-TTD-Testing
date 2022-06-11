const leapYearModel = require("../model/leapYearModel");

const isLeapYear = async (req, res) => {
    const result = await leapYearModel.isLeapYear();
    res.json({
        data: result,
        error: null
    });
    res.end();
};

module.exports = {
    isLeapYear,
};