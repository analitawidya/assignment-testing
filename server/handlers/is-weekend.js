const isWeekendModel = require("../../storage/models/is-weekend.model");

const isWeekend = async (req, res) => {
    
    try {
        const result = await isWeekendModel.isWeekend(a,b);
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
    isWeekend,
};