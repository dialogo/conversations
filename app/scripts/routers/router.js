var app = app || {};

(function ($) {
    'use strict';

    var Conversations = Backbone.Router.extend({
        // This will create the lessons router
        // ie. /lesson/list or lesson/cafe

        routes: {

            /* home */
            "": "welcome",

            /* lesson list */
            "lessons" : "viewLessons",

            /* this is for the individual lesson */
            "lesson/:name" : "viewLesson"
        },

        welcome: function(){
            console.log("welcome");
        },

        viewLessons: function(){
            // this will show the list of users
            console.log("you clicked on lesson");
        },
        viewLesson: function(name){
            // this will show the single lesson
            console.log("you clicked on lesson name " + name);
        }
    });

    app.ConversationsRouter = new Conversations();
    Backbone.history.start();


})(jQuery);