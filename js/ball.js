function createBall(center, x, y, z) {
	'use strict';

	var geometry = new THREE.SphereGeometry(0.5, 16, 16);
	var material = new THREE.MeshBasicMaterial({ color: COLORS.WHITE, map: TEXTURES.LENA });
	var ball = new THREE.Mesh(geometry, material);

	ball.materials = {
		BASIC: new THREE.MeshBasicMaterial({ color: COLORS.WHITE, map: TEXTURES.LENA }),
		PHONG: new THREE.MeshLambertMaterial({ color: COLORS.WHITE, map: TEXTURES.LENA })
	};

	ball.changeMaterial = function(type) {
		switch (type) {
			case 'BASIC':
				this.material = this.materials.BASIC;
				break;
			case 'PHONG':
				this.material = this.materials.PHONG;
		}
	};

	ball.rotateAroundDice = function(center, delta){
		center.rotation.y += delta;
	}

	ball.speed = 3;

	ball.position.set(x, y, z);
	ball.castShadow = true;
	center.add(ball);

	return ball;
}

function createCenterPoint(x, y, z){
		'use strict';

		var center = new THREE.Object3D();

		center.position.set(0, 0, 0);
		scene.add(center);
		center.position.set(x, y, z);
		return center;
}
