var app = app || {};

(function ($) {
    'use strict';

    app.Lesson = Backbone.Model.extend({
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

})(jQuery);