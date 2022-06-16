const isLeapYearModel = require("../../storage/models/is-leap-year.model");

const isLeapYear = async (req, res) => {
    try {
        const result = await isLeapYearModel.isLeapYear(n);
        res.json({
            data: result,
            error: null
        });
    } catch (e) {
        res.json({
            data: null,
            error: e.message
        });
    } finally {
        res.end();
    }
};

module.exports = {
    isLeapYear,
};