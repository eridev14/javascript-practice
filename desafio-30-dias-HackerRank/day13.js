'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }

    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here

    constructor(firstName, lastName, idNumber, scores) {
        super(firstName, lastName)
        this.idNumber = idNumber;
        this.scores = scores;
    }

    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here

    calculate() {
        if (!(this.firstName.length >= 1 && this.firstName.length)) return;
        if (!(this.lastName.length >= 1 && this.lastName.length)) return;
        if (!this.idNumber.length === 7) return;
        if (this.scores.length < 0 || this.scores.length > 100) return;

        let grade = '';

        let prom = this.scores.reduce((ac, val) => ac + val, 0) / this.scores.length;
        if (prom >= 90 && prom <= 100) grade = 'O'
        if (prom >= 80 && prom < 90) grade = 'E'
        if (prom >= 70 && prom < 80) grade = 'A'
        if (prom >= 55 && prom < 70) grade = 'P'
        if (prom >= 40 && prom < 55) grade = 'D'
        if (prom < 40) grade = 'T'

        return grade;
    }

}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)

    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
