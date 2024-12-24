// chapter 12

//Question 01

function question01() {
    let character = prompt("Give a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter.")

    if (character >= 1 || character >= 10000) {
        alert("Type of your value is Number")
    } else if (character >= "a" && character <= "z") {
        alert("Type of your value is String (Lowercase)")
    } else if (character >= "A" && character <= "Z") {
        alert("Type of your value is String (Uppercase)")
    } else {
        alert("Enter the Correc Value")
    }
}


//Question 02

function question02() {
    let num1 = prompt("Enter first Value")
    let num2 = prompt("Enter Second Value")


    if (num1 > num2) {
        alert(num1 + " is greater than " + num2)
    } else if (num1 < num2) {
        alert(num2 + " is greater than " + num1)
    }
}


//Question 03

function question03() {
    let usernum = +prompt("Give a Random Number to check it positive, negative or zero.")

    if (usernum >= 1) {
        alert("Number is Positive")
    } else if (usernum < 0) {
        alert("Number is Negative")
    } else {
        alert("Number is zero")
    }
}

//Question 04

function question04() {
    let user = prompt("Enter a character (i.e. string of length 1)")

    if (user === "a" || user === "e" || user === "i" || user === "o" || user === "u") {
        alert("true if it is a vowel")
    } else if (user === "A" || user === "E" || user === "I" || user === "O" || user === "U") {
        alert("true if it is a vowel")
    } else {
        alert("false if it is not a vowel")
    }
}

//Question 05

function question05() {
    let correctPassword = "pakistan123"

    let userPassword = prompt("Enter your Password")

    if (correctPassword === userPassword) {
        alert("Correct! The password you entered matches the original password")
    } else if (correctPassword !== userPassword) {
        alert("Incorrect password")
    }
}

//Question 06

function question06() {
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else{
    greeting = "Good evening";
}

alert(greeting)

}

//Question 07

function question07(){
let time = prompt("Enter the time in 24 hour format")

if(time >= 5 && time < 12){
    alert("Good Morning")
} else if(time >= 12 && time < 19){
    alert("Good Evening")
} else if(time >=19 && time <= 24){
    alert("Good Night")
} else if (time >= 1 && time < 5){
    alert("Dont Disturb me i am Sleeping")
} else {
    alert("Enter a valid time")
}
}