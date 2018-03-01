var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseAuthentication";

module.exports = {
    getIdToken: function(forceRefresh) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "getIdToken", [forceRefresh]);
        });
    },
    signInWithEmailAndPassword: function(email, password) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "signInWithEmailAndPassword", [email, password]);
        });
    },
    verifyPhoneNumber: function(phoneNumber, timeout) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "verifyPhoneNumber", [phoneNumber, timeout]);
        });
    },
    signInWithVerificationId: function(verificationId, code) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "signInWithVerificationId", [verificationId, code]);
        });
    },
    signOut: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "signOut", []);
        });
    },
    waitForSMSVerificationResult: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "waitForSMSVerificationResult", []);
        });
    }
};
