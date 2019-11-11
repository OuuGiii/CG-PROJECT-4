function createBall(dice){
  'use strict';

  var distance_to_dice = 3;

  var geometry = new THREE.SphereGeometry(0.5, 16, 16);
  var material =new THREE.MeshBasicMaterial({color: COLORS.WHITE});
  var ball = new THREE.Mesh(geometry, material);

  ball.materials = {
    BASIC: new THREE.MeshBasicMaterial({color: COLORS.WHITE}),
    LAMBERT: new THREE.MeshPhongMaterial({color: COLORS.WHITE}),
    PHONG: new THREE.MeshLambertMaterial({color: COLORS.WHITE})
  };

  ball.changeMaterial = function(type) {
    switch (type) {
      case 'BASIC':
        this.material = this.materials.BASIC;
        break;
      case 'LAMBERT':
        this.material = this.materials.LAMBERT;
      case 'PHONG':
        this.material = this.materials.PHONG;
    }
  };

  ball.movement = function(){
    this.rotation.y += 0.05; //add to globals
  }

  ball.position.set(0, 0, 0);
  ball.add(new THREE.AxesHelper(2));

  //positions the ball based on world axis and not dice axis
  ball.position.set(dice.position.x + distance_to_dice, dice.position.y, dice.position.z + distance_to_dice);
  var distance = new THREE.Vector3(ball.position.x - dice.position.x, ball.position.y - dice.position.y, ball.position.z - ball.position.z);
  ball.position.applyAxisAngle(distance.normalize(), Math.PI/6); //works but why??? should be /4


  dice.addBall(ball);
  return ball;
}
