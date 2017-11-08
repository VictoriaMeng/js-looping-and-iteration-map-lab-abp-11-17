// Code your solution in this file.
const drivers = ["Anne"];

function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  let drivers_object = {}

  drivers.map(function (driver) {
      let names_split = driver.split(" ");
      drivers_object[names_split[0]] = names_split[1];
  });

  return drivers_object;
}
