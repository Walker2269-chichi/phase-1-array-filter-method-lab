const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
  let result = [];
  for (const driver of drivers) {
    if (driver === name) {
      result.push(driver);
    }else if(driver.toLowerCase() === name.toLowerCase()){
        result.push(driver)
    }
  }
  return result;
}

console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(drivers, name) {
    let result = [];
    for (const driver of drivers) {
          if (driver.slice(0, 2) === name) {
          result.push(driver)
        }
    }
    return result;
}
console.log(fuzzyMatch(drivers, 'Sa'));


function matchName(drivers, name) {
    let result = [];
    for(const driver of drivers){
        if (driver.name === name){
            result.push(driver)
            
        }
    }
    return result;
}
console.log(fuzzyMatch(drivers, "Bobby"));

