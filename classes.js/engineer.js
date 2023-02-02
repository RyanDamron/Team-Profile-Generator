const Employee = require('./employee');

class Engineer extends Employee {
    constructor(gitName){
        super(getName(), getId(), getEmail());
        this.gitName = gitName;
    }
}

const engineer = new Engineer();