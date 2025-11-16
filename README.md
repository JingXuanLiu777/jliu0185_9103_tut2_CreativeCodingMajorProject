# jliu0185--MONDRAIN TOWN (INPUT SECTION) 
This interactive animation draws inspiration from Mondrian's masterpiece Broadway. The composition simulates urban traffic scenes, with circular components representing moving vehicles. Within the framework of a group project, keyboard and button controls govern the movement and colouration of vehicles, simulating the dynamic variations of city traffic throughout the day and night.
![preview](assets/nightcity.png)

## Interaction Notes
The changes and additions were primarily made to the CarAnimation and Sketch code sections.

### Space manipulation
**Spacebar**
- Switches all vehicles to grey, simulating a stationary effect at night
- Pauses all vehicles simultaneously at the current frame
> Function summary:
> **Press Spacebar - All vehicles turn grey + movement pauses+ the environment grew dim**

### Left-hand top button control
In the top-left corner of the screen, create a button labelled "TO DAYTIME" using p5.js.
**Click the "TO DAYTIME" button**
- Restore all cars to their original colour scheme
- Reset all cars to their previous motion state

>Function Summary:
**Press button - Restore colour to cart + Resume movement**
![preview](assets/daytimecity.png)

## Specific methods
I've opted for an input-driven approach to execute the code.
**Implementing interactive controls to achieve the desired effect**
Utilising global variables such as "paused" and "coloured" to regulate the animation state of the vehicle.
>Spacebar: 
function keyPressed() {
    if (key === ' ') {
        paused = true;
        for (const c of cars) {
            c.toGray();
        }
    }
}
`keyPressed()`enables switching between the vehicle's motion states.

>Button:
pauseBtn = createButton();
pauseBtn.mousePressed(() => {
    paused = false;
    for (const c of cars) {
        c.recolor();
    }
});
 This button control the colour switching of the car. When clicked,it restores the colors using`recolor()`and resumes movement`(paused=false)`.

 ## Animated adaptation
 The following formulas were primarily employed:
 > movement:
 this.segLens = [];
 this.totalLenth = 0;
  for (let i = 0; i < this.path.length - 1; i++) {
  let d = p5.Vector.dist(this.path[i], this.path[i + 1]);
  this.segLens.push(d);
  this.totalLenth += d;
}

The core animation for the car's movement along the track involves pre-calculating the distance travelled in each segment and the total length (totalLength). The current position is then determined cyclically using the distance obtained via `advance()`. 

p5.Vector.lerp(a, b, t)
Let animation goes smoothly between the path.

Colour switching:
>car:
let car_Palette = [mondrianRed, mondrianBlue, mondrianYellow];
this.color = option.color || randomCarColor();

Use `recolor()` to extract colour.

## Intra-group distinctions
My work primarily embodies the following distinctions:
**Emphasis on physical objects undergoing "path-based motion"**
-I prioritise the transition of the vehicle's state, focusing chiefly on its dynamic presentation. While preserving other elements unchanged, altering the vehicle's attributes modifies the visual effects.
**Interactive control of narrative pacing**
-Interaction governs the vehicle's movement rather than automatic cycling.
The contrast between static and dynamic states simulates the difference between day and night.


    
## References
！[Assisting in understanding how the cart moves]https://www.youtube.com/watch?v=PRInd3uMdSA

！[Technical support is currently suspended]https://p5js.org/examples/animation-and-variables-animation-with-events/

https://openprocessing.org/sketch/2404618
https://p5js.org/reference/p5/p5.Vector/
https://p5js.org/examples/games-ping-pong/
https://p5js.org/reference/p5.MediaElement/pause/
https://p5js.org/zh-Hans/reference/p5/focused/
https://p5js.org/reference/p5.Vector/lerp/