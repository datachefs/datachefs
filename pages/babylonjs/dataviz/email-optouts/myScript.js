

// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

function delayedAnimation(time, animationObject) {
    var event1 = new BABYLON.AnimationEvent(time, function() { console.log("Yeah, " + time + "!"); }, true);
    animationObject.addEvent(event1);
};


var createScene = function () {
    var scene = simpleEnvironment();
	
    var ball = simpleSphere('ball', -30, 0, 0); 


    var animationball = new BABYLON.Animation("movingball", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    var keys = [];
    keys.push({ frame: 20, value: -30 });
    keys.push({ frame: 60, value: 20 });
    animationball.setKeys(keys);

  

    delayedAnimation(59, animationball);
    delayedAnimation(20, animationball);
    delayedAnimation(40, animationball);

    var animationy = new BABYLON.Animation("movingball", "position.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    var keys = [];
    keys.push({ frame: 0, value: 0 });
    keys.push({ frame: 15, value: 0 });
    keys.push({ frame: 30, value: 10 });
    animationy.setKeys(keys);

    scene.beginDirectAnimation(ball, [animationball, animationy], 0, 100, true);


return scene;
};

var scene = createScene();
simpleRunScene(scene, engine);      // "Render" the scene so we can see it