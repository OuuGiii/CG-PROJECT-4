function createPointLight(x, y, z) {
	'use strict';
	var pointLight = new THREE.Object3D();

	pointLight.add(createLight());

	pointLight.turnTheSwitch = function(toggle) {
		'use strict';
		if(toggle == "on")
			this.visible = true;
		else if(toggle == "off")
			this.visible = false;
	};

	pointLight.reset = function() {
		if(this.visible == false) this.visible = true;
	}

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
