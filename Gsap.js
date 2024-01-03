//--------------Simple Tweens-----------//

// .to tweens to the bellow values
TweenMax.to(element, 1, { // 1 is animation duration
    x: 100, // move right 100px
    y: 100, // move down 100px
    autoAlpha: 0, // fade out to opacity 0 and visibility hidden
    ease: Power3.easeIn // set easing
   });
   
   // .from tweens from the chosen values to the current values 
   TweenMax.from(element, 1, { // can be '#id', '.class' or var
    x: 100, // move from 100px right to the current position
    y: 100, // move from 100px down to the current position
    autoAlpha: 0, // fade in from opacity 0 to the current
    ease: Power3.easeOut // set easing
   });

//--------------Relative values-----------//

x: '100%' // move to the right by 100% of element's width
y: '100%' // move down by 100% of element's height
x: '+=50px' // move related to the current x value +50px
y: '-=50px' // move related to the current y value -50px
xPercent: -50 // position relative to center on X axis
yPercent: -50 // position relative to center on Y axis	


//--------------TimelineMax-----------//
// create a timeline
var tl = new TimelineMax({options});

// TimelineMax options
// also can be used directly on TweenMax tweens
delay: 2;// number of secs before animation starts
paused: true; // default is false
repeat: 2; // number of repeats or -1 for infinite loop
repeatDelay: 1; // number of secs between repeats
yoyo: true; // tween goes back and forth (needs repeat)

// chain multiple tweens
tl.to(element, 1, {x: 50, y: 0})
  .to(element, 1, {x: 50, y: 50})
  .to(element, 1, {x: -50, y: 0});
// start tween 0.5 sec into the timeline
tl.to(element, 1, {scale: 0.5}, 0.5);
// overlap tween with previous by 0.5 sec
tl.to(element, 1, {scale: 0.5}, '-=0.5');
// delay tween by 0.5 sec from the previous
tl.to(element, 1, {scale: 0.5}, '+=0.5');
// set tween without animating
tl.set(element, {xPercent: -50});
// add label with 1 sec delay
tl.add('allOut', '+=1');
// select tween with a label (add same label to
// multiple tweens to time animations perfectly)
tl.to(element, 1, {scale: 0.5}, 'allOut');
// staggerFrom, staggerTo, staggerFromTo
tl.staggerFrom(object, 1, {
 autoAlpha: 0, x: 200
}, 0.3); // stagger(delay) each element's start time

		


//--------------Easing-----------//
ease: Power1, Power2, Power3, Power4 // strength of ease
ease: Sine, Expo, Circ, Bounce // basic easing options
      .easeOut // start faster and slow down at the end
      .easeIn // start slower and speed up at the end
      .easeInOut // start slower and finish slower
ease: Power0.easeNone // linear easing
ease: Power1.easeOut // default ease if not stated
// advanced easing with special config options
ease: Back, Elastic, Rough, SlowMo, Stepped
// pass on different parameters inside config
      Elastic.easeIn.config(1, 0.5)
ease: CustomEase // create your own ease
//https://greensock.com/ease-visualizer
//https://greensock.com/custom-bounce
//https://greensock.com/custom-wiggle



//--------------Function-based values-----------//

TweenMax.to(".box", 1, {
    x: function() {
      return Math.random() * 300; // Math.random() returns
    } // a number between 0 and 1
  });
  // use the index parameter to tween each element's
  // x value in increments of 100
  TweenMax.to(".box", 1, {
    x: function(index) {
      return (index + 1) * 100 // 100, 200, 300
    }
  })

//--------------Transforming-----------//
transformOrigin: '50%, 0%' // or center top bottom left right
rotation: 360 // rotate object in degress
scale: 2 // scale element to 200%
scaleX: 2;scaleY: 2; // scale only X or Y axis
force3D: false // avoid blur when making 2d transforms on SVG's



//--------------Callback functions-----------//
// function to prevent animation running till the end
// useful when you don't want to fade out on the last repeat
tl.from(cta, 1, {
	x: 300,
	onComplete: stopAnim // run stopAnim() when tween completes
}); 

var times = 2; // how many times to run anim in total
function stopAnim() {
    if (times = 0) { 
        timeline.pause();
    }
    times--;
}
// all callback functions
onComplete, onCompleteParams, onRepeat, onRepeatParams, onStart,
onReverseComplete, onReverseCompleteParams, onStartParams, 
onUpdate, onUpdateParams, startAt, onOverwrite, callbackScope
//https://greensock.com/docs/#/HTML5/GSAP/TweenMax/




//--------------Timeline controls-----------//
tl.play(); // play timeline
tl.play(5); // play 5s from start (if -5 from end)
tl.seek('allOut'); // jump in timeline to label or secs
tl.timeScale(2); // speed up or slow down timeline
tl.pause(); // pause timeline
tl.resume(); // continue paused timeline
tl.reverse(); // reverse playback anytime
tl.restart(); // restart timeline
tl.progress(0.5); // skip to halfway



//--------------Nesting timelines-----------//
// create main timeline
var timeline;

// create a function returning first timeline
function firstTl() {
  var tl = new TimelineMax()
  .from(element, 1, {vars});
  return tl;
}
// create a function with master timeline
function masterTl() {
  timeline = new TimelineMax({repeat:-1})
  .add( firstTl() );
  return timeline;
}
// start after all elements finished loading
window.onload = function() { 
	masterTl();
}




//--------------Delayed call function-----------//
// pause animation after 30sec
var maxAnimationTime = 30;
TweenMax.delayedCall(maxAnimationTime, stopAnim);
function stopAnim() {
    tl.pause();
}


//--------------Code snippets-----------//
// cycle through an array when using stagger
staggerFromTo(variable, 1, {
    cycle: {
      // an array of values
      x: [-100, -70, 100, 70],
      ease: Back.easeOut
    }
}, 0.5);
///https://codepen.io/jasonbaciulis/pen/EZvOrM
// animate cta on banner hover
var banner = document.getElementById('banner');
var tween = TweenMax.to('#cta-btn', 0.5, {scale: 1.2, paused: true});

banner.addEventListener('mouseenter', function() {
  tween.play();
});
banner.addEventListener('mouseleave', function() {
  tween.reverse();
});
///https://codepen.io/jasonbaciulis/pen/pRdLpR
// random value within min/max range
var duration = R(1, 3);
// set tween duration to a random number between 1 & 3
TweenMax.to(elm, duration, {x: 200});

function R(min, max) {
  return min + Math.random() * (max - min);
}
///https://codepen.io/jasonbaciulis/pen/gLXgVZ




//--------------Useful tricks-----------//
clearProps: 'all' // clear inline styles when tween is over
immediateRender: false // prevent immediate rendering e.g. 
// when using .from()
// get duration of the timeline including repeats and delays
console.log('duration is: ' + tl.totalDuration());
TweenMax.defaultEase = Power3.easeInOut; // change default ease
// kill all tweens of a particular object anytime
TweenMax.killTweensOf(yourObject); // or use id like "#box"



//--------------Timeline controls-----------//
https://greensock.com/get-started-js
https://codepen.io/collection/js-jump-start/
https://codepen.io/GreenSock/
https://codepen.io/GreenSock/try-bonus-plugins/
https://codepen.io/chrisgannon/
https://codepen.io/osublake/
https://codepen.io/dipscom/
https://codepen.io/dipscom/posts/
https://codepen.io/MAW/
https://codepen.io/ihatetomatoes/
https://codepen.io/jonathan/
https://codepen.io/PointC/
https://codepen.io/sdras/




