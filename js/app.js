$(document).ready(function(){
    var musicTracker = 'noMusic';
    var audios = [];

    $(".audio-list li a").each(function(){
            var load = new  Audio($(this).attr("href"));
        load.load();
        load.addEventListener('ended',function(){
            forward();
        });
        audios.push(load);
    });

    var activeTrack = 0;
    var playPause = function() {
        if (musicTracker == 'noMusic') {
            audios[activeTrack].play();
            musicTracker = 'playMusic';
        } else {
            audios[activeTrack].pause();
            musicTracker = 'noMusic';
        }
    };

    var stop = function() {
        if (musicTracker == 'playMusic') {
                audios[activeTrack].pause();
                audios[activeTrack].currentTime = 0;
                audios[activeTrack].play();
        } else {
            audios[activeTrack].currentTime = 0;
        }
    };

    var forward = function(){
        function increment(){
             if (activeTrack < audios.length - 1)
                   activeTrack++;
           else activeTrack = 0;
        }
          if (musicTracker == 'playMusic') {
             audios[activeTrack].pause();
            increment();
             audios[activeTrack].play();
        } else {
          increment();
        }
    };
    
    var backward = function(){
        function decrement(){
             if (activeTrack > 0)
                   activeTrack--;
           else activeTrack = audios.length -1;
        }
          if (musicTracker == 'playMusic') {
             audios[activeTrack].pause();
           decrement();
             audios[activeTrack].play();
        } else {
          decrement();
        }
    };

    var text = [
        "Chào Vợ Yêu,",
        "Vợ là Người con gái Chồng yêu nhất :))",
        "Vợ đáng yêu nhất !",
        "Vợ cũng yêu Chồng nhất :) !",
        "...Hôm nay là sinh nhật của Vợ, người không thể thiếu trong cuộc sống của Chồng.",
        "Cám ơn, Cha Mẹ đã mang Vợ tới thế giới này.",
        "Cám Ơn, Ông Trờ đã sắp sếp cho hai ta quên nhau.",
        "Cám Ơn Vợ, vì đã tới bên Chồng, yêu Chồng.",
        "Sinh nhật Vợ yêu Chồng chúc vợ vui vẻ, hạnh phúc, ...HAPPY BIRTHDAY...",
        "Vợ à:",
        "Có Vợ, Chồng sẽ không cần điều gì khác vợ",
        "Yêu Vợ cho tới khi nào Chồng không còn tồn tại <3",
        "Ngoài Vợ ra Chồng không thể yêu thêm một ai nữa.",
        "Cho dù tương lai có ra sao chồng cũng vẫn sẽ mãi yêu vợ hướng về phía vợ mà đi.",
        "~~ Yêu Vợ Thật Nhìu ~~"
    ];

    var i = 0;
    var textLength = text.length;
    var startLength = 0;
    function typeWriter() {
        if(startLength < textLength){
            if(i < text[startLength].length){
                $("#typed").append(text[startLength].charAt(i));
                i++;
            }else{
                $("#typed").append("<br />");
                i = 0;
                startLength++;
            }
        }else{
            startLength++;
        }
        if(startLength == textLength){
            setTimeout(function(){
                setInterval(function(){
                    getLoveTime();
                }, 1000);
                $("#typed").fadeOut("fast", function(){
                    $(".days").fadeIn("slow");
                });
            }, 1000);
        };
        setTimeout(typeWriter, 80);
    }

    setInterval(() => {
        heart();
    }, 500);

    $("#action-media-control").click(function(){
        $(".media-control").toggleClass("media-control-active");
        if($(this).html() == '<i class="fas fa-chevron-left"></i>'){
            $(this).html('<i class="fas fa-chevron-right"></i>');
        }else{
            $(this).html('<i class="fas fa-chevron-left"></i>');
        }
    });

    $('#stopPlay').click(function(){
        playPause();
        if($(this).html() == '<i class="fas fa-stop"></i>'){
            $(this).html('<i class="fas fa-play"></i>');
        }else{
            $(this).html('<i class="fas fa-stop"></i>');
        }
    });
    $('#prev').click(function(){
        backward();
    });
    $('#next').click(function(){
        forward();
    });
    setTimeout(function(){
        playPause();
    }, 10000);

    setTimeout(() => {
        $(".title").css({
            "visibility" : "hidden",
            "opacity" : "0"
        });
        setTimeout(function(){
            $('.text').fadeIn("slow");
            typeWriter();
        }, 400);
    }, 16600);

    function getLoveTime()
    {
        let start = new Date("November 11, 2016 00:00:00").getTime();
        let now = new Date().getTime();
        let count = now - start;
        let giay = 1000;
        let phut = giay * 60;
        let gio = phut * 60;
        let ngay = gio * 24;
        let d = Math.floor(count / ngay);
        let h = Math.floor((count % ngay) / (gio));
        let m = Math.floor((count % gio) / (phut));
        let s = Math.floor((count % phut) / (giay));
        $("#results span:nth-child(1)").text( d );
        $("#results span:nth-child(3)").text( h );
        $("#results span:nth-child(5)").text( m );
        $("#results span:nth-child(7)").text( s );
    };
})


