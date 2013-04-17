var app = app || {};

(function ($) {
    'use strict';

    app.Lessons = Backbone.Collection.extend({
        // Need to understand what will happen here
        // model: Lesson
        model: app.Lesson,
        url: 'data/lessons.json'
    });

})(jQuery);