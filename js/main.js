var cameras = {
	perspectiveCamera: null,
	orthographicCamera: null
};
var renderer, scene;
var clock = new THREE.Clock();
var delta = 0;

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

function createScene() {
	'use strict';
	scene = new THREE.Scene();
}

function render() {
	'use strict';
	renderer.render(scene, scene.activeCamera);
}

function animate() {
	'use strict';

	delta = clock.getDelta();
	// Under here the parts that should be animated should be added
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
