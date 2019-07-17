console.log("Here we go");

// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var computing = [
    {year: 1970, transistors:    2000},
    {year: 1980, transistors:   10000},
    {year: 1990, transistors:   50000},
    {year: 1995, transistors:  200000},
    {year: 2000, transistors:  600000},
    {year: 2005, transistors: 1000000}
];

var lastYear = computing.length - 1;
var maxTransistors = computing[lastYear].transistors;
// console.log(lastYear, computing[lastYear].year);

function calculateScale(current) {
    var lastYear = computing.length - 1;
    return computing[current].transistors / computing[lastYear].transistors * 2;
}


var createScene = function () {
    
    var scene = new BABYLON.Scene(engine);  
        // Set up a basic scene, including a camera and lighting
        var scene = new BABYLON.Scene(engine);
        scene.createDefaultCameraOrLight(true, true, true);
        scene.cameras[0].radius = 20;                   // Move the camera back so it's easier to see everything in the scene
        scene.clearColor = BABYLON.Color3.White();       // Set the scene's background color

        // BABYLON.SceneLoader.ImportMesh("", "", "sandwich.glb", scene, function (meshes) {     
        BABYLON.SceneLoader.ImportMesh("", "", "robot-head.glb", scene, function (meshes) {          

        var robot =  scene.getMeshByID("node_id5");
        robot.position.y = -7;
        var scale = 0.1;
        scene.getMeshByID("node_id5").scaling = new BABYLON.Vector3(scale, scale, scale);
        var titleLabel = simpleTextBlock("Why Moore's Law Matters", {x: 0, y: 7, z:0,
            fontSize: "12px", width: "150px", height:  "150px"  }, scene);   
        var yearLabel = simpleTextBlock('Test', {x: 0, y: 6, z:0,
            fontSize: "24px", width: "150px", height:  "150px"  }, scene);   
        var frequencyLabel = simpleTextBlock('Frequency', {x: 0, y: 5, z:0,
            fontSize: "24px", width: "150px", height:  "150px"  }, scene);   


        // for (let j = 0; j < computing.length; j++) {
        //     console.log(j, ': Scale is ', calculateScale(j));
            
        // }

        var maxScale = 1.25;
        var i = 0;

        yearLabel.text = 'Year:' +  computing[i].year;        
        frequencyLabel.text = computing[i].transistors.toLocaleString();

        var yearScale = (computing[i].transistors / computing[lastYear].transistors) * maxScale;
        console.log(i, 'scale:', yearScale)
        
    //     var robotAnimation = new BABYLON.Animation("robot", "robot.scale.y", 30, 
    //     BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    //     var keys = [];
    //     keys.push({frame: 0, value: 0.1});
    //     keys.push({frame: 60, value: 0.6});
    //    // keys.push({frame: 0, value: robot.scale});
    //     // keys.push({frame: 60, value: yearScale});
    //     // keys.push({frame: 0, value: new BABYLON.Vector3(0.1, 0.1, 0.1)});
    //     // keys.push({frame: 60, value: new BABYLON.Vector3(0.7, 0.7, 0.7)});
    //     robotAnimation.setKeys(keys);
    //     scene.beginAnimation(robot, 0, 100, true);

    var plane = BABYLON.Mesh.CreatePlane("ground1", 2 , scene);

    var animation = new BABYLON.Animation('animation', 'scaling', 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    // An array with all animation keys
    var keyframes = [
        {
            frame: 0,
            value: new BABYLON.Vector3(1, 1, 1)
        },
        {
            frame: 120,
            value: new BABYLON.Vector3(2, 2, 2)
        }
    ];

    animation.setKeys(keyframes);

    plane.animations = [animation];

   scene.beginAnimation(plane, 0, 120, true);

   var box = BABYLON.Mesh.CreateBox("myBox", 2, scene);
   box.position = new BABYLON.Vector3(0, -10, 0);
   var myMaterial = new BABYLON.StandardMaterial("myMaterial", scene);
   myMaterial.diffuseColor =  new BABYLON.Color3.Teal();
   box.material = myMaterial;

   var animationBox = new BABYLON.Animation("movingBox", "position.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                   BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
   // Animation keys
   var keys = [];
   keys.push({ frame: 0, value: -10 });
   keys.push({ frame: 20, value: 20 });

   animationBox.setKeys(keys);
   box.animations.push(animationBox);

   scene.beginAnimation(box, 0, 100, true);

        // scale = 0.1;
        // // scale = (computing[i].transistors /  computing[lastYear].transistors) / 2;
        // scene.getMeshByID("node_id5").scaling = new BABYLON.Vector3(scale, scale, scale);
        // console.log(time, scale);

        // i = i + 1;


//         scene.beginDirectAnimation(box, [yRot], 0, 2 * frameRate, false, 1, nextAnimation);

// var nextAnimation = function() {
//     scene.beginDirectAnimation(box, [xSlide], 0, 2 * frameRate, true);
// }


// BABYLON.Animation.ANIMATIONTYPE_VECTOR3


// var yRot = new BABYLON.Animation("yRot", "rotation.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

// var nextAnimation = function() {
//     scene.beginDirectAnimation(box, [xSlide], 0, 2 * frameRate, true);

// }

// scene.beginDirectAnimation(box, [yRot], 0, 2 * frameRate, false, 1, nextAnimation);


// ou can start an animation with enableBlending = true to enable blending mode. This blended animation will interpolate FROM the current object's state.



        

        

    });

    return scene;
};

// "Render" the scene so we can see it
var scene = createScene();
scene.createDefaultCamera()

// scene.debugLayer.show();

engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
