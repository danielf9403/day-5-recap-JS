// serch channels
// increase or decrease volume
// ajust th contract
// ajust brightness
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
        this.contract = 50;
        this.brightness = 50; 
        this.volume = 20;
        this.max = 100;
        this.min = 0;
        this.brightnessMax = 100;
        this.brightnessMin = 0;
        this.contractMax =100;
        this.contractMin =0;
    }

    increaseVolume(){
        if(this.volume < this.max){
            this.volume + 1;
        }else{
            console.log("Volume is set to max");
        }
    }

    decreaseVolume(){
        if(this.volume < this.min){
            this.volume -= 1;
        }else{
            console.log("Volume is set to mute");
        }
    }

    increaseContract(){
        if(this.contract < this.contractMax){
            this.contract + 1;
        }else{
            console.log("Contract is set to max");
        }
    }

    decreaseContract(){
        if(this.contract < this.contractMin){
            this.contract -= 1;
        }else{
            console.log("Contract is set to min");
        }
    }

    increaseBrightness(){
        if(this.brightness < this.brightnessMax){
            this.brightness + 1;
        }else{
            console.log("Brightness is set to max");
        }
    }

    decreaseBrightness(){
        if(this.brightness < this.brightnessMin){
            this.brightness -= 1;
        }else{
            console.log("Brightness is set to min");
        }
    }

    configureChannelslToTv(){}
}

const localNetwork = new CabeleChannels ("North Carolina", 50);

const BasicTv = new TV("80 in", "TLC", "4k", "Space Gray" );

BasicTv.showChannels();
BasicTv.inializeChannels();
BasicTv.showChannels();
