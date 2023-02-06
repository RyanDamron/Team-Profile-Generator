const inquirer = require('inquirer');
const fs = require('fs');
const internal = require('stream');
const Employee = require('./classes.js/employee');
const Manager = require("./classes.js/manager");
const Engineer = require("./classes.js/engineer");
const Intern = require('./classes.js/intern');
const myteam = require('./src/myteam');
const teamMember = [];
const employeeId = [];

const mgrQuestions = [
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the employee's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the employee's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'office'
    }
]
const engQuestions = [
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the employee's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the employee's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What is the engineer's GitHub name?",
        name: 'github'
    }
]
const intQuestions = [
    {
        type: 'input',
        message: "What is the employee's name?",
        name: 'name'
    },
    {
        type: 'input',
        message: "What is the employee's ID number?",
        name: 'id'
    },
    {
        type: 'input',
        message: "What is the employee's email address?",
        name: 'email'
    },
    {
        type: 'input',
        message: "What school does the intern attend?",
        name: 'school'
    }
]
const againQuestion = [
    {
        type: 'list',
        message: 'Would you like to add another employee?',
        name: 'again',
        choices: ["Add another employee", "I'm finished. Build the app."]
    }
]
const role = [
    {
        type: 'list',
        message: 'What role is this employee?',
        name: 'role',
        choices: ["Manager", "Engineer", "Intern"]
    }
]

function getRole() {
    inquirer.prompt(role)
        .then((data) => {
            console.log(data);
            if (data.role === "Manager") {
                manager()
            }
            else if (data.role === "Engineer") {
                engineer()
            }
            else if (data.role === "Intern") {
                intern()
            }
            })
}

function manager() {
    inquirer.prompt(mgrQuestions)
        .then((data) => {
            console.log(data);
            const manager = new Manager (data.name, data.id, data.email, data.office) 
            teamMember.push(manager);
            employeeId.push(data.id);
            console.log(myteam(teamMember));
            fs.writeFile("sample.html", myteam(teamMember), 'utf-8', (err) => console.log(err))
            lastQuestion();
        })
        
}
function engineer() {
    inquirer.prompt(engQuestions)
        .then((data) => {
            console.log(data);
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            teamMember.push(engineer);
            employeeId.push(data.id);
            fs.writeFile("sample.html", myteam(teamMember), 'utf-8', (err) => console.log(err))
            lastQuestion();
        })
        
}
function intern() {
    inquirer.prompt(intQuestions)
        .then((data) => {
            console.log(data);
            const intern = new Intern (data.name, data.id, data.email, data.school)
            teamMember.push(intern);
            employeeId.push(data.id);
            fs.writeFile("sample.html", myteam(teamMember), 'utf-8', (err) => console.log(err))
            lastQuestion();
        })
        
}
function lastQuestion () {
    inquirer.prompt(againQuestion)
    .then((data) => {
        if (data.again === "Add another employee") {
            getRole()
        }else if (data.again === "I'm finished. Build the app.") {
            console.log("Open sample.html in the browser to see your team!");
        }
    })
}

getRole();
