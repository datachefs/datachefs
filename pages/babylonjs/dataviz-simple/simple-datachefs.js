
function strawberry(text, scene) {

    console.log( 'Starting simple text block: ' +  text);
};


/**  simpleTextBlock: create a simple text label
Required:  text; the options for x, y, z; the scene
NOTE: I called it simpleTextBlock instead of, for ex, simpleLabel, as a little foreshadowing:
that way, if they see examples on the BabylonJS playground that use TextBlock, they'll have some clue as to what's going on 
*/
function simpleTextBlock(text, options, scene) {

    // Create the ground/plane and give it a dynamic texture, to which the TextBlock will be attached 
    var ground =  BABYLON.MeshBuilder.CreateGround("ground", {height: 26, width: 26, subdivisions: 2}, scene);     
    ground.position = new BABYLON.Vector3(options.x, options.y, options.z);
    var rotation = (options.rotation === undefined) ? {x: 4.6, y: 0, z: 0}  : options.rotation;
    ground.rotation = new BABYLON.Vector3(rotation.x, rotation.y, rotation.z);
    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(ground, 1024, 1024);    

    var guiText = new BABYLON.GUI.TextBlock("label" + text);
    guiText.text = text;
    guiText.color =     (options.color === undefined) ?     "black"     : options.color;
    guiText.fontSize =  (options.fontSize === undefined) ?  "72px"      : options.fontSize;
    guiText.width =     (options.width === undefined) ?     "450px"     : options.width;
    guiText.height =    (options.height === undefined) ?    "550px"     : options.height;
    // guiText.textWrapping= true;
    // guiText.lineSpacing = percentage;
    advancedTexture.addControl(guiText);
};