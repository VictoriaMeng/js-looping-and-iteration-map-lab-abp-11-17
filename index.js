function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  let all_names = [];

  drivers.map(function (driver) {
    var names = driver.split(" ");
    all_names[names[0]] = names[1];
    console.log(names, all_names);
  });

  return all_names;
}

nameToAttributes(["Annie Oakley", "Bob Oakley"]);
