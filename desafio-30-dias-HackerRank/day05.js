function Person(initialAge) {
    // Add some more code to run some checks on initialAge
    if (initialAge < 0) {
        this.age = 0;
        console.log("Age is not valid, setting age to 0");
    } else {
        this.age = initialAge;
    }


    this.amIOld = function () {
        if (this.age < 13) {
            console.log("You are young.");
        } else if (this.age < 18) {
            console.log("You are a teenager.");
        } else {
            console.log("You are old.");
        }
    };

    this.yearPasses = function () {
        this.age++;
    };
}

const p = new Person(18);
p.amIOld();
p.yearPasses();