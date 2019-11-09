function createPointLight(x, y, z) {
	'use strict';
	var pointLight = new THREE.Object3D();

	pointLight.add(createLight());

	pointLight.turnTheSwitch = function() {
		'use strict';
		this.visible = !this.visible;
		console.log('Turned the pointLight' + (this.light.visible == true ? ' ON' : ' OFF'));
	};

	pointLight.position.set(x, y, z);
	scene.add(pointLight);

	return pointLight;
}




function createLight() {
	'use strict';
	var light = new THREE.PointLight(0xffffff, 5, 300, 2); //color, itensity, distance, decay

	light.castShadow = true;

	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;

	light.shadow.camera.near = 100;
	light.shadow.camera.far = 4000;
	light.shadow.camera.fov = 300;
	return light;
}
