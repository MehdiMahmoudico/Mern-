const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const CreateUser = () => {
    const newUser = {
        FirstName: faker.person.firstName(),
        LastName: faker.person.lastName(),
        PhoneNumber : faker.phone.number(),
        Email : faker.internet.email(),
        Password : faker.internet.password(),
        id : faker.string.uuid(),
    };
    return newUser;
};

const CreateObject = () => {
    const newObject = {
        Name : faker.company.name(),
        street : faker.location.streetAddress(), 
        City : faker.location.city(),
        State : faker.location.state(),
        Country : faker.location.country(),
        PostalCode : faker.location.zipCode(),
        id : faker.string.uuid(),
    };
    return newObject;
};
    
const newUserProduct = CreateUser();
const newCompanyObject = CreateObject();
// console.log(newUserProduct);




app.get("/api/users/new", (req, res) => {
    res.json(newUserProduct);
});

app.get("/api/companies/new", (req, res) => {
    res.json(newCompanyObject);
});
app.get("/api/user/company", (req, res) => {
    res.json({newCompanyObject , newUserProduct});

});


app.listen(5000,() => {
    console.log('Server is running on port 5000');
})