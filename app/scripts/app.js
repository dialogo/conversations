/*global define */
define(['jquery','underscore','backbone'], function ($, _, Backbone) {
    'use strict';

    var Lesson = Backbone.Model.extend({
	// Here I want to create the lesson model.
	// This model will have the data of lesson like
	// Lesson name, duration
});

	var User = Backbone.Model.extend({
		// This model will create the user
		// User name, gender, progress, score, unlockables
	});

	var LessonSelection = Backbone.View.extend({
		// This view will get the Lesson model
		// and display the list of lessons
		// need to figure out how the actual lesson
		// will be displayed.
	});

	var LessonList = Backbone.Collection.extend({
		// Need to understand what will happen here
		// model: Lesson
	});

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

	console.log(LessonsRouter);

});

var videoCaptionManager = function(){
	var currentTime;
	// I need to listen to current video time at all times.
};