//const { stringContaining } = require("expect");

function findMatching (drivers,strng){
    return drivers.filter(drivers => drivers.toUpperCase() === strng.toUpperCase())
 } 

 function fuzzyMatch (drivers,strng){
    let querry = strng.length;
    return drivers.filter(drivers => drivers.slice(0, querry) === strng)
 }
 function matchName (driver,strng){
    return driver.filter(driver => driver.name === strng)
 } 
    
 

