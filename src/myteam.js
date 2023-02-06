
function getEmp(team) {

    function getM (manager) {
    return `
    <div class="card col-sm-4 mb-3 mb-sm-0  mx-2 my-3 shadow-sm" style="width: 16rem;">
    <div class="card-header  bg-primary text-light w-100" style="max-width: 100">
        <h2>${manager.getName()}</h2>
        <h3>${manager.getRole()}</h3>
    </div>
    <div class="card-body">
        <div class="btn-group-vertical col-12" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-light btn-outline-primary">${manager.getId()}</button>
            <input type="button" class="btn btn-light btn-outline-primary" onclick="location.href='mailto:${manager.getEmail()}';" value="Email" />
            <button type="button" class="btn btn-light btn-outline-primary">${manager.getOfficeNumber()}</button>
        </div>
    </div>
    
    </div>
    `
    }
    
    function getE (engineer) {
    return `
    <div class="card col-sm-4 mb-3 mb-sm-0  mx-2 my-3 shadow-sm" style="width: 16rem;">
    <div class="card-header  bg-primary text-light w-100" style="max-width: 100">
        <h2>${engineer.getName()}</h2>
        <h3>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <div class="btn-group-vertical col-12" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-light btn-outline-primary">${engineer.getId()}</button>
            <input type="button" class="btn btn-light btn-outline-primary" onclick="location.href='mailto:${engineer.getEmail()}';" value="Email" />
            <input type="button" class="btn btn-light btn-outline-primary" onclick="location.href='https://github.com/${engineer.getGitName()}';" value="GitHub" />
        </div>
    </div>
    
    </div>
    `
    }
    
    function getI (intern) {
    return `
    <div class="card col-sm-4 mb-3 mb-sm-0  mx-2 my-3 shadow-sm" style="width: 16rem;">
    <div class="card-header  bg-primary text-light w-100" style="max-width: 100">
        <h2>${intern.getName()}</h2>
        <h3>${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <div class="btn-group-vertical col-12" role="group" aria-label="Vertical button group">
            <button type="button" class="btn btn-light btn-outline-primary">${intern.getId()}</button>
            <input type="button" class="btn btn-light btn-outline-primary" onclick="location.href='mailto:${intern.getEmail()}';" value="Email" />
            <button type="button" class="btn btn-light btn-outline-primary">${intern.getSchool()}</button>
        </div>
    </div>
    
    </div>
    `
    }
    
    var htmlArr = [];

    htmlArr.push(team.filter(employee => employee.getRole()=== "Manager")
    .map(manager => getM(manager)));
    console.log("HTML RESULT: ", htmlArr);

    htmlArr.push(team.filter(employee => employee.getRole()=== "Engineer")
    .map(engineer => getE(engineer)));
    console.log("HTML RESULT: ", htmlArr);

    htmlArr.push(team.filter(employee => employee.getRole()=== "Intern")
    .map(intern => getI(intern)));
    console.log("HTML RESULT: ", htmlArr);

    return htmlArr.join("")
}



const genHtml = team => {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <title></title>
        <meta charset="UTF-8" />
        <title>MiniProject!</title>
        <!-- <meta name="viewport" content="width-device-width, initial scale=1" /> -->
        <!-- <link rel="stylesheet" type="text/css" href="./Assets/css/reset.css" /> -->
        <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    </head>
    
    <body>
        <header>
            <div id="my-team">
                <h1 class="p-5 mb-2 text-center text-light fs-3">My Team</h1>
            </div>
        </header>
    
        <div class="contents row justify-content-center">
        ${getEmp(team)}
        </div>
    </body>
    </html>
    `
}

module.exports = genHtml;