/* 
 * -------------
 * Models
 * -------------
*/

var User = Backbone.Model.extend({
    // This model will create the user
    // User name, gender, progress, score, unlockables
});

var Lesson = Backbone.Model.extend({
    initialize: function(){
        console.log("Lesson Model Initiatiated");
    },

    defaults: {
        title:'Lesson',
        description: '',
        duration: '0:00',
        levels: '5',
        fileName: 'lesson'
    }
});

/* 
 * -------------
 * Collections
 * -------------
*/

var UserProgress = Backbone.Collection.extend({
    model: User,

    // lets save some user input and progress
    // the values come from the user "login" page
    // and the self evaluation.
    localStorage: new Backbone.LocalStorage('conversation-helper')

});

var LessonList = Backbone.Collection.extend({
    // Need to understand what will happen here
    // model: Lesson
    model: Lesson
});

var LessonExercise = Backbone.Collection.extend({
    // This will make the individual lesson work
    // This has the video player and captions
});


/* 
 * -------------
 * Views
 * -------------
*/

var AppView = Backbone.View.extend({
    // Top UI View of the App

    el: 'body',
    template: $('#welcome-template').html(),

    initialize: function(){
        // console.log(this.template)
        this.render();
    },

    render: function(){
        var tmpl = _.template(this.template);
        this.$el.html(tmpl);

        return this;
    }

});

// var LessonsView = Backbone.View.extend({
//     // This view will get the Lesson model
//     // and display the list of lessons
//     // need to figure out how the actual lesson
//     // will be displayed.

//     template: $('#lessons-template').html(),
//     tagName: 'li',

//     render: function(){
//         var tmpl = _.template(this.template);

//         this.$el.html(tmpl(this.model.toJSON()));
//     }
// });

var Exercise = Backbone.View.extend({
    // this will display the single lesson view
    // we are dealing with a separate set of data
    // which contains the video and subtitles
});


/* 
 * -------------
 * Routers
 * -------------
*/

var LessonsRouter = Backbone.Router.extend({
    // This will create the lessons router
    // ie. /lesson/list or lesson/cafe
    initialize: function(){
        Backbone.history.start();
    }
});
var UserRouter = Backbone.Router.extend({
    // ie. /{username}
});

/* 
 * -------------
 * Launch App
 * -------------
*/

var app = app || {};

$(function () {
    'use strict';

    // kick things off by creating the `App`
    new AppView();
});

/* 
 * -------------
 * Other
 * -------------
*/

var videoCaptionManager = function(){
    var currentTime;
    // I need to listen to current video time at all times.
};

