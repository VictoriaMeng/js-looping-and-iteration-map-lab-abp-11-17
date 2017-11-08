function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  let all_names = [];

  drivers.map(function (driver) {
    var nameObject = {};
    var names = driver.split(" ");
    nameObject.firstName = names[0];
    nameObject.lastName = names[1];
    all_names.push(nameObject);
  });

  console.log(all_names);

  return all_names;
}


