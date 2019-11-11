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

	return light;
}
