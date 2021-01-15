import users from './users.js';

//==================================================================================
//                                    Task 1
//==================================================================================

const getUserNames = users => {
  const userName = users.map(user => user.name);
  return userName;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//==================================================================================
//                                    Task 2
//==================================================================================

const getUsersWithEyeColor = (users, color) => {
  const usersEye = users.filter(user => user.eyeColor === color);
  return usersEye;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//==================================================================================
//                                    Task 3
//==================================================================================

const getUsersWithGender = (users, gender) => {
  const usersGender = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return usersGender;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//==================================================================================
//                                    Task 4
//==================================================================================

const getInactiveUsers = users => {
  const usersInactive = users.filter(user => user.isActive === false);
  return usersInactive;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//==================================================================================
//                                    Task 5
//==================================================================================

const getUserWithEmail = (users, email) => {
  const userEmail = users.find(user => user.email === email);
  return userEmail;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//==================================================================================
//                                    Task 6
//==================================================================================

const getUsersWithAge = (users, min, max) => {
  const usersAge = users.filter(user => user.age >= min && user.age <= max);
  return usersAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//==================================================================================
//                                     Task 7
//==================================================================================
const calculateTotalBalance = users => {
  const usersBalance = users.reduce((acc, user) => acc + user.balance, 0);
  return usersBalance;
};

console.log(calculateTotalBalance(users)); // 20916

//==================================================================================
//                                     Task 8
//==================================================================================

const getUsersWithFriend = (users, friendName) => {
  const usersFriends = users
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
  return usersFriends;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//==================================================================================
//                                     Task 9
//==================================================================================

const getNamesSortedByFriendsCount = users => {
  const usersFriendSort = users
    .filter(user => user.friends)
    .sort((a, b) => a.friends.length - b.friends.length);
  return usersFriendSort;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//==================================================================================
//                                      Task 10
//==================================================================================

const getSortedUniqueSkills = users => {
  const userSkills = users
    .reduce((uniqueSkills, { skills }) => [...uniqueSkills, ...skills], [])
    .filter((skill, inx, arr) => arr.indexOf(skill) === inx)
    .sort();
  return userSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
