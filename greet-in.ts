
interface GreetIn{
    greet(name:string):string
}

export class GreetInXhosa implements GreetIn{
    greet (name:string){
        return 'Molo, '+ name;
    }
}

export class GreetInFrench implements GreetIn{
    greet(name:string){
        return 'Bonjour, ' + name;
    }
}
