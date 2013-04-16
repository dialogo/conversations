var app = app || {};

(function ($) {
	'use strict';

app.AppView = Backbone.View.extend({
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

})(jQuery);