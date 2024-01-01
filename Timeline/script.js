// WITHOUT Timelines (only using delays):
gsap.to("#box", { x: 100, duration: 1 });
gsap.to("#box1", { y: 50, duration: 1, delay: 1 }); //wait 1 second
gsap.to("#box2", { opacity: 0, duration: 1, delay: 2 }); //wait 2 seconds


//WITH Timelines 
var tl = gsap.timeline({repeat:-1, repeatDelay: 1});
tl.to("#box", {x: 100, duration: 1});
tl.to("#box1", {y: 50, duration: 1});
tl.to("#box2", {opacity: 0, duration: 1});

//insert exactly 3 seconds from the start of the timeline
tl.to(".class", { x: 100 }, 3);

//create a gap (insert 1 second after end of timeline)
tl.to(".class", { x: 100 }, "+=1");

//overlap end by 1 second
tl.to(".class", { y: 100 }, "-=1");
//insert at the START of the most recently added animation
tl.to(".class", { x: 100 }, "<");
//insert at the END of the most recently added animation
tl.to(".class", { x: 100 }, ">");




// "+=1" - 1 second past the end of the timeline (creates a gap)
// "-=1" - 1 second before the end of the timeline (overlaps)
// "myLabel+=2" - 2 seconds past the label "myLabel"
// "<+=3" - 3 seconds past the start of the previous animation
// "<3" - same as "<+=3" (see above) ("+=" is implied when following "<" or ">")
// ">-0.5" - 0.5 seconds before the end of the previous animation. It's like saying "the end of the previous animation plus -0.5"
// repeatDelay :Number Amount of time in seconds between repeats. For example, if repeat is 2 and repeatDelay is 1, the animation will play initially, then wait for 1 second before it repeats, then play again, then wait 1 second again before doing its final repeat.