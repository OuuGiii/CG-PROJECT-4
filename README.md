# CG-PROJECT-4

### Part 4
Interactive Scene with Spot Light, Messages and Textures

### Goals
- The objectives of the fourth part of the lab work are to deepen the lighting knowledge with the pointlight concept and to understand the basic principles of texture application.  
- Good programming practices are expected to allow us to adapt existing code so that we can reset the scene without reloading the application (ie without refreshing the page).

### Evaluation
The evaluation of the fourth part of the work will be carried out in the week from 18 to 22 November and corresponds to 4 values ​​of the laboratory grade.  This work has an estimated effort of 10 hours per group member, spread over two weeks.

### Tasks
1. Create a chess board
    * It should be applied a texture and a bump map to simulate the relief on the surface wood.  
2. Create a ball
    * The surface of the ball must have a strong specular component and have applied a texture of the Mona Lisa or Lenna image (see links at end of utterance). 
3. Create a dice
    * The dice should be a single solid to which a texture and bump map are also applied to simulate the relief of the numbers (or other figures) present on each face of the dice.
    * The die must lie on one of its vertices on the center of the board and rotate on itself.  [1.0 value]
4. Create directional light
    * The directional light source shall be at a non-zero angle to that of the board. 
    * The point-of-light source shall be placed on the board in a position such that it may at least partially illuminate the board but shall illuminate the ball and the dice well.  
    * These lights can be on or off ('D' key for directional light and 'P' key for spot light).  
    * Additionally the entire scene must be able to be drawn in wire model (tecla W ’key) and whether or not to use lighting calculation (‘ L ’key).  [1.0 value]
5. Create spotlight
    * These lights can be on or off ('D' key for directional light and 'P' key for spot light).  
    * Additionally the entire scene must be able to be drawn in wire model (tecla W ’key) and whether or not to use lighting calculation (‘ L ’key).  [1.0 value]
6. Add ball movement
    * While initially stationary, the ball must move over the board in a circular motion around the dice without touching it and also rotate about itself.  
    * The ball must start its movement and stop when the ‘B’ key is pressed.  
    * In both cases it must accelerate from immobility to full speed and vice versa.  [1.0 value]
7. Make pausing possible
    * It shall be allowed to pause the display when the user presses the 'S' key and resume by pressing the key again.  
    * While paused, a message should be displayed on the screen that should always be readable, regardless of the camera position. 
8. Make refresh possible
    * When paused, it should be possible to return to the initial state (reset) without using browser refresh, ie by pressing a key ('R' key).  [1.0 value]

### Additional notes
1. All textures must react to lighting
2. To use textures in local mode it is necessary to configure browser permissions.  The problem and the solution are described in the three.js documentation.
    * https://threejs.org/docs/#manual/introduction/How-to-run-thing-locally
3. To pause, just “freeze” the time.  This will require the use of a few lines of code.
4. The pause message should be about the game and can be achieved by applying a texture to an object.  They are not supposed to write text.  Use a second orthogonal projection and a second viewport.

An example of a game die is shown.  However, other options for the data are welcome.
 
The famous image of 'Lenna' is available on Wikipedia - https://en.wikipedia.org/wiki/Lenna#/media/File:Lenna_(test_image).png
