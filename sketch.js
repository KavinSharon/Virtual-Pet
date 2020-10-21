//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImage,happyDogImage;
function preload()
{
  //load images here
  dogImage = loadImage("images/doglmg.png")
  happyDogImage = loadImage("images/doglmg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200,200,10,10);
  dog.addImage("jdh",dogImage);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  
  background(46,139,87);
  drawSprites();
  //add styles here

}



