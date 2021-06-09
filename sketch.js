var roadImg, virusImg, road, man_Running,man, vaccineImg, vaccine, virus, virusGroup, vaccineGroup
var health = 100
 var PLAY=1;
var END=0;
var gameState=1;

function preload(){
roadImg = loadImage("Background.jpg")
virusImg = loadImage("virus.png")
vaccineImg = loadImage("Vaccine.jpg")
man_Running = loadImage("Man Running.1.jpg","Man Running.2.jpg","Man Running.3.jpg")
}

function setup() {
createCanvas(800,600)

vaccineGroup = new Group()
virusGroup = new Group()

road = createSprite(200,300,800,600)
road.addImage(roadImg)
road.scale = 2
road.velocityX = 3

man = createSprite(585,390,50,50)
man.velocityX = 2
man.addAnimation("running",man_Running)
}

function draw() {
    background(0)
    if(gameState == 1){
        man.x=mouseX
        man.y=mouseY
        
        viruses();
        Vaccine();
        
        if(health == 0){
            gameState=0
            }
            if(road.x>600){
                road.x = road.x/4
            }
                if(vaccineGroup.isTouching(man)){
                    health = health+50
                    vaccineGroup.destroyEach();
                        }
                        if(virusGroup.isTouching(man)){
                            health = health-50
                            virusGroup.destroyEach();
                                }
    }
    if(gameState==0){
    text("You have gotten covid-19 plz go to the hospital immediately",200,200)
    }

 drawSprites();
 textSize(30)
text("health = "+health,600,30)

} 
function viruses(){
    if(frameCount%200==0){
        virus = createSprite(random(10,790),random(10,500),50,50)
        virus.addImage(virusImg)
        virus.velocityX = 2
        virus.scale = 0.1
        virusGroup.add(virus)
    }

}
function Vaccine(){
    if(frameCount%200==0){
        vaccine = createSprite(random(10,790),random(10,500),50,50)
        vaccine.addImage(vaccineImg)
        vaccine.velocityX = 2
        vaccine.scale = 0.1
        vaccineGroup.add(vaccine)
    }
  
}
