var app = app || {};

(function ($) {
    'use strict';

    app.LessonsView = Backbone.View.extend({
	    // This view will get the Lesson model
	    // and display the list of lessons
	    // need to figure out how the actual lesson
	    // will be displayed.

	    template: $('#lessons-template').html(),
	    tagName: 'li',

	    render: function(){
	        var tmpl = _.template(this.template);

	        this.$el.html(tmpl(this.model.toJSON()));
	    }
	});

})(jQuery);