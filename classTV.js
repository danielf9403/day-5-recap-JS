// serch channels
// increase or decrease volume
// ajust th contract
// turn on or off
// imput source
// ajust color

class CabeleChannels {
    constructor(){
        this.localChannels = [];
        this.location = "NYC";
    }
    inializeChannels(location, numbers){
        this.location = location;
        for(let i = 0 ; i < numbers; i++){
           this.localChannels.push(`Chanel ${i}`);
        }
    }
    showChannels(){
        if(this.localChannels.length > 0){

        }else{
            this.localChannels.forEach((channels) => console.log(channels));
            console.log("There is no channel existing, please try again!")
        }   
    }
}

class TV extends CabeleChannels {
    constructor(size, brand, resolution, color) {
        super()  // super must be first
        this.size = size;
        this.brand = brand;
        this.resolution = resolution;
        this.color = color;
        this.volume = 20;
    }

    increaseVolume(){
        if()
    }

    decreaseVolume(){}

    configureChannelslToTv(){}
}

const localNetwork = new CabeleChannels ("North Carolina", 50);

const BasicTv = new TV("80 in", "TLC", "4k", "Space Gray" );

BasicTv.showChannels();
BasicTv.inializeChannels();
BasicTv.showChannels();
