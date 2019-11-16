var cameras = {
	perspectiveCamera: null,
	orthographicCamera: null
};

var renderer, scene, pScene, controls, pause;
var clock = new THREE.Clock();
var delta = 0;

var triggerLightningCalculation = false;

var ballMovement = true;
var directionalLight = null,
		pointLight = null,
		directionalLightON = true,
		pointLightON = true;

var MATERIAL_TYPE = {
	ACTIVE: 'BASIC',
	BASIC: 'BASIC',
	PHONG: 'PHONG'
};

function onKeyPress(e) {
	'use strict';
	switch (e.keyCode) {
		case 66: //B
		case 98: //b
			if (scene.paused == false) {
				ballMovement = !ballMovement;
				console.log('The ball is' + (ballMovement == true ? ' moving' : ' stopping'));
			}
			break;
		case 68: //D
		case 100: //d
			if(scene.paused == false){
					directionalLightON = !directionalLightON;
					console.log('Turned the directional light' + (directionalLightON == true ? ' on' : ' off'));
			}
			break;
		case 76: // L
		case 108: // l
			if(scene.paused == false){
					triggerLightningCalculation = true;
			}
			break;
		case 80: //P
		case 112: //p
			if(scene.paused == false){
					pointLightON = !pointLightON;
					console.log('Turned the point light' + (pointLightON == true ? ' on' : ' off'));
			}
			break;
		case 82: //R
		case 114: //s
			if(scene.paused == true) {
				scene.restart = true;
			}
			break;
		case 83: //S
		case 115: //s
			scene.paused = !scene.paused;
			console.log('Scene ' + (scene.paused == true ? 'paused' : 'unpaused'));
			break;
		case 87: // W
		case 119: // w
			if(scene.paused == false){
				wires = !wires;
				console.log('Wireframe is' + (wires == true ? ' on' : ' off'));
			}
			break;
	}
}

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

	if (MATERIAL_TYPE.ACTIVE === MATERIAL_TYPE.PHONG) {
		scene.chessBoard.changeMaterial(MATERIAL_TYPE.BASIC);
		scene.dice.changeMaterial(MATERIAL_TYPE.BASIC);
		scene.ball.changeMaterial(MATERIAL_TYPE.BASIC);
		MATERIAL_TYPE.ACTIVE = MATERIAL_TYPE.BASIC;
		console.log('Turned lightning calculations OFF');
	} else if (MATERIAL_TYPE.ACTIVE === MATERIAL_TYPE.BASIC) {
		scene.chessBoard.changeMaterial(MATERIAL_TYPE.PHONG);
		scene.dice.changeMaterial(MATERIAL_TYPE.PHONG);
		scene.ball.changeMaterial(MATERIAL_TYPE.PHONG);
		MATERIAL_TYPE.ACTIVE = MATERIAL_TYPE.PHONG;
		console.log('Turned lightning calculations ON');
	}
}

function createScene() {
	'use strict';
	scene = new THREE.Scene();
	cameras.perspectiveCamera = createFixedPerspectiveCamera();
	scene.chessBoard = createChessBoard(0, 0, 0);
	scene.dice = createDice(0, 1 + Math.cos(Math.PI / 4) / 2, 0);
	scene.center = createCenterPoint(0, 0, 0);
	scene.ball = createBall(scene.center, 3, 1, 1);
	scene.paused = false; //if scene is paused or not (S)
	scene.restart = false; //if scene is to be restarted (R)
}

function createPauseScene() {
	'use strict';
	pScene = new THREE.Scene();

	cameras.orthographicCamera = createFixedOrthographicCamera();
	pScene.add(cameras.orthographicCamera);
}

function render() {
	'use strict';
	renderer.clear();
	renderer.render(scene, cameras.perspectiveCamera);
	if(scene.paused == true){
		renderer.clearDepth();
		renderer.render(pScene, cameras.orthographicCamera);
	}
}

function animate() {
	'use strict';

	delta = clock.getDelta();

	if (scene.paused == true) {
		delta = 0;
	}
	// Under here the parts that should be animated should be added
	if (triggerLightningCalculation === true) {
		toggleLightingCalculation();
		triggerLightningCalculation = false;
	}

	toggleWireframe(wires);

	scene.dice.rotation.y += delta;

	if(directionalLightON == true){
		directionalLight.turnTheSwitch("on");
	} else{
		directionalLight.turnTheSwitch("off");
	}

	if(pointLightON == true){
		pointLight.turnTheSwitch("on");
	} else{
		pointLight.turnTheSwitch("off");
	}

	if (scene.paused == false) {
		if (ballMovement == true) {
			if (scene.ball.speed < BALL_MAX_SPEED) scene.ball.speed += BALL_SPEED_STEP;
			scene.ball.rotation.y += delta;
			scene.ball.rotateAroundDice(scene.center, delta * scene.ball.speed);
		} else {
			if (scene.ball.speed > 0) {
				scene.ball.speed -= BALL_SPEED_STEP;
				scene.ball.rotation.y += delta;
				scene.ball.rotateAroundDice(scene.center, delta * scene.ball.speed);
			}
		}
	} else if (scene.restart == true) {
		console.log('Reseting scene');
		scene.ball.reset(3, 1, 1);
		ballMovement = true;
		scene.dice.reset(0, 1 + Math.cos(Math.PI / 4) / 2, 0);
		scene.center.reset();
		directionalLight.reset();
		pointLight.reset();
		if( MATERIAL_TYPE.ACTIVE === MATERIAL_TYPE.PHONG ) {
			toggleLightingCalculation();
		}
		wires = false;
		scene.paused = false;
		scene.restart = false;
	}

	// controls.update();
	render();
	requestAnimationFrame(animate);
}

function createLights() {
	'use strict';

	directionalLight = createDirectionalLight(0, 0, 10);
	directionalLight.target = scene.chessBoard;
	directionalLight.position.set(0, 20, 10);

	pointLight = createPointLight(-1.5, 1, 1.5);
}

function toggleWireframe(toggle){
	'use strict';
	scene.chessBoard.toggleWireframe(toggle);
	scene.ball.toggleWireframe(toggle);
	scene.dice.toggleWireframe(toggle);
}

function init() {
	'use strict';

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.shadowMap.enabled = true;
	renderer.autoClear = false;

	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	createScene();
	createPauseScene();

	// controls = new THREE.OrbitControls(cameras.perspectiveCamera, renderer.domElement);
	// controls.enableZoom = true;

	render();
	createLights();
	window.addEventListener('resize', onResize);
	window.addEventListener('keypress', onKeyPress);
}
