// Chapter 9-10


//Question 01

function question01() {
    let city = document.getElementById("city").value;


    if (city === "karachi") {
        document.getElementById("greeting").innerHTML = "Hello!  “Welcome to city of lights” " + city;
    }
    else if (city === "lahore") {
        document.getElementById("greeting").innerHTML = "Hello!  “Welcome to city of Lahore” ";
    }
    else if (city === "islamabad") {
        document.getElementById("greeting").innerHTML = "Hello!  “Welcome to city of Islamabad” ";
    }
    else {
        document.getElementById("greeting").innerHTML = "Hello!  “Please Enter City Name karachi, lahore, islamabad” ";
    }

}

//Question 02

function question02() {
    let gender = document.getElementById("gender").value;


    if (gender === "male") {
        document.getElementById("gendername").innerHTML = " Good Morning Sir ";
    }
    else if (gender === "female") {
        document.getElementById("gendername").innerHTML = " Good Morning Ma’am ";
    } else {
        document.getElementById("gendername").innerHTML = " Enter your Gender ";
    }

}


//Question 03


function red() {
    document.getElementById("message1").innerHTML = "Must Stop its Red Light"
}
function yellow() {
    document.getElementById("message2").innerHTML = "Ready to Move its Yellow Light"
}
function green() {
    document.getElementById("message3").innerHTML = "Go Ahead its Green Light"
}


//Question 04
function question04() {
    let fuel = prompt("Enter the remaining fuel in your car (in litres):");

    if (fuel < 5) {
        alert("Please refill the fuel in your car");
    } else {
        alert("Your fuel is sufficient.");
    }
}



//Question 05


function q11() {
    let a = 4;

    if (++a === 5) {
        alert("given condition for variable a is true");
    }
}

function q12() {
    let b = 82;

    if (b++ === 83) {
        alert("given condition for variable b is true");
    } else {
        alert("given condition for variable b is false");
    }
}

function q13() {
    let c = 12;

    if (c++ === 13) {
        alert("condition 1 is true");
    }
    if (c === 13) {
        alert("condition 2 is true");
    }
    if (++c < 14) {
        alert("condition 3 is true");
    }
    if (c === 14) {
        alert("condition 4 is true");
    }

}


//Question 06

function question06() {

    let totamarksobtain = prompt("Enter your Total Marks out of 300");
    let totalmarks = 300;
    let percentage = (totamarksobtain / totalmarks) * 100;

    if (percentage >= 80) {
        Grade = "A-one";
    }
    else if (percentage >= 70) {
        Grade = "A";
    }
    else if (percentage >= 60) {
        Grade = "B";
    }
    else {
        Grade = "Fail";
    }



    if (percentage > 80) {
        remarks = "Excellent ";
    }
    else if (percentage > 70) {
        remarks = "Good";
    }
    else if (percentage > 60) {
        remarks = "You Need to Improve";
    }
    else {
        remarks = "Soory";
    }

    document.write(`<h1> Marks Sheet </h1> <br>`);
    document.write(`<h3> Total marks: ${totalmarks} </h3> `);
    document.write(`<h3> Obtain marks: ${totamarksobtain}  </h3> `);
    document.write(`<h3> Percentage: ${percentage} % </h3> `);
    document.write(`<h3> Grade: ${Grade}  </h3>`);
    document.write(`<h3> Remarks: ${remarks} </h3> `);

}



//Question 07
function question07() {

    let secretNumber = 6;
    let user = +prompt("Guess the number between 1 to 10");

    if (user === 6) {
        result = (`Bingo Correct Answer`)
    } else {
        result = (`Soory try again`)
    }

    alert(result)

}




//Question 08

function question08() {
    let number = +prompt("Give a number to check if it is divided by 3 or not")

    if (number % 3 === 0) {
        alert("Number is divisible by 3")
    } else {
        alert("Number is not divisible by 3")
    }
}


//Question 09

function question09() {
    let givenNumber = +prompt("Give a number to check even or odd")

    if (givenNumber % 2 === 0) {
        alert("Number is even")
    } else {
        alert("Number is odd")
    }
}



//Question 10

function question10() {

    let temperature = +prompt("Enter a Temperature")

    if (temperature >= 40) {
        alert("It is too hot outside.")
    } else if (temperature >= 30) {
        alert("The Weather today is Normal.")
    } else if (temperature >= 20) {
        alert("Today’s Weather is cool.")
    } else if (temperature >= 1) {
        alert("OMG! Today’s weather is so Cool.")
    } else {
        alert("Enter a Temperature")
    }
}


function question11() {
    let num1 = prompt("Enter your first number")
    let operator = prompt("Enter the operator (+, -, /, *)")
    let num2 = prompt("Enter your Second number")

   if(operator === "+"){
    alert(+num1 + +num2)
   }
   if(operator === "-"){
    alert(num1 - num2)
   }
   if(operator === "*"){
    alert(num1 * num2)
   }
   if(operator === "/"){
    alert(num1 / num2)
   }

}

