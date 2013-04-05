/*global define */
define([], function () {
    'use strict';

    return '\'Allo \'Allo!';
});


var Lesson = Backbone.Model.extend({/*...*/});

var LessonSelection = Backbone.View.extend({/*...*/});

var LessonList = Backbone.Collection.extend({
	model: Lesson
});

var LessonsRouter = Backbone.Router.extend({/*...*/});