import assert from 'assert';
import  { GreetInXhosa,GreetInFrench } from '../greet-in';

let xhosa = new GreetInXhosa();
let french = new GreetInFrench();
describe('My function', function(){
    it('should test', function(){
        assert.equal(2,2)
    });
});
describe('greet person in xhosa', function(){
    it('should greet greg in xhosa', function(){
        assert.equal(xhosa.greet('Greg'), 'Molo, Greg')
    })
});

describe('greet person in french', function(){
    it('should greet greg in french', function(){
        assert.equal(french.greet('Greg'), 'Bonjour, Greg')
    })
});