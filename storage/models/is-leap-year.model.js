let isLeapYear=  function leapYear(year) {
     
    if(new Date(year, 1, 29).getDate() === 29)
       {
        return "leap year";
        } 
}

module.exports = {
    isLeapYear,
};