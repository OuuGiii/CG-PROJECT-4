var scale = 80;

/*
 * Creating a perspective camera uses the following attributes
 * fov — Camera frustum vertical field of view.
 * aspect — Camera frustum aspect ratio.
 * near — Camera frustum near plane.
 * far — Camera frustum far plane.
 */
function createFixedPerspectiveCamera() {
	'use strict';

	let fov = 30;
	let aspect = window.innerWidth / window.innerHeight;
	let near = 1;
	let far = 1000;
	var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(10, 10, 20);
	camera.lookAt(scene.position);

	return camera;
}

function createFixedOrthographicCamera() {
	'use strict';

	let left = window.innerWidth / -scale;
	let right = window.innerWidth / scale;
	let top = window.innerHeight / scale;
	let bottom = window.innerHeight / -scale;
	let near = 1;
	let far = 1000;

	createPauseScreen();
	var camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
	camera.position.copy(cameras.perspectiveCamera.position);
	camera.add(pause);
	pause.position.set(0, 0, -1);
	camera.lookAt(pScene.position);

	return camera;
}

function createPauseScreen(){
	'use strict';

	var geometry = new THREE.PlaneGeometry(20, 20);
	var material = new THREE.MeshBasicMaterial({map: TEXTURES.PAUSE, transparent: true});
	pause = new THREE.Mesh(geometry, material);

}
