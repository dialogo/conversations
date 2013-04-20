/* 
 * -------------
 * Models
 * -------------
*/

var User = Backbone.Model.extend({
    // This model will create the user
    // User name, gender, progress, score, unlockables
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

var LessonExercise = Backbone.Collection.extend({
    // This will make the individual lesson work
    // This has the video player and captions
});


/* 
 * -------------
 * Views
 * -------------
*/

var Exercise = Backbone.View.extend({
    // this will display the single lesson view
    // we are dealing with a separate set of data
    // which contains the video and subtitles
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
    new app.AppView();
});

/* 
 * -------------
 * Other
 * -------------
*/

