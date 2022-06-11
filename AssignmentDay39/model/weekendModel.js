function isWeekend() {
    return new Date().getDay() === 0 || new Date().getDay() === 6;
}

module.exports = {
    isWeekend,
};