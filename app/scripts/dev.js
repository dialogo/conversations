var app = app || {};

(function ($) {
    'use strict';

    var lessonPlayer = _V_("lesson_video");

    // get the duration
    var lessonDuration = function(){
        // this was the only workaround that I could get working
        // we add an event (see below) and fire this function
        // in order to get the time

        // lets get the time and round it
        var duration = Math.round(lessonPlayer.duration());

        // lets make sure its working
        console.log("duration is " + duration + " seconds");
    }

    // get the current time
    // TODO: attach it to a constant listener so it updates every second
    var currentLessonTime = function(){
        var currentTime = Math.round(lessonPlayer.currentTime());

        // lets make sure its working
        console.log("currentTime is " + currentTime + " seconds");
    }

    var lessonEnded = function(){
        console.log("------------------\n lesson has ended \n------------------");
    }

    lessonPlayer.addEvent("loadedmetadata", lessonDuration);
    lessonPlayer.addEvent("timeupdate", currentLessonTime);
    lessonPlayer.addEvent("ended", lessonEnded);

    $('.listen').click(function(){

    })

})(jQuery);