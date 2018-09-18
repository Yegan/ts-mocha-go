import Person from './person';

export default function greet (person: Person){
    return `Hello ${person.firstName} ${person.lastName} we cant contact you`;
}