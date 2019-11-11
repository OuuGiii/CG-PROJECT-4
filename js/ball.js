function createBall(dice) {
	'use strict';

	var distance_to_dice = 3;

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

	ball.movement = function(delta) {
		this.rotation.y += 1 * delta; //add to globals
	};

	ball.position.set(0, 0, 0);

	//positions the ball based on world axis and not dice axis
	ball.position.set(dice.position.x + distance_to_dice, dice.position.y, dice.position.z + distance_to_dice);
	var distance = new THREE.Vector3(ball.position.x - dice.position.x, ball.position.y - dice.position.y, ball.position.z - ball.position.z);
	ball.position.applyAxisAngle(distance.normalize(), Math.PI / 6); //works but why??? should be /4

	ball.castShadow = true;
	dice.addBall(ball);
	return ball;
}
