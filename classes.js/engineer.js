const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, gitName){
        super(name, id, email);
        this.gitName = gitName;
    }
    getRole(){
        return 'Engineer';
    }
}

const engineer = new Engineer();