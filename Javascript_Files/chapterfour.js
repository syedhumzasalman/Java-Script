// charter 04   VARIABLE NAMES: LEGAL & ILLEGAL     


// QUESTION 01

function question01() {
    let fullname = "Syed Humza Salman", age = 20, gender = "Male";
    console.log(fullname, age, gender);
    document.write("Name: " + fullname + "<br>" + "age: " + age + "<br>" + "Gender:" + gender)
}

// QUESTION 02


function question02() {

    document.write("<h1>5 Legal Variable Names</h1>")

    document.write("1. userName - Uses camelCase.<br><br>")
    document.write("2. _age - Starts with an underscore.<br><br>")
    document.write("3. $price - Starts with a dollar sign.<br><br>")
    document.write("4. totalAmount - Descriptive and uses camelCase.<br><br>")
    document.write("5. number1 - Ends with a number.<br><br>")

    document.write("<h1>5 Illegal Variable Names</h1> <br><br>")

    document.write("1.  1name - Cannot start with a number.<br><br>")
    document.write("2.  user-name - Hyphens are not allowed.<br><br>")
    document.write("3.  let - Reserved keyword in JavaScript.<br><br>")
    document.write("4.  user name - Spaces are not allowed in variable names.<br><br>")
    document.write("5.  @age - Cannot start with special characters (except _ or $).<br><br>")

}


// QUESTION 03


function question03(){

    let char1 = "letters";
    let char2 = "numbers";
    let char3 = " _";
    let char4 = " $";
    let char5 = "sensitive";
    let char6 = "Keywords";

    document.write("<h1>Rules for Naming JS Variables</h1>");
    document.write(" Variable names can only contain " + char2 + "," + char4 + "," + char3 + " For example $my_1stVariable <br><br>");
    document.write(" Variables must begin with a " + char1 + "," + char4 + " or " + char3 + "  For example $name, _name or name <br><br>");
    document.write(" Variable names are case " + char5 + " <br> <br> ");
    document.write(" Variable names should not be JS  " + char6);
}