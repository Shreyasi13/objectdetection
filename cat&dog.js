objects=[];
status1= ""
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: Detecting Objects";
}
img=""
function preload(){
    img= loadImage('dog_cat.jpg')
}
function draw(){
    image(img, 0,0,640,420);
    if(status1 !=""){
for(i=0; i < objects.length; i++){

    document.getElementById("status").innerHTML = "Status : Object Detected";
    document.getElementById("number_of_objects").innerHTML= "Number of objects detected are : "+ objects.length;
    fill("#FF0000");
    percent = floor(objects[i].confidence*100);
    text(objects[i].label + " "+ percent + "%", objects[i].x, objects[i].y );
    noFill();
    stroke("#FF0000");
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
    }
}

function modelLoaded(){
    console.log("MODEL LOADED!")
    status1 =true;
    objectDetector.detect(img, gotresult);

}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects= results;
}