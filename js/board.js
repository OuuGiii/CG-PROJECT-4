const CHESSBOARD_WIDTH = 10;
const CHESSBOARD_HIGHT = 1;
const SQUARE_WIDTH = 1;

function createChessBoard(x, y, z) {
	var chessBoard = new THREE.Object3D();

	chessBoard.width = CHESSBOARD_WIDTH;
	chessBoard.height = CHESSBOARD_HIGHT;

	chessBoard.exterior = createExterior(chessBoard);
	chessBoard.interior = createInterior(chessBoard);

	chessBoard.changeMaterial = function(type) {
		switch (type) {
			case 'BASIC':
				this.exterior.left.material = this.exterior.left.materials.BASIC;
				this.exterior.right.material = this.exterior.right.materials.BASIC;
				this.exterior.top.material = this.exterior.top.materials.BASIC;
				this.exterior.bottom.material = this.exterior.bottom.materials.BASIC;

				for (var square of this.interior.squares) {
					square.material = square.materials.BASIC;
				}
				break;
			case 'PHONG':
				this.exterior.left.material = this.exterior.left.materials.PHONG;
				this.exterior.right.material = this.exterior.right.materials.PHONG;
				this.exterior.top.material = this.exterior.top.materials.PHONG;
				this.exterior.bottom.material = this.exterior.bottom.materials.PHONG;
				for (var square of this.interior.squares) {
					square.material = square.materials.PHONG;
				}
				break;
		}
	};

	chessBoard.toggleWireframe = function(toggle){
		chessBoard.exterior.toggleWireframe(toggle);
		chessBoard.interior.toggleWireframe(toggle);
	}

	chessBoard.position.set(x, y, z);
	scene.add(chessBoard);

	return chessBoard;
}

function createExterior(chessBoard) {
	var exterior = new THREE.Object3D();

	exterior.width = 0.5;

	// Setting so the center of the chessboard will be at position (0,0,0)
	var positionOfLeftExterior = 0 - (chessBoard.width - exterior.width) / 2;
	var positionOfRightExterior = 0 + (chessBoard.width - exterior.width) / 2;
	var positionOfTopExterior = 0 + (chessBoard.width - exterior.width) / 2;
	var positionOfBottomExterior = 0 - (chessBoard.width - exterior.width) / 2;

	exterior.left = createExteriorPart(exterior, exterior.width, chessBoard.height, chessBoard.width, positionOfLeftExterior, 0, 0);
	exterior.right = createExteriorPart(exterior, exterior.width, chessBoard.height, chessBoard.width, positionOfRightExterior, 0, 0);
	exterior.top = createExteriorPart(exterior, chessBoard.width, chessBoard.height, exterior.width, 0, 0, positionOfTopExterior);
	exterior.bottom = createExteriorPart(exterior, chessBoard.width, chessBoard.height, exterior.width, 0, 0, positionOfBottomExterior);

	exterior.toggleWireframe = function(toggle){
		for(var i = 0; i < 6; i++)
			//works only with left since it updates the global material
			exterior.left.material[i].wireframe = toggle;
	}

	chessBoard.add(exterior);

	return exterior;
}

function createExteriorPart(exterior, width, height, depth, x, y, z) {
	'use strict';
	var geometry = new THREE.BoxGeometry(width, height, depth);
	var exteriorPart = new THREE.Mesh(geometry, _chessboardExteriorMaterials.basic);

	// TODO: ADD TEXTURE

	exteriorPart.materials = {
		BASIC: _chessboardExteriorMaterials.basic,
		PHONG: _chessboardExteriorMaterials.phong
	};

	exteriorPart.position.set(x, y, z);
	exteriorPart.receiveShadow = true;

	exterior.add(exteriorPart);

	return exteriorPart;
}

function createInterior(chessBoard) {
	'use strict';
	var interior = new THREE.Object3D();

	interior.width = chessBoard.width - 2 * chessBoard.exterior.width;
	interior.height = chessBoard.height - 2 * chessBoard.exterior.height;

	interior.squares = createInteriorSquares(interior);

	interior.toggleWireframe = function(toggle){
		for(var square of interior.squares){
			square.material.wireframe = toggle;
		}
	}

	chessBoard.add(interior);

	return interior;
}

function createInteriorSquares(interior) {
	var squares = [];
	var leftRange = 0 - (interior.width - SQUARE_WIDTH) / 2;
	var rightRange = 0 + (interior.width - SQUARE_WIDTH) / 2;
	var topRange = 0 + (interior.width - SQUARE_WIDTH) / 2;
	var bottomRange = 0 - (interior.width - SQUARE_WIDTH) / 2;

	var is_odd_row = true;
	var use_dark_color = false;

	for (var z = topRange; z >= bottomRange; z--) {
		is_odd_row = !is_odd_row;
		use_dark_color = is_odd_row;
		for (var x = leftRange; x <= rightRange; x++) {
			use_dark_color = !use_dark_color;
			createSquare(interior, squares, x, z, use_dark_color);
		}
	}

	return squares;
}

function createSquare(interior, squares, x, z, use_dark_color) {
	'use strict';
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material;
	var map, bumpMap;

	if (use_dark_color) {
		map = TEXTURES.WOOD1;
		bumpMap = TEXTURES.WOOD1BMP;
		material = new THREE.MeshBasicMaterial({
			map: map,
			color: COLORS.SADDLE_BROWN,
			wireframe: wires
		});
	} else {
		map = TEXTURES.WOOD2;
		bumpMap = TEXTURES.WOOD2BMP;
		material = new THREE.MeshBasicMaterial({
			map: map,
			color: COLORS.PERU_BROWN,
			wireframe: wires
		});
	}
	var square = new THREE.Mesh(geometry, material);

	square.materials = {
		BASIC: new THREE.MeshBasicMaterial({ map: map, color: square.material.color, wireframe: wires}),
		PHONG: new THREE.MeshPhongMaterial({ map: map, color: square.material.color, wireframe: wires, bumpMap: bumpMap, bumpScale: 0.05})
	};

	square.position.set(x, 0, z);

	//random rotation for squares
	var random = Math.random() * 10;
	if(0 <= random && random < 2.5){
		square.rotation.y += 0;
	} else if (2.5 <= random && random < 5){
		square.rotation.y += Math.PI/2;
	} else if (5 <= random && random < 7.5){
		square.rotation.y += 3 * Math.PI/2;
	} else{
		square.rotation.y += Math.PI;
	}
	square.receiveShadow = true;

	interior.add(square);

	squares.push(square);
}
