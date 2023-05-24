// Put your code here
const allSpells = [
{
    name: "Turn enemy into a newt",
    isEvil: true,
    energyRequired: 5.1
},
{
    name: "Conjure some gold for a local charity",
    isEvil: false,
    energyRequired: 2.99
},
{
    name: "Give a deaf person the ability to heal",
    isEvil: false,
    energyRequired: 12.2
},
{
    name: "Make yourself emperor of the universe",
    isEvil: true,
    energyRequired: 100.0
},
{
    name: "Convince your relatives your political views are correct",
    isEvil: false,
    energyRequired: 2921.5
},
]

const goodBook = allSpells.filter(spell => !spell.isEvil)
const evilBook = allSpells.filter(spell => spell.isEvil)

console.log("Do you believe in magic??")
console.log("-------------------------")
console.log("Good Book")
const goodBookBound = goodBook.map(spell => {console.log(`  ${spell.name}`)})
console.log("Evil Book")
const evilBookBound = evilBook.map(spell => {console.log(`  ${spell.name}`)})

