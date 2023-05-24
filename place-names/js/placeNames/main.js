

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("'The' Place Names");

const filteredNames = names.filter(name => name.startsWith("The"))
filteredNames.forEach(name => console.log(name))
