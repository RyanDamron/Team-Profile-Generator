const Employee = require('./employee');

class Intern extends Employee {
    constructor(school){
        super(getName(), getId(), getEmail());
        this.school = school;
    }
}

const intern = new Intern();