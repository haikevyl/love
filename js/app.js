$(window).on("load", function(){
    setTimeout(function(){
        playPause();
    }, 10000)
});

$(document).ready(function(){
    var text = [
        "Chèo Vợ Yêu,",
        "Vợ là Người Con Gái Chồng Yêu Nhất :))",
        "Vợ Đáng Yêu Nhất !",
        "Vợ Cũng yêu Chồng Nhất :) !",
        "...Hôm nay là sinh Nhật Của Vợ, người không thể thiếu trong cuộc sống của chồng.",
        "Cám Ơn, cha mẹ đang mang Vợ tới thế giới này.",
        "Cám Ơn, Ông Trờ đã sắp sếp cho hai ta quên nhau.",
        "Cám ơn, zalo facebook mocha đã cho ta kết nối với nhau.",
        "Cám Ơn Vợ, vì đã tới bên Chồng, yêu chồng.",
        "sinh nhật Vợ yêu chồng chúc vợ vui vẻ, hạnh phúc, ...happy birthday...",
        "nhân dịp này chồng cũng gửi tới vợ:",
        "Có Vợ, Chồng sẽ không cần điều gì khác vợ",
        "Yêu Vợ cho tới khi nào chồng không còn tồn tại <3",
        "Ngoài vợ ra chồng không thể yêu thêm một ai nữa.",
        "cho dù tương lai có ra sao chồng cũng vẫn sẽ mãi yêu vợ hướng về phía vợ mà đi.",
        "~~ Yêu Vợ Thật Nhìu ~~"
    ];

    var i = 0;
    var textLength = text.length;
    var startLength = 0;
    function typeWriter() {
        if(startLength < textLength){
            if(i < text[startLength].length){
                $(".text").append(text[startLength].charAt(i));
                i++;
            }else{
                $(".text").append("<br />");
                i = 0;
                startLength++;
            }
        }else{
            startLength++;
        }
        setTimeout(typeWriter, 80);
    }

    setInterval(() => {
        heart();
    }, 500);

    setTimeout(() => {
        $(".title").css({
            "visibility" : "hidden",
            "opacity" : "0"
        });
        setTimeout(function(){
            $('.text').fadeIn("slow");
            typeWriter();
        }, 400);
    }, 16100);

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
})