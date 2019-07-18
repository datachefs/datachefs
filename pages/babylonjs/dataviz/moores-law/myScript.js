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
var maxScale = 1.25;

function calculateScale(current) {
    var lastYear = computing.length - 1;
    return computing[current].transistors / computing[lastYear].transistors * maxScale + 0.005;
}


var createScene = function () {
    
    var scene = new BABYLON.Scene(engine);  
    // Set up a basic scene, including a camera and lighting
    var scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, true, true);
    scene.cameras[0].radius = 20;                   // Move the camera back so it's easier to see everything in the scene
    scene.clearColor = BABYLON.Color3.White();       // Set the scene's background color
    
    BABYLON.SceneLoader.ImportMesh("", "", "robot-head.glb", scene, function (meshes) {          
        

        var robot =  scene.getMeshByID("node_id5");
        robot.position.y = -5;
        var scale = calculateScale(0);
        console.log( 'Starting Scale:', scale);
        scene.getMeshByID("node_id5").scaling = new BABYLON.Vector3(scale, scale, scale);

        var titleLabel = simpleTextBlock("Why Moore's Law Matters", {x: 0, y: 7.5, z:0, fontSize: "36px", width: "150px", height:  "150px"  }, scene);   
        var yearLabel = simpleTextBlock('Test', {x: 0, y: -6, z:0, fontSize: "24px", width: "150px", height:  "150px"  }, scene);   
        var frequencyLabel = simpleTextBlock('Frequency', {x: 0, y: -7, z:0, fontSize: "24px", width: "150px", height:  "150px"  }, scene);   

        var i = 0;
        var lastScale = scale;

        i = 0;

        function showYear() {
            console.log('Year, lastYear:', i, lastYear);
            if (i > lastYear) {
                return 1;
            };
            yearLabel.text = 'Year: ' +  computing[i].year;        
            frequencyLabel.text = 'Transistors/chip: ', computing[i].transistors.toLocaleString();

            scale = calculateScale(i);
            console.log("lastscale:", lastScale, "scale:", scale);

            var animation = new BABYLON.Animation('animation', 'scaling', 60, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, 
            BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            // BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            var keyframes = [ 
                    { frame: 0,     value: new BABYLON.Vector3(lastScale, lastScale, lastScale) },
                    { frame: 100,   value: new BABYLON.Vector3(scale, scale, scale) }
            ];
            animation.setKeys(keyframes);
            robot.animations = [animation];
            scene.beginAnimation(robot, 0, 100, false, 1, showYear);

            lastScale = scale;
            i = i + 1;
        };

        showYear();

    });

    return scene;
};

// "Render" the scene so we can see it
var scene = createScene();
scene.createDefaultCamera()

// scene.debugLayer.show();

engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
