
// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var delayCreateScene = function () {
    
    var scene = new BABYLON.Scene(engine);  
    scene.createDefaultCameraOrLight(true, true, true);
    // scene.createDefaultEnvironment();


    BABYLON.SceneLoader.ImportMesh("", "", "sandwich.glb", scene, function (meshes) {          

        var sandwich = [  
            {id: "node_id30",  height: 0.0,  name: 'Bottom Bun', chosen: 0},
            {id: 'node_id32',  height: 0.07,  name: 'Hamburger', chosen: 0},
            {id: 'node_id34',  height: 0.05,  name: 'Cheddar Cheese', chosen: 0},
            {id: 'node_id36',  height: 0.03,  name: 'Tomato', chosen: 0},
            {id: 'node_id38',  height: 0.05,  name: 'Pickle', chosen: 0},
            {id: 'node_id40',  height: 0.03,  name: 'Red Onion', chosen: 0},
            {id: 'node_id42',  height: 0.02,  name: 'Top Bun', chosen: 0},
            {id: 'node_id44',  height: 0.05,  name: 'Mustard', chosen: 0},
            {id: 'node_id46',  height: 0.05,  name: 'Ketchup', chosen: 0},
            {id: 'node_id48',  height: 0.05,  name: 'Lettuce', chosen: 0},
        ];

       
        var layer, layer_object;
        <!-- layer_objest.visibility = 0.3; -->

        // var initialY = -0.119;
        
        var initialY = -0.05;
        // var initialY = 0;
        // scene.getMeshByID("node_id30").position.y = initialY;
        var totalHeight = initialY;

        // return scene;
        // for (let i = 0; i < 3; i++) {
        //     // for (let i = 0; i < sandwich.length; i++) {
        //     layer = sandwich[i];
        //     layer_object = scene.getMeshByID(layer.id);
        //     // layer_object.position.y = totalHeight;
        //     // layer_object.position = new BABYLON.Vector3(-0.2, -0.119, 0.27);
        //     console.log(layer.id, layer.name, totalHeight, layer.height);
        //     console.log("\n", sandwich[i].id, (sandwich[i].id == "node_id30"), "\n")
        //     scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, -0.119, 0.27);

            // totalHeight = totalHeight + layer.height;            
        // };


        var i = 0;
        var y = -0.149
        console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y, "\n");
        scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);

        i = 1;
        y = -0.156;
        console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y,"\n");
        scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);


        i = 2;
        y = -0.186;
        console.log("\n", sandwich[i].name, sandwich[i].id, 'is height', y, "\n");
        scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, y, 0.27);

        // scene.getMeshByID(sandwich[i].id).position = new BABYLON.Vector3(-0.2, -0.119, 0.27);

        // scene.getMeshByID("node_id34").position = new BABYLON.Vector3(0, -0.189, 0.27);
        // scene.getMeshByID("node_id46").position = new BABYLON.Vector3(0, -0.226, 0.27);
        // scene.getMeshByID("node_id44").position = new BABYLON.Vector3(0, -0.276, 0.27);
        // scene.getMeshByID("node_id48").position = new BABYLON.Vector3(0, -0.323, 0.27);
        // scene.getMeshByID("node_id36").position = new BABYLON.Vector3(0, -0.357, 0.27);
        // scene.getMeshByID("node_id38").position = new BABYLON.Vector3(0, -0.388, 0.27);
        // scene.getMeshByID("node_id40").position = new BABYLON.Vector3(0, -0.413, 0.27);
        // scene.getMeshByID("node_id42").position = new BABYLON.Vector3(0, -0.436, 0.27);
        // scene.getMeshByID("node_id30").position = new BABYLON.Vector3(-0.2, -0.119, 0.27);
        
        

    });

    return scene;
};

// "Render" the scene so we can see it
var scene = delayCreateScene();
scene.createDefaultCamera()

// scene.debugLayer.show();

engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
