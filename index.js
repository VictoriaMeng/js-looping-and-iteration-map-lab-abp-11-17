// Code your solution in this file.
const drivers = ["Anne"];

function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    driver.toLowerCase();
  });
}

lowerCaseDrivers(drivers);
