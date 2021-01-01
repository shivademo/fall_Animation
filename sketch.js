var rain = [], drop, backgroundImage,backgroundImage1;

function preload(){
    getbackgroundImage()
    backgroundImage1=loadImage("morning.jpg")
  }

function setup(){
    
    createCanvas(windowWidth, windowHeight);

    //making 400 drops and putting into rain
    for (var i = 0; i<400; i++){
        drop = new Drop(random(0,width),random(0,height));
        rain.push(drop)
    }
}

function draw(){
    if(backgroundImage){
        background(backgroundImage);
      }else{
          background(backgroundImage1);
      }
    
    for (var i = 0; i < rain.length; i++) {
        rain[i].display();
        rain[i].fall();
        
    }
    
}

async function getbackgroundImage(){
    var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/kolkata")
    var responseJSON=await response.json()

    var dayTime=responseJSON.datetime

    var hour=dayTime.slice(11,13)
    console.log(hour)

    if (hour>=6 && hour <=18) {
      backgroundImage=loadImage("morning.jpg")
    } else {
      backgroundImage=loadImage("night.jpg")
    }
  
  }
