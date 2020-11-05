const faker = require('faker');


class Fake {
    constructor() {
        this.name = `${faker.name.title()} ${faker.name.firstName()} ${faker.name.lastName()}`;
        this.company = `${faker.company.companyName()}`;
        this.role = `${faker.name.jobType()}`;
        this.hackerPhrase = `${faker.hacker.phrase()}`;
    }
}


module.exports = Fake;