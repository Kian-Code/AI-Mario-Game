function preload() {
	world_start = loadSound("world_start.wav");
	Mario_jump = loadSound("jump.wav");
	Mario_kick = loadSound("kick.wav");
	Mario_coin = loadSound("coin.wav");
	Mario_die = loadSound("mariodie.wav");
	Mario_gameover = loadSound("gaemover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	canvas.parent('Canvas');
	instializeInSetup(mario);
	Video = createCapture(VIDEO);
	Video.size(800, 400);
	Video.parent('Console_Image');
	PoseNet = ml5.poseNet(Video, ModelLoaded);
	PoseNet.on('pose', GotPoses);
}

function draw() {
	game();
}

function ModelLoaded() {
	console.log("Model is loaded");
}

function GotPoses(results) 
{
	if (results.length > 0) 
	{
	console.log(results);
    NoseX = results[0].pose.nose.x;
	NoseY = results[0].pose.nose.y;

	}
}