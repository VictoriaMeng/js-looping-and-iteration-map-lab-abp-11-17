function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  const all_names = [];

  drivers.map(function (driver) {
    let nameObject = {};
    let names = driver.split(" ");
    nameObject.firstName = names[0];
    nameObject.lastName = names[1];
    all_names.push(nameObject);
  });

  console.log(all_names);

  return all_names;
}

function attributesToPhrase(drivers) {
  
}
