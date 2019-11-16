function createDice(x, y, z) {
	'use strict';

	var dice = new THREE.Object3D();

	dice.materials = {
		BASIC: _diceMaterials.basic,
		PHONG: _diceMaterials.phong
	};

	var geometry = new THREE.CubeGeometry(1, 1, 1);
	var mesh = new THREE.Mesh(geometry, dice.materials.BASIC);

	dice.changeMaterial = function(type) {
		switch (type) {
			case 'BASIC':
				this.children[0].material = this.materials.BASIC;
				break;
			case 'PHONG':
				this.children[0].material = this.materials.PHONG;
				break;
		}
	};

	dice.reset = function (x, y, z) {
		dice.position.set(x, y, z);
		dice.rotation.y = 0;
	}

	dice.toggleWireframe = function (toggle) {
		for(var face of dice.children[0].material){
			face.wireframe = toggle;
		}
	}

	mesh.position.set(0, 0, 0);
	mesh.rotation.z = Math.PI / 4;
	mesh.rotation.x = Math.PI / 4;
	mesh.castShadow = true;
	dice.add(mesh);
	scene.add(dice);
	dice.position.set(x, y, z);
	return dice;
}
