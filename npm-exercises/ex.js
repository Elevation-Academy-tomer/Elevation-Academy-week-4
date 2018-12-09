const validator = require('validator');
const faker = require('faker');

//Ex. 1
/*
//Check whether "shoobert@dylan" is a valid email (should be false)
 
const validMail = validator.isEmail('shoobert@dylan');

console.log(validMail)

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale

const validPhone = validator.isMobilePhone('786-329-9958', 'en-US')
console.log(validPhone)


//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
validator.blacklist(text,'![!]');

console.log(validator.blacklist(text,blacklist))
*/
//// Exercise 2 ///

const makeHuman = function(number){
    let humans = [];
    let i = 0;
    while(i < number){
       user ={
        name : faker.name.findName(),
        image : faker.image.avatar(),
        company : faker.company.companyName()
       }
       ++i
       humans.push(user);
    }

    return humans
       
}

const humans2 = makeHuman(2)
console.log(humans2.forEach(e => console.log(`name : ${e.name} image : ${e.image} company : ${e.company}`)))



