
// NOTE: data Was put together by Karl Rupp and is located at  https://raw.githubusercontent.com/karlrupp/microprocessor-trend-data/master/42yrs/transistors.dat
// You can read his analysis of it at https://www.karlrupp.net/2018/02/42-years-of-microprocessor-trend-data/

// NOTE: check this data against other sources

// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var createScene = function () {
    
    var scene = new BABYLON.Scene(engine);  
    // Set up a basic scene, including a camera and lighting
    var scene = new BABYLON.Scene(engine);
    scene.createDefaultCameraOrLight(true, true, true);
    scene.cameras[0].radius = 20;                   // Move the camera back so it's easier to see everything in the scene
    scene.clearColor = BABYLON.Color3.White();       // Set the scene's background color
    

    d3.csv("history.csv",function(data) {
        var year, transistors;
        for (let index = 0; index < 3; index++) {
            year = Math.floor(data[index].year);
            count = Math.floor(data[index].transistors*1000);
            console.log("Row", index,"is:",year, "Transistors:", count);
        }
        console.log("\n\n And now for the main show!");

        var lastYear = data.length - 1;
        var maxScale = 1.2;

        function calculateScale(current) {
            var lastYear = data.length - 1;
            return data[current].transistors / data[lastYear].transistors * maxScale + 0.005;
        }

     BABYLON.SceneLoader.ImportMesh("", "", "robot-head.glb", scene, function (meshes) {          

            var robot =  scene.getMeshByID("node_id5");
            robot.position.y = -5.2;
            var scale = calculateScale(0);
            console.log( 'Starting Scale:', scale);
            scene.getMeshByID("node_id5").scaling = new BABYLON.Vector3(scale, scale, scale);

            var titleLabel = simpleTextBlock("Moore's Law & Why Exponential Growth Matters", {x: 0, y: 7.7, z:0, fontSize: "36px", width: "850px", height:  "150px"  }, scene);   
            var yearLabel = simpleTextBlock('Test', {x: 0, y: -6, z:0, fontSize: "24px", width: "550px", height:  "150px"  }, scene);   
            var frequencyLabel = simpleTextBlock('Frequency', {x: 0, y: -7, z:0, fontSize: "24px", width: "550px", height:  "150px"  }, scene);   
            var sourceLabel  = simpleTextBlock('Source: Karl Rupp, "42 Years of Microprocessor Trend Data"', 
                                {x: 0, y: -8, z:0, fontSize: "9px", width: "550px", height:  "150px"  }, scene);
            var i = 0;
            var lastScale = scale;

            i = 0;

            function showYear() {
                console.log('Year, lastYear:', i, lastYear);
                if (i > lastYear) {
                    return 1;
                };
                year = Math.floor(data[i].year);
                transistors = Math.floor(data[i].transistors*1000); 
                yearLabel.text = 'Year: ' +  year;        
                frequencyLabel.text = 'Transistors/chip: ' +  transistors.toLocaleString();

                scale = calculateScale(i);
                console.log("lastscale:", lastScale, "scale:", scale);

                var animation = new BABYLON.Animation('animation', 'scaling', 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, 
                BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
                // BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
                var keyframes = [ 
                        { frame: 0,     value: new BABYLON.Vector3(lastScale, lastScale, lastScale) },
                        { frame: 30,   value: new BABYLON.Vector3(scale, scale, scale) }
                ];
                animation.setKeys(keyframes);
                robot.animations = [animation];

                scene.beginAnimation(robot, 0, 30, false, 1, showYear);

                lastScale = scale;
                i = i + 1;
            };

            showYear();

        });
    });

    return scene;
};

// "Render" the scene so we can see it
var scene = createScene();
scene.createDefaultCamera()

// scene.debugLayer.show();

engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
