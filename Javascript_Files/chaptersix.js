// Chapter 6   MATH EXPRESSIONS 

// Question 01

function question01() {

    document.write("<h1>Result</h1>")

    let a = 10;


    document.write("The value of (a) is: " + a + "<br>");
    document.write(".....................................................<br><br>");

    document.write("The value of (++a) is: " + (++a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of (a++) is: " + (a++) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of (--a) is: " + (--a) + "<br>");
    document.write("Now the value of a is: " + a + "<br><br>");

    document.write("The value of (a--) is: " + (a--) + "<br>");
    document.write("Now the value of a is: " + a + "<br>");
}

// Question 02

function question02() {
    let a = 2;
    let b = 1;
    let result = --a - --b + ++b + b--;
    // console.log(result)

    document.write("a is " + a + "<br>")
    document.write("b is " + b + "<br>")
    document.write("Result is " + result)
}



// Question 03

function question03() {
    let userName = document.getElementById("userName").value;

    if (userName) {
        document.getElementById("greeting").innerHTML = "Hello, " + userName + "! Welcome to our website.";
    }
    else {
        document.getElementById("greeting").innerHTML = "Please enter your name.";
    }
}


// Question 05

function table() {
    let num = prompt("Enter a Number for multiplecation");

    if (num === "1") {

        document.write(`<h1>Table of 01</h1>`)
        document.write("1 x 1 = " + num + "<br>")
        document.write("1 x 2 = " + ++num + "<br>")
        document.write("1 x 3 = " + ++num + "<br>")
        document.write("1 x 4 = " + ++num + "<br>")
        document.write("1 x 5 = " + ++num + "<br>")
        document.write("1 x 6 = " + ++num + "<br>")
        document.write("1 x 7 = " + ++num + "<br>")
        document.write("1 x 8 = " + ++num + "<br>")
        document.write("1 x 9 = " + ++num + "<br>")
        document.write("1 x 10 = " + ++num + "<br>")
    }
    if (num === "2") {

        document.write(`<h1>Table of 02</h1>`)
        document.write("2 x 1 = " + num + "<br>")
        document.write("2 x 2 = " + num * num + "<br>")
        document.write("2 x 3 = " + num * 3 + "<br>")
        document.write("2 x 4 = " + num * 4 + "<br>")
        document.write("2 x 5 = " + num * 5 + "<br>")
        document.write("2 x 6 = " + num * 6 + "<br>")
        document.write("2 x 7 = " + num * 7 + "<br>")
        document.write("2 x 8 = " + num * 8 + "<br>")
        document.write("2 x 9 = " + num * 9 + "<br>")
        document.write("2 x 10 = " + num * 10 + "<br>")
    }
    if (num === "3") {

        document.write(`<h1>Table of 03</h1>`)
        document.write("3 x 1 = " + num + "<br>")
        document.write("3 x 2 = " + nu2 + "<br>")
        document.write("3 x 3 = " + num * 3 + "<br>")
        document.write("3 x 4 = " + num * 4 + "<br>")
        document.write("3 x 5 = " + num * 5 + "<br>")
        document.write("3 x 6 = " + num * 6 + "<br>")
        document.write("3 x 7 = " + num * 7 + "<br>")
        document.write("3 x 8 = " + num * 8 + "<br>")
        document.write("3 x 9 = " + num * 9 + "<br>")
        document.write("3 x 10 = " + num * 10 + "<br>")
    }
    if (num === "4") {

        document.write(`<h1>Table of 04</h1>`)
        document.write("4 x 1 = " + num + "<br>")
        document.write("4 x 2 = " + num * 2 + "<br>")
        document.write("4 x 3 = " + num * 3 + "<br>")
        document.write("4 x 4 = " + num * 4 + "<br>")
        document.write("4 x 5 = " + num * 5 + "<br>")
        document.write("4 x 6 = " + num * 6 + "<br>")
        document.write("4 x 7 = " + num * 7 + "<br>")
        document.write("4 x 8 = " + num * 8 + "<br>")
        document.write("4 x 9 = " + num * 9 + "<br>")
        document.write("4 x 10 = " + num * 10 + "<br>")
    }
    if (num === "5") {

        document.write(`<h1>Table of 05</h1>`)
        document.write("5 x 1 = " + num + "<br>")
        document.write("5 x 2 = " + num * 2 + "<br>")
        document.write("5 x 3 = " + num * 3 + "<br>")
        document.write("5 x 4 = " + num * 4 + "<br>")
        document.write("5 x 5 = " + num * 5 + "<br>")
        document.write("5 x 6 = " + num * 6 + "<br>")
        document.write("5 x 7 = " + num * 7 + "<br>")
        document.write("5 x 8 = " + num * 8 + "<br>")
        document.write("5 x 9 = " + num * 9 + "<br>")
        document.write("5 x 10 = " + num * 10 + "<br>")
    }
    if (num === "6") {

        document.write(`<h1>Table of 06</h1>`)
        document.write("6 x 1 = " + num + "<br>")
        document.write("6 x 2 = " + num * 2 + "<br>")
        document.write("6 x 3 = " + num * 3 + "<br>")
        document.write("6 x 4 = " + num * 4 + "<br>")
        document.write("6 x 5 = " + num * 5 + "<br>")
        document.write("6 x 6 = " + num * 6 + "<br>")
        document.write("6 x 7 = " + num * 7 + "<br>")
        document.write("6 x 8 = " + num * 8 + "<br>")
        document.write("6 x 9 = " + num * 9 + "<br>")
        document.write("6 x 10 = " + num * 10 + "<br>")
    }
    if (num === "7") {

        document.write(`<h1>Table of 07</h1>`)
        document.write("7 x 1 = " + num + "<br>")
        document.write("7 x 2 = " + num * 2 + "<br>")
        document.write("7 x 3 = " + num * 3 + "<br>")
        document.write("7 x 4 = " + num * 4 + "<br>")
        document.write("7 x 5 = " + num * 5 + "<br>")
        document.write("7 x 6 = " + num * 6 + "<br>")
        document.write("7 x 7 = " + num * 7 + "<br>")
        document.write("7 x 8 = " + num * 8 + "<br>")
        document.write("7 x 9 = " + num * 9 + "<br>")
        document.write("7 x 10 = " + num * 10 + "<br>")
    }
    if (num === "8") {

        document.write(`<h1>Table of 08</h1>`)
        document.write("8 x 1 = " + num + "<br>")
        document.write("8 x 2 = " + num * 2 + "<br>")
        document.write("8 x 3 = " + num * 3 + "<br>")
        document.write("8 x 4 = " + num * 4 + "<br>")
        document.write("8 x 5 = " + num * 5 + "<br>")
        document.write("8 x 6 = " + num * 6 + "<br>")
        document.write("8 x 7 = " + num * 7 + "<br>")
        document.write("8 x 8 = " + num * 8 + "<br>")
        document.write("8 x 9 = " + num * 9 + "<br>")
        document.write("8 x 10 = " + num * 10 + "<br>")
    }
    if (num === "9") {

        document.write(`<h1>Table of 09</h1>`)
        document.write("9 x 1 = " + num + "<br>")
        document.write("9 x 2 = " + num * 2 + "<br>")
        document.write("9 x 3 = " + num * 3 + "<br>")
        document.write("9 x 4 = " + num * 4 + "<br>")
        document.write("9 x 5 = " + num * 5 + "<br>")
        document.write("9 x 6 = " + num * 6 + "<br>")
        document.write("9 x 7 = " + num * 7 + "<br>")
        document.write("9 x 8 = " + num * 8 + "<br>")
        document.write("9 x 9 = " + num * 9 + "<br>")
        document.write("9 x 10 = " + num * 10 + "<br>")
    }
    if (num === "10") {

        document.write(`<h1>Table of 13</h1>`)
        document.write("10 x 1 = " + num + "<br>")
        document.write("10 x 2 = " + num * 2 + "<br>")
        document.write("10 x 3 = " + num * 3 + "<br>")
        document.write("10 x 4 = " + num * 4 + "<br>")
        document.write("10 x 5 = " + num * 5 + "<br>")
        document.write("10 x 6 = " + num * 6 + "<br>")
        document.write("10 x 7 = " + num * 7 + "<br>")
        document.write("10 x 8 = " + num * 8 + "<br>")
        document.write("10 x 9 = " + num * 9 + "<br>")
        document.write("10 x 10 = " + num * 10 + "<br>")
    }

}


// Question 06

function marks(){
let sub1 = "English";
let sub2 = "Urdu";
let sub3 = "Math";

let marks1 = 100;
let marks2 = 100;
let marks3 = 100;

let usremarks1 = prompt("Enter your Enlish Marks");
let usremarks2 = prompt("Enter your Urdu Marks");
let usremarks3 = prompt("Enter your Math Marks");

let percentage1 = (usremarks1 / marks1) * 100;
let percentage2 = (usremarks2 /marks2 ) * 100;
let percentage3 = (usremarks3 / marks3) * 100;

document.write(`<th>Subject</th>   <th>Total Marks</th>  <th>Obtain Marks</th>  <th>percentage</th> <br>`);
// document.write(`${sub1}  ${marks1}     ${usremarks1}    ${percentage1} % <br>`);
// document.write(`${sub2}  ${marks2}     ${usremarks2}    ${percentage2} % <br>`);
// document.write(`${sub3}  ${marks3}     ${usremarks3}    ${percentage3} % <br>`);

document.write(sub1 + "   "  + marks1  + "   "  + usremarks1  +  "   "  +  percentage1  +   "% <br>") 
document.write(sub2 + "   "  + marks2  + "   "  + usremarks2  +  "   "  +  percentage2  +   "% <br>") 
document.write(sub3 + "   "  + marks3  + "   "  + usremarks3  +  "   "  +  percentage3  +   "% <br>") 


}