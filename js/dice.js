function createDice(x, y, z){
    'use strict';

    var dice = new THREE.Object3D();

    dice.materials = {
      BASIC: _diceMaterials.basic,
      LAMBERT: _diceMaterials.lambert,
      PHONG: _diceMaterials.phong
    };

    var geometry = new THREE.CubeGeometry(1,1,1);
    var mesh = new THREE.Mesh(geometry, dice.materials.BASIC);


    dice.changeMaterial = function(type) {
  		switch (type) {
  			case 'BASIC':
  				this.children[0].material = this.materials.BASIC;
  				break;
  			case 'LAMBERT':
  				this.children[0].material = this.materials.LAMBERT;
  				break;
  			case 'PHONG':
  				this.children[0].material = this.materials.PHONG;
  				break;
  		}
  	};

    dice.addBall = function(ball){
      this.add(ball);
      this.ball = ball;
    }


    mesh.position.set(0, 0, 0);
    mesh.rotation.z = Math.PI/4;
    mesh.rotation.x = Math.PI/4;
    dice.add(mesh);
    scene.add(dice);
    dice.position.set(x, y, z);
    return dice;
}

function createDiceTexture(){
    'use strict';

    var materialArray = [

    ]
}
