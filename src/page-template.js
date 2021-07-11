const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');

const addEmployee = employeeInfo => {
    let teamCards = '';

    employeeInfo.forEach(employee => {
        const { name, id, email, role } = employee;
        let addTeamate = '';
        let userInfo = '';

        switch (role) {
            case 'Manager':
                addTeamate = new Manager(name, id, employee.officeNumber);
                userInfo = addTeamate.getOfficeNumber();
                break;
            case 'Engineer':
                addTeamate = new Engineer(name, id, employee.github);
                userInfo = addTeamate.github;
                break;
            case 'Intern':
                addTeamate = new Intern(name, id, employee.school);
                userInfo = addTeamate.getSchool();
                break;
            default:
                addTeamate = new Employee(name, id, email);
        };

        teamCards += `
                    <div class="col-12 col-md-6 col-xl-3 mb-3">
                            <div class="card border border-dark">
                                <div class="card-header bg-dark text-center text-white ">
                                    
                                        
                                            <h2 class="bg-secondary"><strong>${addTeamate.getName()}</strong></h2>
                                            <br>
                                            <h5 class="subtitle is-6">${addTeamate.getRole()}</h5>
                                        
                                    
                                    <div class="card-body">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item list-group-item-dark">Id: ${addTeamate.getId()}</li>
                                            <li class="list-group-item">Email: <a href="mailto:${addTeamate.getEmail()}">${addTeamate.getEmail()}</a></li>
                                            <li class="list-group-item list-group-item-dark">Office Number: ${userInfo}</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>`
    });
    return teamCards;
};

const generate = pageTemplate => {
    return `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Team Profile Generator</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            </head>
            <body>

                <header class="bg-info text-center text-white p-3 mb-5">    
                    <h1 class="title has-text-centered">My Team:</h1>
                </header>

                <main class="col-12 col-lg-12 d-flex flex-column">

                    <div class="m-5 row justify-content-around">
                        ${addEmployee(pageTemplate)}
                    </div>

                </main>
            </body>
        </html>
    `;
}

module.exports = generate;
