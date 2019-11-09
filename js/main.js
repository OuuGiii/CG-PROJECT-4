var cameras = {
	perspectiveCamera: null,
	orthographicCamera: null
};
var renderer, scene;
var clock = new THREE.Clock();
var delta = 0;

var triggerLightningCalculation = false;
var triggerShadowType = false;

var MATERIAL_TYPE = {
	ACTIVE: 'BASIC',
	BASIC: 'BASIC',
	LAMBERT: 'LAMBERT',
	PHONG: 'PHONG'
};

function onKeyDown(e) {
	'use strict';
	switch (e.keyCode) {
	}
}

function onKeyPress(e) {
	'use strict';
	switch (e.keyCode) {
		case 48: //0
			break;
		case 49: //1
			break;
		case 50: //2
			break;
		case 51: //3
			break;
		case 52: //4
			break;
		case 53: //5
			break;
		case 76: // L
		case 108: // l
			triggerLightningCalculation = true;
			break;
		case 77: // M
		case 109: // m
			triggerShadowType = true;
			break;
		case 87: // W
		case 119: // w
			scene.traverse(function(node) {
				if (node instanceof THREE.Mesh) {
					node.material.wireframe = !node.material.wireframe;
				}
			});
			break;
		case 83: //S
		case 115: //s
			scene.paused = !scene.paused;
			break;
	}
}

function onKeyUp(e) {
	'use strict';
	switch (e.keyCode) {
	}
}

// TODO: Add so EVERY CAMERA RESIZES!!!
function onResize() {
	'use strict';
	cameras.perspectiveCamera.aspect = window.innerWidth / window.innerHeight;
	cameras.perspectiveCamera.updateProjectionMatrix();

	// notify the renderer of the size change
	renderer.setSize(window.innerWidth, window.innerHeight);
	// update the camera
	cameras.orthographicCamera.left = -window.innerWidth / scale;
	cameras.orthographicCamera.right = window.innerWidth / scale;
	cameras.orthographicCamera.top = window.innerHeight / scale;
	cameras.orthographicCamera.bottom = -window.innerHeight / scale;
	cameras.orthographicCamera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function toggleLightingCalculation() {
	'use strict';

	if (MATERIAL_TYPE.ACTIVE === MATERIAL_TYPE.LAMBERT || MATERIAL_TYPE.ACTIVE === MATERIAL_TYPE.PHONG) {
		scene.chessBoard.changeMaterial(MATERIAL_TYPE.BASIC);
		scene.dice.changeMaterial(MATERIAL_TYPE.BASIC);
		scene.ball.changeMaterial(MATERIAL_TYPE.BASIC);
		MATERIAL_TYPE.ACTIVE = MATERIAL_TYPE.BASIC;
		console.log('Turned lightning calculations OFF');
	} else if (MATERIAL_TYPE.ACTIVE === MATERIAL_TYPE.BASIC) {
		scene.chessBoard.changeMaterial(MATERIAL_TYPE.LAMBERT);
		scene.dice.changeMaterial(MATERIAL_TYPE.LAMBERT);
		scene.ball.changeMaterial(MATERIAL_TYPE.LAMBERT);
		MATERIAL_TYPE.ACTIVE = MATERIAL_TYPE.LAMBERT;
		console.log('Turned lightning calculations ON');
	}
}

function toggleShadowType() {
	'use strict';

	if (MATERIAL_TYPE.ACTIVE === MATERIAL_TYPE.LAMBERT) {
		scene.chessBoard.changeMaterial(MATERIAL_TYPE.PHONG);
		scene.dice.changeMaterial(MATERIAL_TYPE.PHONG);
		scene.ball.changeMaterial(MATERIAL_TYPE.PHONG);
		MATERIAL_TYPE.ACTIVE = MATERIAL_TYPE.PHONG;
		console.log('Turned material to PHONG');
	} else if (MATERIAL_TYPE.ACTIVE === MATERIAL_TYPE.PHONG) {
		scene.chessBoard.changeMaterial(MATERIAL_TYPE.LAMBERT);
		scene.ball.changeMaterial(MATERIAL_TYPE.LAMBERT);
		scene.dice.changeMaterial(MATERIAL_TYPE.LAMBERT);
		MATERIAL_TYPE.ACTIVE = MATERIAL_TYPE.LAMBERT;
		console.log('Turned material to LAMBERT');
	}
}

function createScene() {
	'use strict';
	scene = new THREE.Scene();
	scene.chessBoard = createChessBoard(0, 0, 0);
	scene.dice = createDice(0, 2, 0);
	scene.ball = createBall(scene.dice);
	scene.paused = false; //if scene is paused or not (S)
}

function render() {
	'use strict';
	renderer.render(scene, scene.activeCamera);
}

function animate() {
	'use strict';

	delta = clock.getDelta();
	// Under here the parts that should be animated should be added
	if (triggerLightningCalculation === true) {
		toggleLightingCalculation();
		triggerLightningCalculation = false;
	}
	if (triggerShadowType === true) {
		toggleShadowType();
		triggerShadowType = false;
	}
	if(!scene.paused){
		scene.dice.rotation.y += 0.01; //add to globals (dont want merge errors right now)
		scene.ball.movement();
	}

	render();
	requestAnimationFrame(animate);
}

function init() {
	'use strict';

	renderer = new THREE.WebGLRenderer({ antialias: true });

	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();
	cameras.orthographicCamera = createFixedOrthographicCamera();
	cameras.perspectiveCamera = createFixedPerspectiveCamera();
	scene.activeCamera = cameras.perspectiveCamera;
	render();

	window.addEventListener('resize', onResize);
	window.addEventListener('keydown', onKeyDown);
	window.addEventListener('keypress', onKeyPress);
	window.addEventListener('keyup', onKeyUp);
}
