        //Variables Task 1: Days of the Week

// var dayOfWeek = "Monday";

// var dayOfWeek = "Friday"; //let or const cannot be redeclared, so vars need to be used

// console.log(`I can't wait for ${dayOfWeek}!`)

        // Varaibles Task 2: User Input

// let animalInput = prompt("What's your favorite animal")

// let colorInput = prompt("What's your favorite color")

// console.log(`I've never seen a ${colorInput} ${animalInput}!`)

        // Conditionals Task 1: Meals

// let timeOfDay = 1300

// var lastMeal = "Hmm..." //I expect this to change, so I use a var over let

// if(timeOfDay < 1200 ){
//     console.log("Wheaties")
// }
// else if(timeOfDay >= 1200 && timeOfDay < 1700){
//     console.log("Sandwich")
// }
// else if(timeOfDay >= 1700 ){
//     console.log("Pizza")
// }
// else{
//     console.log("That's not a time")
// }

        // Conditionals Task 2: Random Number

let randomNumber = Math.floor(Math.random() * 11);

if(randomNumber >= 0 && randomNumber <= 2){
    console.log("Beatles")
}
else if(randomNumber >= 3 && randomNumber <= 5){
    console.log("Stones")
}
else if(randomNumber >= 6 && randomNumber <= 8){
    console.log("Floyd")
}
else if(randomNumber >= 9 && randomNumber <= 10){
    console.log("Hendrix")
}