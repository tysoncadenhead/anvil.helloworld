/*global module */

var pluginFactory = function( _, anvil ) {

    "use strict";

    return anvil.plugin({

        // Name your plugin
        name: "anvil.helloworld",

        // Activity list: "identify", "pull", "combine", "pre-process","compile", "post-process", "push", "test"
        activity: "post-process",

        // Command all the things [ "-s, --somecommand", "Run this plugin for awesomesauce" ]
        commander: [],

        // Configure all the things...
        configure: function( config, command, done ) {
            done();
        },

        // Run all the things...
        run: function( done ) {
            done();
        }

    });

};
 
module.exports = pluginFactory;