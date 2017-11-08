function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  let drivers_object = {}

  return drivers.map(function (driver) {
      names_split = driver.split(" ");
      console.log(names_split);
  });

  return drivers_object;

}

nameToAttributes("Annie Oakley");
