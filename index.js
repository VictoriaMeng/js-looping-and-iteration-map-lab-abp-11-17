function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  let names = {};

  drivers.map(function (driver) {
    console.log(driver.split(" "));
  });

}

nameToAttributes(["Annie Oakley"]);
