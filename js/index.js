// Your code goes here

//page load alert
window.addEventListener('load',() => {
    alert("Hey, we're ready!");
});

//change background color with scroll
window.addEventListener('scroll', ()=>{
    var scrollTimer = -1;
        document.body.style.backgroundColor = "orchid";

        if (scrollTimer != -1)
            clearTimeout(scrollTimer);

        scrollTimer = window.setTimeout("scrollFinished()", 800);
       
    
});

function scrollFinished() {
      document.body.style.backgroundColor = "white";
};
     
//resize window event
window.addEventListener('resize', function(event) {
    alert("Enjoy this responsiveness!");
});

//scale up fun bus on mouse over and back on mouse out
const funBusImg= document.querySelector('.intro img');

funBusImg.addEventListener('mouseover', (event) => {
    funBusImg.style.transform ='scale(1.1)';
    funBusImg.styl.transition = 'transform 0.5s';
});

funBusImg.addEventListener('mouseout', (event)=>{
    funBusImg.style.transform = 'scale(1.0)';
    funBusImg.style.transition = 'transform 0.5s';
});

//change header font weight when wheel used 
const headsUp = document.querySelectorAll('.home h2');
const pageWheeler = function(){
    this.style.fontWeight = "900";
};

headsUp.forEach(headsUp =>{
    headsUp.addEventListener('wheel', pageWheeler);
    
});

//add border to img on drag
const trvlImages = document.querySelectorAll('img');

trvlImages.forEach((img)=>{
    img.addEventListener('drag', function(e){
       e.target.style.border= "thick solid red";
    })
})

//move image on dbl click
trvlImages.forEach((img)=>{
    img.addEventListener('dblclick', function(e){
        TweenMax.to(img, 2, {x: 400 })
    })
})

//add shake to sign up btns
const signUp = document.querySelectorAll('.btn');

signUp.forEach((signUp)=>{
    signUp.addEventListener('click', function(){
        TweenMax.set("btn", {xPercent:-50, yPercent:-50});
        var tl = new TimelineMax();
        tl.to("btn", 0.1, {x:20, repeat:21, ease:Power2.easeInOut});
    });

});

//mouse over changes p color
let subliminalP= document.querySelectorAll('.destination p');

subliminalP.forEach((p)=>{
    p.addEventListener('mouseenter', function(e){
      e.target.style.backgroundColor= "yellow";
    })
    p.addEventListener('mouseout', function(e){
        e.target.style.backgroundColor= "";
    })
});

//prevent nav links default behavior
navlinks.forEach((links)=> {
    links.addEventListener('click', function(e){
        e.preventDefault();
    })
});

headsUp.forEach(headsUp =>{
    event.stopPropagation();
    
});
