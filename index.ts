abstract class Person {
    name: string

    constructor(name: string) {
        this.name = name
    }

    display(): void {
        console.log(this.name)
    }

    abstract find(string): Person
}

class Developer extends Person {
    devCode: number

    constructor(name: string, code: number) {
        super(name);
        this.devCode = code
    }

    find(name: string): Person {
        return new Developer(name, 1)
    }
}

let dev: Person = new Developer("Vanya", 100);
dev.display()

let dev2: Person = dev.find("Nikita")
dev2.display()