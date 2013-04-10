require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        underscore: '../components/underscore/underscore',
        backbone: '../components/backbone/backbone',
        // backbonelocalStorage: '../components/backbone.localStorage/backbone.localStorage'
        videojs: 'vendor/video-js/video'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
          deps: ["underscore", "jquery"],
          exports: "Backbone"
        }
    }
});

require(['app', 'jquery', 'underscore', 'backbone', 'videojs'], function (app, $, _, Backbone) {
    'use strict';
    // use app here
    console.log("hey app! " + app);
    app;
});