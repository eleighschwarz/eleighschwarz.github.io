var $filed = $("#filed");
var $polygon = $("polygon");

setInterval(function(){
  $filed.velocity({
            rotateY: "-3deg",
          }, 0).velocity({
            translateY: ".7rem",
            scaleX: ".5",
            scaleY: ".75",
            scaleZ: ".55"
          }, 500, "easeInOutSine").velocity({
            translateY: "1rem",
            scaleX: "1.4",
            scaleY: ".125",
            scaleZ: "1.5"
          }, 900, "swing");
          
        }, 300);

setInterval(function() {
  $polygon
                .velocity({ opacity: 0.7 }, 
                    { loop: 1, duration: 800 });
        }, 1600);