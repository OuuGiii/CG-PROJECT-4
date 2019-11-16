function createDirectionalLight(x, y, z) {
	'use strict';
	// white directional light, supposed to illuminate the whole scene
	var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
	directionalLight.position.set(x, y, z);

	directionalLight.castShadow = true;


	directionalLight.turnTheSwitch = function(toggle) {
		'use strict';
		if(toggle == "on")
			this.visible = true;
		else if(toggle == "off")
			this.visible = false;
	};

	directionalLight.turnTheShadows = function() {
		'use strict';
		this.castShadow = !this.castShadow;
		console.log('Turned the shadows' + (this.shadows == true ? 'ON' : 'OFF'));
	}

	directionalLight.reset = function() {
		if(this.visible == false) this.visible = true;
	}

	scene.add(directionalLight);

	return directionalLight;
}
