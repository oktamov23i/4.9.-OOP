//
class Student {
    constructor(firstName, lastName, phone, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.address = address;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    info() {
        return `Name: ${this.getFullName()}, Phone: ${this.phone}, Address: ${this.address}`;
    }
}

//
class Teacher {
    constructor(lastName, firstName, address, salary, level) {
        this.lastName = lastName;
        this.firstName = firstName;
        this.address = address;
        this.salary = salary;
        this.level = level;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    description() {
        return `Name: ${this.getFullName()}, Address: ${this.address}, Salary: ${this.salary}, Level: ${this.level}`;
    }
}

//
class Group {
    constructor(name, room, level, studentCounts, teacher) {
        this.name = name;
        this.room = room;
        this.level = level;
        this.studentCounts = studentCounts;
        this.teacher = teacher;
    }

    fullInformation() {
        return `Group: ${this.name}, Room: ${this.room}, Level: ${this.level}, Students: ${this.studentCounts}, Teacher: ${this.teacher.getFullName()}`;
    }
}

//
class Payment {
    constructor(from, to, amount, date, status) {
        this.from = from;
        this.to = to;
        this.amount = amount;
        this.date = date;
        this.status = status;
    }

    getStatus() {
        return `Payment from ${this.from} to ${this.to} of ${this.amount} is ${this.status ? 'completed' : 'pending'}`;
    }
}

//
class Salary {
    constructor(to, amount, type, date, status) {
        this.to = to;
        this.amount = amount;
        this.type = type;
        this.date = date;
        this.status = status;
    }

    getInfo() {
        return `Salary to: ${this.to}, Amount: ${this.amount} ${this.type}, Date: ${this.date}, Status: ${this.status ? 'paid' : 'unpaid'}`;
    }
}

//
class Organization {
    constructor(name, founder, address, employeeCount) {
        this.name = name;
        this.founder = founder;
        this.address = address;
        this.employeeCount = employeeCount;
    }

    getInfo() {
        return `Organization: ${this.name}, Founder: ${this.founder}, Address: ${this.address}, Employees: ${this.employeeCount}`;
    }
}


const student = new Student("Ali", "Valiyev", "+998901234567", "Tashkent");
console.log(student.info());

const teacher = new Teacher("Karimov", "Ulugbek", "Tashkent", 1200, "Senior");
console.log(teacher.description());

const group = new Group("Math", "Room 101", "Advanced", 25, teacher);
console.log(group.fullInformation());

const payment = new Payment("John", "Nurbek", 1000, 12345654654, false);
console.log(payment.getStatus());

const salary = new Salary("Mike", 150, "USD", 1231231231321, true);
console.log(salary.getInfo());

const organization = new Organization("TechCorp", "John Doe", "Silicon Valley", 400);
console.log(organization.getInfo());
