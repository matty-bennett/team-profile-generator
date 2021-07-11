const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./src/page-template');
const team = [];

const questions = [
    {
        type: 'list',
        name: 'role',
        message: "What is this employees role?",
        choices: () => {
            if (team.some(employee => employee.role === 'Manager')) {
                return ['Engineer', 'Intern']
            } else {
                return ['Manager', 'Engineer', 'Intern']
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is their name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter this employee's name");
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'id',
        message: "What is this employee's ID number?",
        validate: idInput => {
            if (!isNaN(parseInt(idInput))) {
                return true;
            } else {
                console.log("Please enter an id for this employee");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `What is the office number?`,
        when: ({ role }) => {
            if (role === 'Manager') {
                return true;
            } else {
                return false;
            }
        },
        validate: officeNumber => {
            if (!isNaN(parseInt(officeNumber))) {
                return true;
            } else {
                console.log("Please enter a valid office number");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: `What is this employee's Github username?`,
        when: ({ role }) => {
            if (role === 'Engineer') {
                return true;
            } else {
                return false;
            }
        },
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log("Please enter a valid Github username");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Where does this intern attend school?",
        when: ({ role }) => {
            if (role === 'Intern') {
                return true;
            } else {
                return false;
            }
        },
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Please enter a school for this intern");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'addAnotherEmployee',
        message: 'Would you like to add another employee to your team?',
        default: true
    }
]

const writeHtml = (htmlContent) => {
    fs.writeFile('./dist/index.html', htmlContent, err => {
        if (err) {
            throw err
        };
        console.log("Your page was succesfully created!");
    });
};

const promptUser = () => {
    return inquirer.prompt(questions)
        .then(response => {
            team.push(response);
            if (response.addAnotherEmployee) {
                return promptUser();
            } else {
                return team;
            };
        });
};

promptUser()
    .then(data => generate(data))
    .then(generateHtml => writeHtml(generateHtml))
    .catch(err => console.log(err));