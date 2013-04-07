/*global define */
define([], function () {
    'use strict';

    return '\'Allo \'Allo!';
});


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
	model: Lesson
});

var LessonsRouter = Backbone.Router.extend({
	// This will create the lessons router
	// ie. /lesson/list or lesson/cafe
});
var UserRouter = Backbone.Router.extend({
	// ie. /{username}
});