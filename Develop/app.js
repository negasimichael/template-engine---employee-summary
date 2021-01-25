const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Four general questions for every employee
const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "Enter employee name:",
        type: "string"
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee's id number:",
        validate: function (id) {
            var valid = isNaN(id);
            if (valid) {
                console.log("\nInvalid Email!")
                return false;
            }
            else {
                return true;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Employee's email address(example@xyz.abcd)?",
        validate: function validateEmail(email) {
            if(!checkEmail) {
                console.log('\nInvalid Email!')
                return false;
            }else {
                return true;
            }
        },
    },
    {
        type: "list",
        name: "employeeType", //employeeType will be used to render question specifically
        message: "Employee type:",
        choices: [
            "Manager",
            "Intern",
            "Engineer"
        ]
    }
]

// specific questions for managers only
const managerQuestions = [
    {
        type: "input",
        name: "officeNumber",
        message: "Manager's office number:",
        validate: function (id) {
            var valid = isNaN(id);
            if (valid) {
                console.log("\nInvalid Email!")
                return false;
            }
            else {
                return true;
            }
        }
    }
]

// specific questions for interns only
const internQuestions = [
    {
        type: "input",
        name: "school",
        message: "Name of the school this student is attending:",
        type: "string"
    }
]

// specific questions for engineers only
const engineerQuestions = [
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub username(not url):",
        type: "string"
    }
]

// Question asking the user if there is a need to add more employee data
const moreEmployeeQuestion = [
    {
        type: "confirm",
        name: "more",
        message: "Do you want to add more employees?",
    }
]




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
