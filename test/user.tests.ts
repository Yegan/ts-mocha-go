import greet from '../greet'
import assert from 'assert';


assert.equal('Hello Bob Crow we cant contact you', greet({
    firstName: "Bob",
    lastName: "Crow",
    email: 'bob@crow.com'
}));