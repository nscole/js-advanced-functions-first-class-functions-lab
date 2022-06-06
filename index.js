// Code your solution in this file!
// 
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2,5);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function (fareQuintupler) {
        return fareMultiplier * fareQuintupler;
    };
};

const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

const fareDoubler = function (fare) {
    return fare * 2;
};