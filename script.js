/*
// script.js
window.onload = function() {
    alert("This message pops up from an external JavaScript file!");
};




function add(a, b) {
    return a + b;
}

let num1 = parseInt(prompt("Enter first integer:"));
let num2 = parseInt(prompt("Enter second integer:"));

let sum = add(num1, num2);

// Display only the result number on webpage
document.getElementById("result").innerHTML = sum;





window.onload = function() {

    var output = "";

    // First operation
    var y = 2;
    var x = y + 1;
    output += "x = y + 1 ... Result = " + x + "<br>";

    // Change y to 3 for remaining operations
    y = 3;

    x += y;
    output += "x += y ... Result = " + x + "<br>";

    x -= y;
    output += "x -= y ... Result = " + x + "<br>";

    x *= y;
    output += "x *= y ... Result = " + x + "<br>";

    x /= y;
    output += "x /= y ... Result = " + x + "<br>";

    document.getElementById("output").innerHTML = output;
};




function calculateSumAndAverage() {
    // Prompt the user for three integers
    let num1 = parseInt(prompt("Enter the first integer:"));
    let num2 = parseInt(prompt("Enter the second integer:"));
    let num3 = parseInt(prompt("Enter the third integer:"));

    // Validate inputs
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        alert("Please enter valid integers!");
        return;
    }

    // Calculate sum and average
    let sum = num1 + num2 + num3;
    let average = sum / 3;

    // Show result in a dialog box
    alert("Sum: " + sum + "\nAverage: " + average.toFixed(2));
}



// Ensure script runs after DOM is ready
window.onload = function() {
    // Array containing dropdown options
    let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    // Reference to the dropdown
    let dropdown = document.getElementById("fruitDropdown");

    // Populate dropdown dynamically
    for (let i = 0; i < fruits.length; i++) {
        let option = document.createElement("option");
        option.text = fruits[i];
        option.value = fruits[i].toLowerCase();
        dropdown.add(option);
    }
};






window.onload = function () {

    var regNo = prompt("Enter Registration Number:");
    var name = prompt("Enter Student Name:");
    var semester = prompt("Enter Semester:");

    var web = parseInt(prompt("Enter Web Engineering Marks:"));
    var cp = parseInt(prompt("Enter Computer Programming Marks:"));
    var oop = parseInt(prompt("Enter Object Oriented Programming Marks:"));
    var dsa = parseInt(prompt("Enter Data Structures and Algorithms Marks:"));
    var ai = parseInt(prompt("Enter Artificial Intelligence Marks:"));

    var obtained = web + cp + oop + dsa + ai;
    var percentage = (obtained / 500) * 100;

    var grade;

    if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else if (percentage >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    var output = "<table border='1' cellpadding='8'>";
    output += "<tr><th>Registration No</th><th>Name</th><th>Semester</th><th>Web</th><th>CP</th><th>OOP</th><th>DSA</th><th>AI</th><th>Obtained Marks</th><th>Grade</th></tr>";
    output += "<tr>";
    output += "<td>" + regNo + "</td>";
    output += "<td>" + name + "</td>";
    output += "<td>" + semester + "</td>";
    output += "<td>" + web + "</td>";
    output += "<td>" + cp + "</td>";
    output += "<td>" + oop + "</td>";
    output += "<td>" + dsa + "</td>";
    output += "<td>" + ai + "</td>";
    output += "<td>" + obtained + "</td>";
    output += "<td>" + grade + "</td>";
    output += "</tr>";
    output += "</table>";

    document.getElementById("output").innerHTML = output;
};
*/




window.onload = function () {

    function add(a, b) {
        return a + b;
    }

    function subtract(a, b) {
        return a - b;
    }

    function multiply(a, b) {
        return a * b;
    }

    function divide(a, b) {
        return a / b;
    }

    var operations = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide
    };

    var num1 = parseFloat(prompt("Enter first operand:"));
    var operator = prompt("Enter operator (+, -, *, /):");
    var num2 = parseFloat(prompt("Enter second operand:"));

    var result = operations[operator](num1, num2);

    alert("Result = " + result);
};