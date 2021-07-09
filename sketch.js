var hasdocked,himg;
var himg2,himg3,himg4;
var spacecraft,simg;
var bg,bgimg;

function setup() {
  createCanvas(displayWidth,displayHeight);
  spacecraft = createSprite(500, 400, 50, 50);
  spacecraft.addImage(simg);
  spacecraft.scale = 1.1;

  hasdocked = createSprite(450,500,50,50);
  hasdocked.addImage(himg);
  hasdocked.scale = .2;
}

function preload(){
bgimg = loadImage("spacebg.jpg");
simg = loadImage("iss.png");
himg = loadImage("s1.png");
himg2 = loadImage("s2.png");
himg3 = loadImage("s3.png");
himg4 = loadImage("s4.png");
}

function draw() {
  image(bgimg,0,0,width,height);
  if(keyDown(UP_ARROW)){
    hasdocked.addImage(himg2);
    hasdocked.y =hasdocked.y-10;
  }

  if(keyDown(DOWN_ARROW)){
    hasdocked.addImage(himg2);
    }

    if(keyDown(RIGHT_ARROW)){
      hasdocked.addImage(himg4);
      hasdocked.x =hasdocked.x+10;
    }

    if(keyDown(LEFT_ARROW)){
      hasdocked.addImage(himg3);
      hasdocked.x =hasdocked.x-10;
    }

  
  
  

  drawSprites();
}