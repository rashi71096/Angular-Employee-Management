export class Employee {
    id: string;
    firstName: string;
    lastName: string;
    designation: string;
    age: number;
    constructor(id: string, firstName: string, lastName: string, designation: string, age: number) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
        this.age = age
    }
}