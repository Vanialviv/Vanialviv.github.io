$(document).ready(function(){
  
    var controller = new ScrollMagic.Controller();
    
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#project01',
        triggerHook: 0.8
    })
    .setClassToggle('#project01', 'fadein')
    
    .addTo(controller);
    
});
$(document).ready(function(){
  
    var controller = new ScrollMagic.Controller();
    
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#project02',
        triggerHook: 0.8
    })
    .setClassToggle('#project02', 'fadein')
    
    .addTo(controller);
    
});
$(document).ready(function(){
 
    var controller = new ScrollMagic.Controller();
    
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#project03',
        triggerHook: 0.8
    })
    .setClassToggle('#project03', 'fadein')
    
    .addTo(controller);
    
});
$(document).ready(function(){
  
    var controller = new ScrollMagic.Controller();
    
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#project04',
        triggerHook: 0.8
    })
    .setClassToggle('#project04', 'fadein')
    
    .addTo(controller);
    
});
$(document).ready(function(){
 
    var controller = new ScrollMagic.Controller();
    
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#project05',
        triggerHook: 0.8
    })
    .setClassToggle('#project05', 'fadein')
    
    .addTo(controller);
    
});
$(document).ready(function(){
 
    var controller = new ScrollMagic.Controller();
    
    var ourScene = new ScrollMagic.Scene({
        triggerElement: '#project06',
        triggerHook: 0.8
    })
    .setClassToggle('#project06', 'fadein')
   
    .addTo(controller);
    
});

$(document).ready(function(){
 
     var controller = new ScrollMagic.Controller();
   var slideParallaxScene = new ScrollMagic.Scene({
       triggerElement: '.secondblock',
       triggerHook: 0.8,
       duration: '200%'
   } )
   .setTween(TweenMax.from('.bcg', 1, {y: '-30%', ease:Power0.easeNone}))
   .addIndicators()
   .addTo(controller);
    
});
