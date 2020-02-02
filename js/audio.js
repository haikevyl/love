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