function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  const all_names = [];

  drivers.map(function (driver) {
    const nameObject = {};
    const names = driver.split(" ");
    nameObject.firstName = names[0];
    nameObject.lastName = names[1];
    all_names.push(nameObject);
  });

  console.log(all_names);

  return all_names;
}

function attributesToPhrase(drivers) {
  let list = "";

  drivers.map(function (driver) {
    list = '${driver.name} is from ${driver.hometown}';
  });

  return list;
}
