function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find all drivers whose names start with the provided letters (case-insensitive)
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  // Function to find the driver whose name property matches the provided name
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
