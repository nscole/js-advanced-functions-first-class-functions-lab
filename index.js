// Code your solution in this file!
// 
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,5);
};

const selectingDrivers = [returnLastTwoDrivers() + returnFirstTwoDrivers()];