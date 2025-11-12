// This file provides the necessary JavaScript functions to interact with the SCORM API.
// It handles communication between the quiz and the Moodle platform, including initializing
// the SCORM session, tracking quiz attempts, and recording scores.

var SCORM = {
    version: "1.2",
    api: null,
    initialized: false,
    
    init: function() {
        if (this.initialized) return true;

        this.api = this.findAPI(window);
        if (this.api) {
            this.initialized = this.api.LMSInitialize("");
            return this.initialized;
        }
        return false;
    },

    findAPI: function(win) {
        var api = null;
        while (win && !api) {
            try {
                if (win.parent && win.parent.API) {
                    api = win.parent.API;
                } else if (win.opener && win.opener.API) {
                    api = win.opener.API;
                } else {
                    win = win.parent;
                }
            } catch (e) {
                break;
            }
        }
        return api;
    },

    setScore: function(score) {
        if (this.api && this.initialized) {
            this.api.LMSSetScore(score, score);
        }
    },

    getScore: function() {
        if (this.api && this.initialized) {
            return this.api.LMSGetScore();
        }
        return null;
    },

    finish: function() {
        if (this.api && this.initialized) {
            this.api.LMSFinish("");
            this.initialized = false;
        }
    }
};

// Initialize SCORM on page load
window.onload = function() {
    if (SCORM.init()) {
        // Additional logic to handle quiz interactions can be added here
    }
};