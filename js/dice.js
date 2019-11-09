function createDice(x, y, z){
    'use strict';

    var dice = new THREE.Object3D();

    // var loader = new THREE.CubeTextureLoader();
    // // loader.setPath( 'img/' );
    //
    // var textureCube = loader.load( [
    // 	'img/dice1.png', 'img/dice2.png',
    // 	'img/dice3.png', 'img/dice4.png',
    // 	'img/dice5.png', 'img/dice6.png'
    // ] );
    // var material = new THREE.MeshBasicMaterial({color: 0xffffff, map: textureCube});

    var geometry = new THREE.CubeGeometry(1,1,1);
    var material =new THREE.MeshBasicMaterial({color: COLORS.WHITE});
    var mesh = new THREE.Mesh(geometry, material);

    dice.materials = {
      BASIC: new THREE.MeshBasicMaterial({color: COLORS.WHITE}),
      LAMBERT: new THREE.MeshPhongMaterial({color: COLORS.WHITE}),
      PHONG: new THREE.MeshLambertMaterial({color: COLORS.WHITE})
    };

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
    dice.position.set(0, 2, 0);
    console.log(dice);
    return dice;
}
