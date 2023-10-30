const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Exercise 1: Use forEach to console log each name to the console
console.log("Exercise 1:");
names.forEach(name => console.log(name));

// Exercise 2: Use forEach to console log each name with a matching province
console.log("Exercise 2:");
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Exercise 3: Using map to convert province names to uppercase
console.log("Exercise 3:");
const provincesUppercase = provinces.map(province => province.toUpperCase());
console.log(provincesUppercase);

// Exercise 4: Create a new array with map that has the amount of characters in each name
console.log("Exercise 4:");
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Exercise 5: Using sort to sort all provinces alphabetically
console.log("Exercise 5:");
const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

// Exercise 6: Use filter to remove all provinces that have the word 'Cape' in them
console.log("Exercise 6:");
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log("Provinces left after filtering:", filteredProvinces.length);

// Exercise 7: Create a boolean array by using map and some to determine whether a name contains an 'S' character
console.log("Exercise 7:");
const containsS = names.map(name => name.split('').some(char => char === 'S'));
console.log(containsS);

// Exercise 8: Using reduce to create an object indicating the province of an individual
console.log("Exercise 8:");
const nameProvinceObject = names.reduce((result, name, index) => {
  result[name] = provinces[index];
  return result;
}, {});
console.log(nameProvinceObject);