const WeekendModel = require("../model/weekendModel");

const isWeekend = async (req, res) => {
    const result = await WeekendModel.isWeekend();
    res.json({
        data: result,
        error: null
    });
    res.end();
};

module.exports = {
    isWeekend,
};