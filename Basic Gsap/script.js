///Gsap to and from basic:

gsap.to("#box",{
    x:700,
    duration:2,// duration means animation ta kototime projonto cholbe
    delay:1,//animation start hoite koto time lagbe
    backgroundColor:"#fff",
    rotate:360,
    scale:0.5
});

gsap.to("#box1",{
    x:700,
    y:200,
    duration:2,
    delay:1,
    backgroundColor:"black",
    rotate:360,
    scale:0.5
})
//bbox 1 er kaj ta just reverse  korer jonno sob same to same box1 just gsap.from use korsi 
gsap.from("#box2",{
    x:700,
    y:200,
    duration:2,
    delay:1,
    backgroundColor:"black",
    rotate:360,
    scale:0.5
})


gsap.from("h1",{
    x:700,
    duration:2,
    delay:1,
    backgroundColor:"red",
    stagger:1,// same types er jinish eer modde ek sathe start na kore one bby  one start korte chaile stagger use korbo ete same jinish er modde inerval create kore dae 
    repeat: 2,//repeat er value jotober dibo animation ta totober repeat hobe jodi -1 die dei tokon  infinit loop e continiously cholte thakbe
    yoyo:true,// etar jonnnno reverse  e kaj korbe startt to end and end to start
})

//Gsap timeline()
var tl= gsap.timeline()
tl.to("h2",{
    x:600,
    duration:1
})
tl.to("h3",{
    x:800,
    duration:2
})