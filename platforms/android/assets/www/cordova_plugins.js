cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "cordova-plugin-facebook4.FacebookConnectPlugin",
        "file": "plugins/cordova-plugin-facebook4/www/facebook-native.js",
        "pluginId": "cordova-plugin-facebook4",
        "clobbers": [
            "facebookConnectPlugin"
        ]
    },
    {
        "id": "cordova-plugin-linkedin.LinkedIn",
        "file": "plugins/cordova-plugin-linkedin/www/LinkedIn.js",
        "pluginId": "cordova-plugin-linkedin",
        "clobbers": [
            "cordova.plugins.LinkedIn"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-splashscreen": "4.0.3",
    "cordova-plugin-facebook4": "1.9.1",
    "cordova-plugin-linkedin": "1.2.1"
};
// BOTTOM OF METADATA
});