function createBall(dice){
  'use strict';

  var distance_to_dice = 3;
  var ball = new THREE.Object3D();

  var geometry = new THREE.SphereGeometry(1, 16, 16);
  var material =new THREE.MeshBasicMaterial({color: COLORS.WHITE, wireframe: true});
  var mesh = new THREE.Mesh(geometry, material);

  ball.materials = {
    BASIC: new THREE.MeshBasicMaterial({color: COLORS.WHITE}),
    LAMBERT: new THREE.MeshPhongMaterial({color: COLORS.WHITE}),
    PHONG: new THREE.MeshLambertMaterial({color: COLORS.WHITE})
  };

  ball.movement = function(){
    this.rotation.y += 0.05; //add to globals
  }

  mesh.position.set(0, 0, 0);
  ball.add(mesh);
  dice.add(ball);
  ball.add(new THREE.AxesHelper(2));

  //positions the ball based on world axis and not dice axis
  ball.position.set(dice.position.x + distance_to_dice, dice.position.y, dice.position.z + distance_to_dice);
  var distance = new THREE.Vector3(ball.position.x - dice.position.x, ball.position.y - dice.position.y, ball.position.z - ball.position.z);
  ball.position.applyAxisAngle(distance.normalize(), Math.PI/4);

  return ball;
}
