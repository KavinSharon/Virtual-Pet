//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImage,happyDogImage;
function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png")
  happyDogImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(220,220,10,10);
  dog.addImage(dogImage);
  dog.scale = 0.200;
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(happyDogImage);
  }
  drawSprites();
  fill("white");
  textSize(20);
  text("Note:Press Up Arrow Key To Feed Your Dog Drago Milk",100,30);

  //add styles here
  fill("red");
  text ("Food Remaining: "+foodS,180,150);
}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}
