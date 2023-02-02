const Employee = require('./employee');

class Manager extends Employee {
    constructor(officeNumber){
        super(getName(), getId(), getEmail());
        this.officeNumber = officeNumber;
    }
}

const manager = new Manager();