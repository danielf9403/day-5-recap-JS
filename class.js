class Car {
    constructor (make, model, year, color, trim){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.trim = trim;
        this.sunRoof = false;
        this.engineType = "v6";
    }

    upgrade(isSunRoof){
        this.sunRoof = isSunRoof;
    }

    upgradeEngine(){
        this.engineType = "v8"
    }

    changeYear(year){
        this.year = year;
    }

    printDetails(){
        console.log(`make: ${this.make} \nmodel: ${this.model} \nyear: ${this.year} \ncolor: ${this.color} \ntrim: ${this.trim} \nengine type: ${this.engineType} `);
    }
}

const kiaCar = new Car("kia", "ev6", "2022", "color", "hatchback")
console.log(kiaCar);
kiaCar.printDetails();
kiaCar.upgradeEngine();
kiaCar.printDetails();
kiaCar.changeYear("2021");
kiaCar.printDetails();
