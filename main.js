tint_colour = "";
noseX = 0;
noseY = 0;
righteyeX = 0;
righteyeY = 0;
setM1 = "";
setM2 = "";
setM3 = "";
setM4 = "";
setM5 = "";
setS1 = "";
setS2 = "";
setS3 = "";
setS4 = "";
setS5 = "";

function preload(){
    mustache1 = loadImage("https://i.postimg.cc/Ssqh2Jz6/Mustache1.png");
    mustache2 = loadImage("https://i.postimg.cc/s2pxCq2k/Mustache2.png");
    mustache3 = loadImage("https://i.postimg.cc/g09yKC5Q/Musatche3.png");
    mustache4 = loadImage("https://i.postimg.cc/G2Ly7dj7/Mustache4.png");
    mustache5 = loadImage("https://i.postimg.cc/wMJR3MxB/Mustache5.png");
    specs1 = loadImage("https://i.postimg.cc/QdHSPxpX/Specs1.png");
    specs2 = loadImage("https://i.postimg.cc/TYXpFkgh/Specs2.png");
    specs3 = loadImage("https://i.postimg.cc/Gpn7ynyd/Specs3.png");
    specs4 = loadImage("https://i.postimg.cc/VNQtMDNK/Specs4.png");
    specs5 = loadImage("https://i.postimg.cc/cLX7nPj0/Specs5.png");
}

function setup(){
    canvas = createCanvas(500, 400);
    canvas.position(900, 300);
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log('Pose Net is initialized');
}

function draw(){
    image(video, 0, 0, 500, 400);
    tint(tint_colour);
    if(setM1 == "set"){
        image(mustache1, noseX - 50, noseY - 3, 110, 50);
    }
    if(setM2 == "set"){
        image(mustache2, noseX - 37, noseY + 15, 80, 30);
    }
    if(setM3 == "set"){
        image(mustache3, noseX - 37, noseY + 15, 80, 20);
    }
    if(setM4 == "set"){
        image(mustache4, noseX - 48, noseY + 15, 100, 30);
    }
    if(setM5 == "set"){
        image(mustache5, noseX - 38, noseY + 10, 80, 80);
    }
    if(setS1 == "set"){
        image(specs1, righteyeX - 30, righteyeY - 30, 120, 50);
    }
    if(setS2 == "set"){
        image(specs2, righteyeX - 30, righteyeY - 20, 120, 40);
    }
    if(setS3 == "set"){
        image(specs3, righteyeX - 30, righteyeY - 25, 120, 45);
    }
    if(setS4 == "set"){
        image(specs4, righteyeX - 30, righteyeY - 30, 120, 50);
    }
    if(setS5 == "set"){
        image(specs5, righteyeX - 33, righteyeY - 35, 130, 60);
    }
}

function mustache(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose x = " + results[0].pose.nose.x);
        console.log("Nose y = " + results[0].pose.nose.y);
    }
}

function spectacles(results){
    if(results.length > 0){
        console.log(results);
        righteyeX = results[0].pose.rightEye.x;
        righteyeY = results[0].pose.rightEye.y;
        console.log("Right Eye x = " + results[0].pose.rightEye.x);
        console.log("Right Eye y = " + results[0].pose.rightEye.y);
    }
}

function must1(){
    poseNet.on('pose', mustache);
    setM1 = "set";
    setM2 = "";
    setM3 = "";
    setM4 = "";
    setM5 = "";
}

function must2(){
    poseNet.on('pose', mustache);
    setM1 = "";
    setM2 = "set";
    setM3 = "";
    setM4 = "";
    setM5 = "";
}

function must3(){
    poseNet.on('pose', mustache);
    setM1 = "";
    setM2 = "";
    setM3 = "set";
    setM4 = "";
    setM5 = "";
}

function must4(){
    poseNet.on('pose', mustache);
    setM1 = "";
    setM2 = "";
    setM3 = "";
    setM4 = "set";
    setM5 = "";
}

function must5(){
    poseNet.on('pose', mustache);
    setM1 = "";
    setM2 = "";
    setM3 = "";
    setM4 = "";
    setM5 = "set";
}

function spec1(){ 
    poseNet.on('pose', spectacles);   
    setS1 = "set";
    setS2 = "";
    setS3 = "";
    setS4 = "";
    setS5 = "";
}

function spec2(){
    poseNet.on('pose', spectacles);
    setS1 = "";
    setS2 = "set";
    setS3 = "";
    setS4 = "";
    setS5 = "";
}

function spec3(){
    poseNet.on('pose', spectacles);
    setS1 = "";
    setS2 = "";
    setS3 = "set";
    setS4 = "";
    setS5 = "";
}

function spec4(){
    poseNet.on('pose', spectacles);
    setS1 = "";
    setS2 = "";
    setS3 = "";
    setS4 = "set";
    setS5 = "";
}

function spec5(){
    poseNet.on('pose', spectacles);
    setS1 = "";
    setS2 = "";
    setS3 = "";
    setS4 = "";
    setS5 = "set";
}

function filter_tint(){
    tint_colour = document.getElementById("filter_colour").value;
}

function take_snapshot(){
    save("Filterpics.png");
}