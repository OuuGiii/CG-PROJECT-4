function createBall(x, y, z) {
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

	// One way to move the ball around a point
	ball.rotateAroundPoint = function(point, delta) {
		var vectorToPoint = new THREE.Vector3(0, 0, 0);
		vectorToPoint.x = point.x - this.position.x;
		vectorToPoint.z = point.z - this.position.z;

		var movementVector = new THREE.Vector3(0, 0, 0);
		movementVector.x = vectorToPoint.z;
		movementVector.z = -vectorToPoint.x;
		movementVector = movementVector.normalize();

		this.position.addScaledVector(movementVector, delta);
	};

	ball.position.set(x, y, z);
	ball.castShadow = true;
	scene.add(ball);

	return ball;
}
