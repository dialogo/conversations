var app = app || {};

(function ($) {
    'use strict';

    var ConversationsRouter = Backbone.Router.extend({
	    // This will create the lessons router
	    // ie. /lesson/list or lesson/cafe
	    initialize: function(){
	        Backbone.history.start();
	    }
	});

	var UserRouter = Backbone.Router.extend({
	    // ie. /{username}
	});

})(jQuery);