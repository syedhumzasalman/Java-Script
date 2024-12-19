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

function question02(){
    let a = 2;
    let b = 1;
    let result = --a - --b + ++b + b--;
    // console.log(result)

    document.write("a is " + a + "<br>")
    document.write("b is " + b + "<br>")
    document.write("Result is " + result)
}



// Question 03

function question03(){
    let userName = document.getElementById("userName").value;

    if(userName) {
        document.getElementById("greeting").innerHTML = "Hello, " + userName + "! Welcome to our website.";
    }
    else {
        document.getElementById("greeting").innerHTML = "Please enter your name.";
    }
}