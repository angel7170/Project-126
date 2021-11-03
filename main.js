function setup(){
    canvas = createCanvas(800,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,800,600);
}

