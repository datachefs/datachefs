
// Get set up
var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

var delayCreateScene = function () {
    
    var scene = new BABYLON.Scene(engine);  

    BABYLON.SceneLoader.ImportMesh("", "", "sandwich.glb", scene, function (meshes) {          
        scene.createDefaultCameraOrLight(true, true, true);
        // scene.createDefaultEnvironment();

        var sandwich = [  
            {id: "node_id30",  height: 1,  name: 'Bottom Bun', chosen: 0},
            {id: 'node_id32',  height: 1,  name: 'Hamburger', chosen: 0},
            {id: 'node_id34',  height: 1,  name: 'Cheddar Cheese', chosen: 0},
            {id: 'node_id36',  height: 1,  name: 'Tomato', chosen: 0},
            {id: 'node_id38',  height: 1,  name: 'Pickle', chosen: 0},
            {id: 'node_id40',  height: 1,  name: 'Red Onion', chosen: 0},
            {id: 'node_id42',  height: 1,  name: 'Top Bun', chosen: 0},
            {id: 'node_id44',  height: 1,  name: 'Mustard', chosen: 0},
            {id: 'node_id46',  height: 1,  name: 'Ketchup', chosen: 0},
            {id: 'node_id48',  height: 1,  name: 'Lettuce', chosen: 0},
        ];

       
        var layer, layer_object;
        <!-- layer_objest.visibility = 0.3; -->
        
        var totalHeight = 0;
        for (let i = 0; i < sandwich.length; i++) {
            console.log(totalHeight);
            layer = sandwich[i];
            layer_object = scene.getMeshByID(layer.id);
            layer_object.position.y = -0.150;
            <!-- totalHeight = totalHeight + ( 0.00005 * layer.height);  -->
            //layer.height;
        };

        a = scene.getMeshByID("node_id30").position.y;
        <!-- scene.getMeshByID("node_id30").position = new BABYLON.Vector3(0, -0.139, 0.27); -->
        scene.getMeshByID("node_id30").position.y = -0.139;
        console.log('From:', a, '\nTo;', scene.getMeshByID("node_id30").position.y);
        console.log(scene.getMeshByID("node_id30").position.y - a)

        scene.getMeshByID("node_id34").position = new BABYLON.Vector3(0, -0.189, 0.27);
        scene.getMeshByID("node_id46").position = new BABYLON.Vector3(0, -0.226, 0.27);
        scene.getMeshByID("node_id44").position = new BABYLON.Vector3(0, -0.276, 0.27);
        scene.getMeshByID("node_id48").position = new BABYLON.Vector3(0, -0.323, 0.27);
        scene.getMeshByID("node_id36").position = new BABYLON.Vector3(0, -0.357, 0.27);
        scene.getMeshByID("node_id38").position = new BABYLON.Vector3(0, -0.388, 0.27);
        scene.getMeshByID("node_id40").position = new BABYLON.Vector3(0, -0.413, 0.27);
        scene.getMeshByID("node_id42").position = new BABYLON.Vector3(0, -0.436, 0.27);
        scene.getMeshByID("node_id30").position = new BABYLON.Vector3(0, -0.119, 0.27);

    });

    return scene;
};

// "Render" the scene so we can see it
var scene = delayCreateScene();
scene.createDefaultCamera()

// scene.debugLayer.show();

engine.runRenderLoop( function(){ scene.render(); } );
window.addEventListener('resize', function(){ engine.resize(); } );     // If the user resizes the browser, update the screen
