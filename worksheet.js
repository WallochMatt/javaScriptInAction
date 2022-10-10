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

// let randomNumber = Math.floor(Math.random() * 11);

// if(randomNumber >= 0 && randomNumber <= 2){
//     console.log("Beatles")
// }
// else if(randomNumber >= 3 && randomNumber <= 5){
//     console.log("Stones")
// }
// else if(randomNumber >= 6 && randomNumber <= 8){
//     console.log("Floyd")
// }
// else if(randomNumber >= 9 && randomNumber <= 10){
//     console.log("Hendrix")
// }


        // "For" Loops Task 1

// for(let i=0; i<7; i++){
//     console.log("JavaScript is cool!")
// }

        // "For" Loops Task 2

// var numbersToTen = 0

// for(let i = 0; i<= 10; i++){
//     console.log(numbersToTen)
//     numbersToTen ++
// }

// for(let newNumToTen = 0; newNumToTen <= 10; newNumToTen++){
//     console.log(newNumToTen)
// } // Better Version ^

        // "For" Loops Task 3

// for(let i = 0; i<= 9; i++){
//     if(i % 2 === 0){
//         console.log("hello")
//     }
//     else(console.log("goodbye"))
// }

    
        //Functions Task 1: Favorite Movie (void functions)

// function printMovieName(){
//     let favMovie = "Titan A.E."
//     console.log(favMovie)
// }

// printMovieName()

        //Function Task 2: Favorite Band (return function)

// function userGiveFavBand(){
//     input = prompt("What is your favorite band?")
//     return input
// }

// let usersFavBand = userGiveFavBand()
// console.log(usersFavBand)

        // Function Task 3: Concert (parameters)

// function concertDisplay(musicalAct){
//     myStreet = prompt("What street do you live on?");
//     console.log(`It would be great if ${musicalAct} played a show on ${myStreet}!`)
// }
// concertDisplay("Green Day")


        // Arrays Task 1: Desktop Items

// let desktopItems = ['desk', 'keyboard', 'pen']
// console.log(desktopItems[1])

// desktopItems.push("Infinity Gauntlet")

// for(let item of desktopItems){
//     console.log(item)
// }

        // BOSS FIGHT

// let magicNumber = Math.floor(Math.random() * 101);
// let guess = 0;

// while(guess != magicNumber){
//     guess = prompt("Guess the number")
//     if(guess< magicNumber){
//         console.log("Too low")
//     }
//     else if(guess > magicNumber){
//         console.log("Too high")
//     }
//     else if(guess == magicNumber){
//         console.log(`You guessed right the Magic Number is ${magicNumber}!`)
//         break
//     }
//     if((guess >= (magicNumber - 10) && guess < magicNumber) || (guess <= (magicNumber + 10) && guess > magicNumber)){
//         console.log("Getting warmer...")
//     }
// }   

