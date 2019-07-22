let users = [
  {
    id: 1,
    name: "goo",
    age: 18,
    gender: "male"
  },
  {
    id: 2,
    name: "edwin",
    age: 18,
    gender: "male"
  },
  {
    id: 3,
    name: "yang",
    age: 18,
    gender: "female"
  }
];

export const getUsers = () => users;

export const getById = id => {
  const filteredUser = users.filter(user => user.id === id);
  return filteredUser[0];
};

export const deleteUSer = id => {
  const cleanUser = users.filter(user => user.id !== id);
  if (users.length >= cleanUser.length) {
    users = cleanUser;
    return true;
  } else {
    return false;
  }
};

export const addUser = (name, age, gender) => {
  const newUser = {
    id: users.length + 1,
    name,
    age,
    gender
  };
  users.push(newUser);
  return newUser;
};
