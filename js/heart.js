function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var screenWidth = $(document).width();
var screenHeight = $(document).height();

function heart(){
    let startLeft = getRandomArbitrary(0, screenWidth);
    let timeRun = getRandomArbitrary(4000, 6000);
    let opacityR = getRandomArbitrary(0.2, 1);
    let endLeft = getRandomArbitrary(startLeft - 100, startLeft + 100);
    let sizeR = getRandomArbitrary(5, 24);
    let snow = document.createElement("SPAN");
    $(snow).addClass("heart-icon fa fa-heart").css({
        "position" : "fixed",
        "z-index" : "200",
        "display" : "block",
        "color" : "#ff0000",
        "top" : 0,
        "left" : startLeft,
        "opacity" : opacityR,
        "font-size" : sizeR + "px"
    })
    .appendTo("body")
    .animate({
        "top" : screenHeight - sizeR,
        "left" : endLeft
    }, timeRun, function(){
        $(this).fadeOut("fast", function(){
            $(this).remove();
        })
    });
}
