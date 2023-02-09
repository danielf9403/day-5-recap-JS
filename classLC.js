// 1

class Fruit {
    constructor (name){
        this.name = name;
        this.color = this.color; 
    }
}

let bannana = new Fruit("bannana", "yellow");
console.log(bannana)

// 2

class Elevator {
    constructor(){
        this.floor = 1;
    }

    goUp(){
        this.floor +=1;
        console.log('Going up to floor' + this.floor);
    }

    goDown(){
        this.floor -=1;
        console.log('Going down to floor' + this.floor);
    }
}


let elevator = new Elevator();
elevator.goUp();
elevator.goDown();
console.log(elevator);

// 3
class TV{
    constructor (size, brand) {
        this.size = size;
        this.brand = brand;
    }
 }

let myTV = new TV("big", "Sony")
console.log(myTV)





