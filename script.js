// Challenge 1: Store user data in localStorage
const user = {
  firstName: 'Rajat',
  lastName: 'Doe',
  age: 25,
  country: 'USA',
  state: 'California'
};

// Store the user data in localStorage
localStorage.setItem('userData', JSON.stringify(user));

// Print localStorage in the console
console.log(localStorage);

// Challenge 2: Get user data from localStorage
// Get user data from localStorage
const userData = JSON.parse(localStorage.getItem('userData'));

// Print the user data in the console
console.log(userData);

// Challenge 3: Remove "state" data from localStorage
// Remove the "state" data from localStorage
localStorage.removeItem('userData.state');

// Print localStorage in the console
console.log(localStorage);

// Challenge 4: Clear all data from localStorage
// Clear all data from localStorage
localStorage.clear();

// Print localStorage in the console
console.log(localStorage);

// Challenge 5: Convert an object to a string using JSON.stringify
const user2 = {
  firstName: 'John',
  age: 30,
  skills: ['HTML', 'CSS', 'JavaScript']
};

// Convert the object to a JSON string
const jsonString = JSON.stringify(user2);

// Print the JSON string in the console
console.log(jsonString);
