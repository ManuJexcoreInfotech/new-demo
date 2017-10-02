/**
 KMRS MOBILE
 Version 1.0
 */
/**
 Default variable declarations
 */
var ajax_url = krms_config.ApiUrl;
var ajax_url_append = krms_config.append_api;
var dialog_title_default = krms_config.DialogDefaultTitle;
var search_address;
var ajax_request;
var cart = [];
var networkState;

document.addEventListener("deviceready", onDeviceReady, true);

function onDeviceReady() {
    setTimeout(function () {
        navigator.splashscreen.hide();
    }, 3000);

    if (isLogin()) {
        console.log("login ok1");
        $(".logout-menu").show();
        $(".login-menu").hide();
        menu.setMainPage('mainmenu.html', {closeMenu: true})
    } else {
        console.log("not looged in1 ");
        $(".logout-menu").hide();
        $(".login-menu").show();
        menu.setMainPage('prelogin.html', {closeMenu: true})
    }
    //setStorage('device_id', 'e3kI:APA91bGNX6z6xWj6P3mD-bBsUsxqtR87Lxzmvssb6DiZ4lhmuQpF_Zkp10g5GPKD5Lam-iR7Gi_ZF75mH-siTeDxxkW6_yIdNOtu9E6A1_s7tQ90e4YovY5RxPgsOOafnLW9BjDii5yi');
    //setStorage('device_platform', 'Android');
    if (!empty(krms_config.pushNotificationSenderid)) {
        console.log("sender id :" + krms_config.pushNotificationSenderid);
        var push = PushNotification.init({
            "android": {
                "senderID": krms_config.pushNotificationSenderid
            },
            "ios": {
                "alert": "true",
                "badge": "true",
                "sound": "true"
            },
            "windows": {}
        });
        push.on('registration', function (data) {
            console.log("registration:" + data);
            var oldDeviceId = getStorage('device_id');
            setStorage("device_id", data.registrationId);
            setStorage("device_platform", device.platform);
            var params = "registrationId=" + data.registrationId;
            params += "&device_platform=" + device.platform;
            params += "&client_token=" + getStorage("client_token");
            params += "&old_device_id=" + oldDeviceId;
            callAjax("registerMobile", params);
            //callAjax("getMyagenda", params);
        });
        push.on('notification', function (data) {

            console.log("registration:" + data);
            showNotification(data.title, data.message);

            push.finish(function () {
                console.log("finish successfully called:");
                //alert('finish successfully called');
            });
        });
        push.on('error', function (e) {
            console.log("Push erorr:" + e);
        });
    }
}


jQuery.fn.exists = function () {
    return this.length > 0;
}
function get_direction()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('Gujarat University Convention & Exhibition Centre, 132 Ring Road,Near Helmet Circle, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction1()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('Sheth V.S.General Hospital, Ellisebridge, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction2()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('GCS Medical College, Hospital & Research Centre, Naroda Road, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction3()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('The Gujarat Cancer & Research Institute (GCRI), Civil Hospital Campus, Asarwa, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction4()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('The Gujarat Cancer & Research Institute (GCRI), Civil Hospital Campus, Asarwa, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction5()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('GMERS Medical Collage, Sola S.G. Highway, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction6()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('L G Medical College, Maninagar, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction7()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('Gujarat University Convention &amp; Exhibition Centre, Near Helmet Circle, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction8()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('Gujarat University Convention & Exhibition Centre, Near Helmet Circle, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction9()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('Sheth V.S.General Hospital, Ellisebridge, Ahmedabad,Gujarat 380009', {
            app: app
        });
    });

}
function get_direction10()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('Gujarat University Convention & Exhibition Centre, 132 Ring Road,Near Helmet Circle, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction11()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('Gujarat University Convention & Exhibition Centre, Near Helmet Circle, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction12()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('Gujarat University Convention & Exhibition Centre, Near Helmet Circle, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}
function get_direction13()
{
    launchnavigator.isAppAvailable(launchnavigator.APP.GOOGLE_MAPS, function (isAvailable) {
        var app;
        if (isAvailable) {
            app = launchnavigator.APP.GOOGLE_MAPS;
        } else {
            console.warn("Google Maps not available - falling back to user selection");
            app = launchnavigator.APP.USER_SELECT;
        }
        launchnavigator.navigate('Gujarat University Convention & Exhibition Centre, Near Helmet Circle, Ahmedabad, Gujarat 380009', {
            app: app
        });
    });

}

function dump(data) {
    console.debug(data);
}

function setStorage(key, value) {
    localStorage.setItem(key, value);
}

function getStorage(key) {
    return localStorage.getItem(key);
}

function removeStorage(key) {
    localStorage.removeItem(key);
}

function explode(sep, string) {
    var res = string.split(sep);
    return res;
}

function urlencode(data) {
    return encodeURIComponent(data);
}
$(document).on("keyup", ".numeric_only", function () {
    if ($(this).hasClass('range1_5')) {
        if (this.value.length > 1) {
            var ch = this.value;
            this.value = ch.charAt(0);
        }
        this.value = this.value.replace(/[^1-5\-().]/g, '');

    } else {
        this.value = this.value.replace(/[^0-9\-().]/g, '');
    }
});



$(document).on({
    'DOMNodeInserted': function () {
        $('.pac-item, .pac-item span', this).addClass('needsclick');
    }
}, '.pac-container');

ons.bootstrap();
ons.ready(function () {
    dump('ready');
    refreshConnection();
    setTimeout('getLanguageSettings()', 1100);
}); /*end ready*/
function refreshConnection() {
    if (!hasConnection()) {
        $(".home-page").hide();
        $(".no-connection").show();
    } else {
        $(".home-page").show();
        $(".no-connection").hide();
    }
}

function hasConnection() {
    return true;
    networkState = navigator.network.connection.type;
    if (networkState == "Connection.NONE" || networkState == "none") {
        return false;
    }
    return true;
}

function createElement(elementId, elementvalue) {
    var content = document.getElementById(elementId);

    content.innerHTML = elementvalue;
    ons.compile(content);
}

ons.ready(function () {
    /*kNavigator.on('prepush', function(event) {
     dump("prepush");
     });*/
});
document.addEventListener("pageinit", function (e) {
    dump("pageinit");

    if (getStorage("device_id") == '' || getStorage("device_id") == null || getStorage("device_id") == 0) {

        if (!empty(krms_config.pushNotificationSenderid)) {
            //console.log("sender id :" + krms_config.pushNotificationSenderid);
            console.log("PushNotification :" + typeof PushNotification);
            if (typeof PushNotification === "defined") {
                // your code here
                var push = PushNotification.init({
                    "android": {
                        "senderID": krms_config.pushNotificationSenderid
                    },
                    "ios": {
                        "alert": "true",
                        "badge": "true",
                        "sound": "true"
                    },
                    "windows": {}
                });
                push.on('registration', function (data) {
                    console.log("registration:" + data);
                    var oldDeviceId = getStorage('device_id');
                    setStorage("device_id", data.registrationId);
                    setStorage("device_platform", device.platform);
                    var params = "registrationId=" + data.registrationId;
                    params += "&device_platform=" + device.platform;
                    params += "&client_token=" + getStorage("client_token");
                    params += "&old_device_id=" + oldDeviceId;
                    callAjax("registerMobile", params);
                    //callAjax("getMyagenda", params);
                });
                push.on('notification', function (data) {

                    console.log("registration:" + data);
                    showNotification(data.title, data.message);

                    push.finish(function () {
                        console.log("finish successfully called:");
                        //alert('finish successfully called');
                    });
                });
                push.on('error', function (e) {
                    console.log("Push erorr:" + e);
                });
            }
        }
    }
    dump("pagname => " + e.target.id);
    appdata.pagename = e.target.id;
    switch (e.target.id) {
        case "page_mainmenu":
            /* if (getStorage("user_id") == null) {
             menu.setMainPage('prelogin.html', {
             closeMenu: true
             });
             return false;
             }*/
            break;
        case "page_organization_team":
            $('#organizationTabContainer').tabs();
            break;
        case "about_gujrat":
            $('#aboutgujratTabContainer').tabs();
            break;
        case "imptable":
            $('.footable').footable({
                calculateWidthOverride: function () {
                    return {width: $(window).width()};
                }
            });
            break;
        case "fob":
            $('#fobTabContainer').tabs();
            break;
        case "page_Prog_out":
            $('#workshopTabContainer').tabs();
            break;

        case "page_Prog_out1":
            $('#progoutTabContainer').tabs();
            break;

        case "page_Venue":
            $('#venueTabContainer').tabs();
            break;
        case "page_agenda":
            var params = '';
            params += "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
            callAjax("getMyagenda", params);
            break;

        case "page-profile":
            callAjax('getProfile',
                    "user_id=" + getStorage("user_id")
                    );
            translatePage();
            translateValidationForm();
            $(".first_name").attr("placeholder", getTrans('First Name', 'user_fname'));
            $(".last_name").attr("placeholder", getTrans('Last Name', 'user_lname'));
            $(".email_address").attr("placeholder", getTrans("Email Address", 'user_email'));
            break;

        case "page-login":
        case "page-prelogin":

            if (getStorage("client_token") == null) {
                translatePage();
                translateValidationForm();
                $(".email_address").attr("placeholder", getTrans('Email address', 'email_address'));
                $(".password").attr("placeholder", getTrans('Password', 'password'));
            } else {
                menu.setMainPage('mainmenu.html', {
                    closeMenu: true
                });
            }
            break;
        case "page-languageoptions":
            callAjax('getLanguageSelection', '');
            break;
        case "page_polls":
            var params = '';
            params += "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
            callAjax("getallpolls", params);
            break;
        case "pollsdetails":
            console.log('At polls details');
            var params = '';
            params += "&poll_id=" + getStorage("poll_id") + "&statusFlag=" + getStorage("statusFlag") + "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
            callAjax("pollsdetails", params);
            break;
        case "page-intspeakers":
            params += "type=International";
            callAjaxPost("getSpeakers", params);
            break;
        case "page_Exhibition_layout":
            params += "";
            callAjaxPost("getExhibitors", params);
            break;
        case "page_natspeakers":
            params += "type=National";
            callAjaxPost("getSpeakers", params);
            break;
        default:
            break;
    }
}, false);

function callAjaxPost(action, params) {
    if (!hasConnection()) {
        if (action != "registerMobile") {
            onsenAlert(getTrans("CONNECTION LOST", 'connection_lost'));
        }
        return;
    }
    /*add language use parameters*/
//    params += "&lang_id=" + getStorage("default_lang");
    dump(ajax_url + action);
    //alert(params);
    ajax_request = $.ajax({
        url: ajax_url + action,
        data: params,
        // contentType: "application/json",
        type: 'POST',
        dataType: "jsonp",
        async: false,
        timeout: 6000,
        crossDomain: true,
        beforeSend: function () {
            if (ajax_request != null) {
                /*abort ajax*/
                hideAllModal();
                ajax_request.abort();
            } else {
                /*show modal*/
                switch (action) {
                    case "addvisitor":
                        loader.show();
                        break;
                    default:
                        loader.show();
                        break;
                }
            }
        },
        complete: function (data) {
            console.log(data);
            ajax_request = null;
            hideAllModal();
        },
        success: function (data) {
            //alert(data.code);
            console.log(data);
            //alert("123");
//            var data = $.parseJSON(data);
            appdata.response = data;
            dump(data);
            if (data.code == 0) {
                switch (action) {
                    case "getSpeakers":
                        //alert(data.details.faculty_name);
                        console.log(data.details);
                        displaySpeakerslist(data.details, data.type);
                        break;
                    case "getExhibitors":
                        //alert(data.type);
                        //console.log(data.details);
                        displayExhibitorslist(data.details);
                        break;
                    case "getSpeakerDetail"://displaySpeakerDetail
                        //alert(123);
                        //console.log(data.details);
                        displaySpeakersDetail(data.details);
                        break;
                    case "getExhibitorsDetail":
                        //alert(data.type);
                        //console.log(data.details);
                        displayExhibitorsDetail(data.details);
                        break;

                    default:
                        //onsenAlert("Sorry but something went wrong during processing your request");
                        onsenAlert(data.msg);
                        break;
                }
            } else {
                /*failed condition*/
                switch (action) {
                    default:
                    case "addvisitor":
                        break;
                        onsenAlert(data.msg);
                        break;
                }
            }
        },
        error: function (request, error) {
            //alert('555');
            hideAllModal();
            if (action == "getLanguageSettings" || action == "registerMobile") {
            } else {
                onsenAlert(getTrans("Network error has occurred please try again!", 'network_error'));
            }
        }
    });
}
function setbackSpickers() {
    menu.setMainPage('natspeakers.html', {
        closeMenu: true
    });

    setTimeout(function () {
        var params = '';
        params += "type=National";
        callAjaxPost("getSpeakers", params);
    }, 1000);
}
function displaySpeakersDetail(data) {
    console.log(data);
    //alert(data.faculty_type);
    var htm = '';
    var faculty_name = '';
    if (data.faculty_name != '') {
        faculty_name = data.faculty_name;
    }
    var faculty_qualification = '';
    if (data.faculty_qualification != '') {
        faculty_qualification = data.faculty_qualification;
    }
    var faculty_email = '';
    if (data.faculty_email != '') {
        faculty_email = data.faculty_email;
    }
    var faculty_profile = '';
    if (data.faculty_profile != '') {
        faculty_profile = data.faculty_profile;
    }
    var faculty_contact = '';
    if (data.faculty_contact != '') {
        faculty_contact = data.faculty_contact;
    }
    var faculty_city = '';
    if (data.faculty_city != '') {
        faculty_city = data.faculty_city;
    }

    var album_photo = 'css/images/no_image.jpg';
    if (data.faculty_photo != '' || data.faculty_photo == 'no photo.jpg') {
        album_photo = 'http://www.aicog2017.com/admin/images/faculty/' + data.faculty_photo;
    }


    htm += '<div class="center">';
    htm += '<img src="' + album_photo + '" width="50%" class="grid_photo">';
    htm += '</div>';


    htm += '<ons-list class="timeline" modifier="inset">';
    htm += '<ons-list-item class="timeline-li1" style="padding:5px 0px 0px 5px !important">';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3 center">';
    if (data.facebook != '') {
        htm += '<a href="http://www.facebook.com/' + data.facebook + ' class="btn btn-info btn-sm" target="_system"><i class="fa fa-facebook" aria-hidden="true"></i></a>';
    } else {
        htm += '<a href="http://www.facebook.com/" class="btn btn-info btn-sm" target="_system"><i class="fa fa-facebook" aria-hidden="true"></i></a>';
    }
    htm += '</ons-col>';
    htm += '<ons-col class="s3 center">';
    if (data.twitter != '') {
        //alert(123);
        htm += '<a href="www.twitter.com/' + data.twitter + ' class="btn btn-info btn-sm"><i class="fa fa-twitter" aria-hidden="true"></i></a>';
    } else {
        htm += '<a href="www.twitter.com/" class="btn btn-info btn-sm"><i class="fa fa-twitter" aria-hidden="true"></i></a>';
    }
    htm += '</ons-col>';
    htm += '<ons-col class="s3 center">';
    if (data.googleplues != '') {
        htm += '<a href="www.googleplues.com/' + data.googleplues + ' class="btn btn-danger btn-sm"><i class="fa fa-googleplues" aria-hidden="true"></i></a>';
    } else {
        htm += '<a href="www.googleplues.com/" class="btn btn-danger btn-sm"><i class="fa fa-google-plus" aria-hidden="true"></i></a>';
    }
    htm += '</ons-col>';
    htm += '<ons-col class="s3 center">';
    if (data.linkedin != '') {
        htm += '<a href="www.linkedin.com/' + data.linkedin + ' class="btn btn-info btn-sm"><i class="fa fa-linkedin" aria-hidden="true"></i></a>';
    } else {
        htm += '<a href="www.linkedin.com/" class="btn btn-info btn-sm"><i class="fa fa-linkedin" aria-hidden="true"></i></a>';
    }
    htm += '</ons-col>';
    htm += '</ons-list-item>';
    htm += '</ons-list>';




    htm += '<ons-list class="timeline" modifier="inset">';
    htm += '<ons-list-item class="timeline-li1" style="padding:0px 0px 0px 10px !important">';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important; ">';
    htm += '<span class="timeline-name timeline-name-size"><b>Name:</b></span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important;">';
    htm += '<span class="timeline-name timeline-name-size1">' + faculty_name + '</span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '</ons-list-item>';
    htm += '<ons-list-item class="timeline-li1" style="padding:0px 0px 0px 10px !important">';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important; ">';
    htm += '<span class="timeline-name timeline-name-size"><b>Qualification:</b></span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important;">';
    htm += '<span class="timeline-name timeline-name-size1">' + faculty_qualification + '</span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '</ons-list-item>';
    htm += '<ons-list-item class="timeline-li1" style="padding:0px 0px 0px 10px !important">';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important; ">';
    htm += '<span class="timeline-name timeline-name-size"><b>City:</b></span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important;">';
    htm += '<span class="timeline-name timeline-name-size1">' + faculty_city + '</span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '</ons-list-item>';
    htm += '<ons-list-item class="timeline-li1" style="padding:0px 0px 0px 10px !important">';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important; ">';
    htm += '<span class="timeline-name timeline-name-size"><b>Profile:</b></span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important;">';
    htm += '<span class="timeline-name timeline-name-size1">' + faculty_profile + '</span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '</ons-list-item>';
    htm += '</ons-list>';
    if (data.faculty_email != '') {
        setStorage('mail_type', data.faculty_type);
        setStorage('mail_id', data.faculty_id);
        setStorage('mail', data.faculty_email);

        htm += '<ons-button modifier="small" class="left" onclick="mail_person();" style="margin:10px !important">Contact</ons-button>';
    }
    htm += '';
    createElement('speakersDetails', htm);
}


function getDownload(link){
    window.open(link,'_system');
}

function displayExhibitorsDetail(data) {
    //alert(data.exhibitor_id);
    var htm = '';
    var exhibitor_company_name = '';
    if (data.exhibitor_company_name != '') {
        exhibitor_company_name = data.exhibitor_company_name;
    }
    var exhibitor_description = '';
    if (data.exhibitor_description != '') {
        exhibitor_description = data.exhibitor_description;
    }
    var exhibitor_webste_link = '';
    if (data.exhibitor_webste_link != '') {
        exhibitor_webste_link = data.exhibitor_webste_link;
    }
    var exhibitor_email = '';
    if (data.exhibitor_email != '') {
        exhibitor_email = data.exhibitor_email;
    }
    var exhibitor_contact = '';
    if (data.exhibitor_contact != '') {
        exhibitor_contact = data.exhibitor_contact;
    }

    var album_photo = 'css/images/no_image.jpg';
    if (data.exhibitor_logo != '') {
        album_photo = 'http://www.aicog2017.com/admin/images/faculty/' + data.exhibitor_logo;
    }

    htm += '<div class="center">';
    htm += '<img src="' + album_photo + '" width="50%" class="grid_photo">';
    htm += '</div>';
    htm += '<ons-list class="timeline" modifier="inset">';
    htm += '<ons-list-item class="timeline-li1" style="padding:0px 0px 0px 10px !important">';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important; ">';
    htm += '<span class="timeline-name timeline-name-size"><b>Company Name:</b></span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important;">';
    htm += '<span class="timeline-name timeline-name-size1">' + exhibitor_company_name + '</span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '</ons-list-item>';
    htm += '<ons-list-item class="timeline-li1" style="padding:0px 0px 0px 10px !important">';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important; ">';
    htm += '<span class="timeline-name timeline-name-size"><b>Description:</b></span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important;">';
    htm += '<span class="timeline-name timeline-name-size1">' + exhibitor_description + '</span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '</ons-list-item>';
    htm += '<ons-list-item class="timeline-li1" style="padding:0px 0px 0px 10px !important">';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important; ">';
    htm += '<span class="timeline-name timeline-name-size"><b>Website Link:</b></span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '<ons-row style="margin-bottom: 0px !important;">';
    htm += '<ons-col class="s3">';
    htm += '<div class="timeline-from" style="margin: 0px !important;">';
    htm += '<span class="timeline-name timeline-name-size1">' + exhibitor_webste_link + '</span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</ons-col>';
    htm += '</ons-row>';
    htm += '</ons-list-item>';
    htm += '</ons-list>';
    if (data.exhibitor_email != '') {
        setStorage('mail_type', 'exhibitor');
        setStorage('mail_id', data.exhibitor_id);
        setStorage('mail', data.exhibitor_email);

        htm += '<ons-button modifier="small" class="left" onclick="mail_person();" style="margin:10px !important">Contact</ons-button>';
    }

    htm += '';
    createElement('Exhibitiondetail', htm);
}
function displaySpeakerslist(data, type) {

    var htm = '';
    htm += '<div class="row" style="margin: 0px 10px 0px 0px !important;">';

    $.each(data, function (key, val) {

        var faculty_name = '';
        if (val.faculty_name != '') {
            faculty_name = val.faculty_name;
        }

        var album_photo = 'css/images/no_image.jpg';
        if (val.faculty_photo != '' || val.faculty_photo == 'no photo.jpg') {
            album_photo = 'http://www.aicog2017.com/admin/images/faculty/' + val.faculty_photo;
        }
        if (val.faculty_photo == 'no photo.jpg') {
            album_photo = 'css/images/no_image.jpg';
        }
//            alert(i);

        htm += '<div class="col s6 m6" style="margin-top:10px;">';
        htm += '<img class="grid_photo" src="' + album_photo + '" onclick="displaySpeakerDetails(' + val.faculty_id + ');">';
        htm += '<div class="">';
        htm += '<span class="imp_date_name1"><b>' + faculty_name + '</b></span>';
        htm += '</div>';
        htm += '</div>';



    });
    htm += '</div>';
    htm += '';
    //alert(type);
    if (type == "International") {
        //alert(123);
        createElement('intspeakers_list', htm);
    }
    if (type == "National") {
        createElement('natspeakers_list', htm);
    }
}
function displayExhibitorslist(data) {

    var htm = '';
    htm += '<div class="row" style="margin: 0px 10px 0px 0px !important;">';

    $.each(data, function (key, val) {
        //console.log(val.exhibitor_id);
        var exhibitor_company_name = '';
        if (val.exhibitor_company_name != '') {
            exhibitor_company_name = val.exhibitor_company_name;
        }
        var exhibitor_id = '';
        if (val.exhibitor_id != '') {
            exhibitor_id = val.exhibitor_id;
        }
        //alert(exhibitor_id);
        var album_photo = 'css/images/no_image.jpg';
        if (val.exhibitor_logo != '' || val.exhibitor_logo != 'no photo.jpg') {
            album_photo = 'http://www.aicog2017.com/admin/images/faculty/' + val.exhibitor_logo;
        }
//            alert(i);

        htm += '<div class="col s6 m6" style="margin-top:10px;">';
        htm += '<img class="grid_photo" src="' + album_photo + '" onclick="displayExhibitiondetail(' + exhibitor_id + ');">';
        htm += '<div class="">';
        htm += '<span class="imp_date_name1"><b>' + exhibitor_company_name + '</b></span>';
        htm += '</div>';
        htm += '</div>';



    });
    htm += '</div>';
    htm += '';
    //alert(type);
    createElement('Exhibition_list', htm);

}

function displaySpeakerDetails(data) {
    /*    //alert("123");
     menu.setMainPage('speakersDetails.html', {
     closeMenu: true
     });   
     
     setTimeout(function(){
     var params = '';
     //            alert(data);
     callAjaxPost("getSpeakerDetail", "faculty_id="+data);        
     },1000);
     */
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

            callAjaxPost("getSpeakerDetail", "faculty_id=" + data);
        }
    };

    sNavigator.pushPage("speakersDetails.html", options);
}
function displayExhibitiondetail(data) {
//    console.log("123");
//alert(data);
    /*  menu.setMainPage('Exhibitiondetail.html', {
     closeMenu: true
     });   
     
     setTimeout(function(){
     var params = '';
     //            alert(data);
     callAjaxPost("getExhibitorsDetail", "exhibitor_id="+data);        
     },1000);
     */
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

            callAjaxPost("getExhibitorsDetail", "exhibitor_id=" + data);
        }
    };

    sNavigator.pushPage("Exhibitiondetail.html", options);
}


function onsenAlert(message, dialog_title) {
    if (typeof dialog_title === "undefined" || dialog_title == null || dialog_title == "") {
        dialog_title = dialog_title_default;
    }
    dump(dialog_title);
    ons.notification.alert({
        message: message,
        title: dialog_title
    });
}

function hideAllModal() {
    setTimeout('loaderSearch.hide()', 1);
    setTimeout('loader.hide()', 1);
    setTimeout('loaderLang.hide()', 1);
}

function alreadyRegisterForAlert() {
    ons.createDialog('mydialog.html').then(function (dialog) {
        $(".mydialog-title").html('Aicog 2017 Ahmedabad');
        $(".mydialog-message").html('You already set alert for this program');
        dialog.show();
    });
}

function registerForAlert(pr_id)
{
    if (pr_id !== '') {
        setStorage('program_id', pr_id);
    }
    var params = "registrationId=" + getStorage("device_id");
    params += "&device_platform=" + getStorage("device_platform");
    params += "&cn_program_id=" + getStorage("program_id");
    params += "&cn_user_id=" + getStorage("user_id");
    params += "&title=Test title";
    params += "&message=Test message";
    params += "&datetime_notify=2016-09-21 09:00:00";

    callAjax("checkReminder", params);
}

function taskDetails(data) {

    if (data.task_status == '0') {
        data.task_status = 'DONE';
    }
    createElement('task_title', data.title);
    $('#task_id_add_comment').val(data.id);
    var html = '';
    html += '<ons-list>';
    html += '<ons-list-item modifier="nodivider">';
    html += '<ons-if platform="ios other" class="left left-label"><b>Title</b> : ' + data.title + '';
    html += '</ons-if>';
    html += '</ons-list-item>';

    html += '<ons-list-item modifier="nodivider">';
    html += '<ons-if platform="ios other" class="left left-label">';
    html += '<b>Priority</b> : ' + data.pname + '';
    html += '</ons-if>';
    html += '</ons-list-item>';

    html += '<ons-list-item modifier="nodivider">';
    html += '<ons-if platform="ios other" class="left left-label">';
    html += '<b>Start date</b> : ' + data.task_startdate + '';
    html += '</ons-if>';
    html += '</ons-list-item>';

    html += '<ons-list-item modifier="nodivider">';
    html += '<ons-if platform="ios other" class="left left-label">';
    html += '<b>End date</b> : ' + data.task_enddate + '';
    html += '</ons-if>';
    html += '</ons-list-item>';

    html += '<ons-list-item modifier="nodivider">';
    html += '<ons-if platform="ios other" class="left left-label">';
    html += '<b>Status</b> : ' + data.task_status + '';
    html += '</ons-if>';
    html += '</ons-list-item>';

    html += '<ons-list-item modifier="nodivider">';
    html += '<ons-if platform="ios other" class="left left-label">';
    html += '<b>Description</b>: ' + data.task_desc + '';
    html += '</ons-if>';
    html += '</ons-list-item>';
    html += '</ons-list>';
    createElement('task_details', html);

    var comment_html = '';
    if (data.arr_comment.length > 0) {
        $.each(data.arr_comment, function (key, val) {

            var user_profilepic = '';
            if (val.user_profilepic != '') {
                user_profilepic = krms_config.ServerUrl + 'images/profile_image/' + val.user_profilepic;
            }
            comment_html += '<ons-list-item class="timeline-li" modifier="tappable" >';
            comment_html += '<ons-row>';
            comment_html += '  <ons-col width="50px">';
            comment_html += '	<img ng-src="' + user_profilepic + '" class="timeline-image">';
            comment_html += '  </ons-col>';

            comment_html += '  <ons-col>';
            comment_html += '	<div class="timeline-date">' + val.taskcomment_createdate + '</div>';
            comment_html += '	<div class="timline-from">';
            comment_html += '	  <span class="timeline-name">' + val.name + '</span>';
            comment_html += '	</div>';

            comment_html += '	<div class="timeline-message">';
            comment_html += '	' + val.taskcomment_desc + '';
            comment_html += '	</div>';
            comment_html += '  </ons-col>';
            comment_html += '</ons-row>';
            comment_html += '</ons-list-item>';
        });
    } else {
        comment_html += '<ons-list-item class="timeline-li" modifier="tappable" ><ons-row><ons-col>No comments</ons-col></ons-row></ons-list-item>';
    }
    createElement('task_comments', comment_html);
}

function openTaskDetail(id) {
    callAjax("task_details", "t_id=" + id + "&user_id=" + getStorage("user_id"));
    menu.setMainPage('task_detail.html');
}


function displayEventDetail(data) {
    var htm = '';
    //console.log(data.e_name);
    //background-image: url(http://callabhi.com/eventmanage/admin/upload/coverimg/4GV2fuiGKWvLyBR.jpg);
    var logo = '';
    if (data.e_cover_image != '') {
        logo = krms_config.ServerUrl + '/admin/upload/coverimg/' + data.e_cover_image;
    }
    if (logo == '') {
        $('#event_main_container').addClass('bgcardcolor');
    } else {
        $('#event_main_container').css("background-image", "url(" + logo + ")");
    }
    $('#event_main_title').html(data.e_name);
    $('#event_main_location').html(data.e_location);

    var html_date_info = data.string_date;
    ;
    $('#eventDetailHead').html(html_date_info);

    var html = '';

    $.each(data.users.result, function (key, val) {
        html += ' <ons-list-item modifier="tappable"  >';
        html += '<ons-row>';
        html += '<ons-col class="left" width="75%">';
        html += '<div class="sale_name">' + val.u_fullname + ' (' + val.u_position + ')</div>';
        html += '<div class="sale_date">' + val.u_company + '</div>';
        html += '<div class="sale_date">' + val.country + '</div>';
        html += '</ons-col>';
        html += '<ons-col class="right" width="25%"  style="padding-top:5px;">';
        html += ' <ons-button modifier="small" class="right" onclick="arrangeMeeting(' + data.e_id + ',' + val.ea_id + ',' + val.u_id + ',' + getStorage("user_id") + ')" >Arrange</ons-button>';
        html += '</ons-col>';
        html += '</ons-row>';
        html += '</ons-list-item><hr>';
    });

    createElement('event_user_list', html);
    //data.e_name;
}


function setmenu(obj) {
    var obj = $(obj);
    obj.attr('onclick', 'setmenuback(this)');
    obj.next().hide();
}

function setmenuback(obj) {
    var obj = $(obj);
    obj.attr('onclick', 'setmenu(this)');
    obj.next().show();
}

function displayMySchedule(data) {
    console.log(data);
    html = '<hr>';
    //if (data.length > 0) {
    $.each(data, function (key, val) {
        var eventName = val.e_name;
        console.log(eventName);
        //html +='<ons-list-header> '+eventName+' </ons-list-header>';
        html += '<ons-list-item modifier="tappable" id="' + val.e_id + '" class="row my-tab" data-onclick="" onclick="setmenu(this);">' + eventName + '</ons-list-item>';
        //if(val.data.length>0){
        html += '<ons-list class="restaurant-list listExtra my-row-bdr-nn-outer">';
        $.each(val.data, function (key1, val1) {
            var date = key1;

            html += '<ons-list-header> ' + date + ' </ons-list-header>';
            $.each(val1, function (key2, val2) {
                if (val2.eb_type == 'Break') {
                    html += '<ons-list-item modifier="tappable"  >';
                    html += '<ons-row>';
                    html += '<ons-col class="left" width="50%">';
                    html += '<div class="">' + val2.u_fullname + '</div>';
                    html += '</ons-col>';
                    html += '<ons-col width="30%">';
                    html += '<div class="">' + val2.eb_start_time + ' - ' + val2.eb_end_time + '</div>';
                    html += '</ons-col>';
                    html += '<ons-col class="right" width="20%" style="padding-top:5px;">';
                    html += ' ';
                    html += '</ons-col>';
                    html += '</ons-row>';
                    html += '</ons-list-item><hr>';
                } else {
                    html += '<ons-list-item modifier="tappable"  >';
                    html += '<ons-row>';
                    html += '<ons-col class="left" width="50%">';
                    html += '<div class="sale_name">' + val2.u_fullname + ' (' + val2.u_position + ')</div>';
                    html += '<div class="sale_date">' + val2.u_company + '</div>';
                    html += '<div class="sale_date">' + val2.country + '</div>';
                    html += '</ons-col>';
                    html += '<ons-col width="30%">';
                    html += '<div class="sale_name">' + val2.eb_start_time + ' - ' + val2.eb_end_time + '</div>';
                    html += '<div class="sale_name"><i class="fa fa-table"></i>  ' + val2.eb_table_number + '</div>';
                    html += '</ons-col>';
                    html += '<ons-col class="right" width="20%" style="padding-top:12px;">';
                    html += ' <ons-button modifier="small" style="line-height:20px;font-size:14px;" class="right" onclick="releaseMeeting(' + val2.eb_id + ')" >Cancel</ons-button>';
                    html += '</ons-col>';
                    html += '</ons-row>';
                    html += '</ons-list-item><hr>';
                }
            })

        })
        html += '</ons-list><hr>';
        //	}
    });
    //}
    createElement('schedule-list', html);
}

function displayAllEvents(data) {
    var htm = '';

    if (data.length > 0) {
        $.each(data, function (key, val) {
            var logo = krms_config.ServerUrl + 'box-demo/assets/img/logo.png';
            if (val.e_cover_image != '') {
                logo = krms_config.ServerUrl + '/admin/upload/coverimg/' + val.e_cover_image;
            }
            var address = "";

            htm += '<ons-list-item modifier="chevron" class="list-item-container" onclick="showEvent(' + val.e_id + ');">';
            htm += '<ons-row>';
            htm += '<ons-col width="95px">';
            htm += ' <img src="' + logo + '" class="thumbnail">';
            htm += ' </ons-col>';
            htm += ' <ons-col>';
            htm += '   <div class="name">';
            htm += val.e_name;
            htm += '    </div>';
            htm += '   <div class="location">';
            htm += '       ' + val.e_start_date + ' - ' + val.e_end_date;
            htm += '    </div>';
            htm += '    <div class="desc">';
            htm += '     <i class="fa fa-map-marker"></i> ' + val.e_location;
            htm += '    </div>';
            htm += '  </ons-col>';
            htm += '   <ons-col width="40px"></ons-col>';
            htm += '  </ons-row>';
            htm += ' </ons-list-item>';
        });
    }
    htm += '';
    createElement('event-list', htm);
}

function displayAllPolls(data) {
    var htm = '';

    if (data.length > 0) {
        $.each(data, function (key, val) {
            htm += '<div class="tabcolour1" onclick="pollsdetails(' + val.p_id + ',' + val.status_flag + ');">';

            htm += '<ons-row >';
            htm += '<ons-col class="pollsliststatus" style="width:100%;" >';
            htm += '<span class="headtext">';
            htm += val.p_name;
            htm += '</span>';
            htm += '<div class="bs-example">';
            htm += val.status_html;
            htm += '</div>';
            htm += '</ons-col>';
            htm += '</ons-row>';
            htm += '</div>';


        });
    }
    htm += '';
    createElement('page_polls_inner', htm);

}

function attchProgramDate(data) {
    var htm = '';
    var hallshtm = '';

    if (data.length > 0) {
        $.each(data, function (key, val) {
            htm += '<ons-list-item modifier="chevron" onclick="prgramBydate(' + val.pd_id + ',' + val.pd_type + ')">';
            htm += val.pd_title;
            htm += '</ons-list-item>';
        });
    }

    htm += '';
    createElement('program_dynamic', htm);
    // createElement('all_hall', hallshtm);

}
function setDataByProgramIdSimple(data, singleData) {
    var htm = '';
    var htmheader = '';
    if (singleData !== '') {
        htmheader += '<span id="search-text">' + singleData.program_date_string + '</span>';
    }
    if (data.length > 0) {
        $.each(data, function (key, val) {
            var bg = '';
            if (val.bg_flag == 'white') {
                bg = 'prog-tab-bgcolour';
            }
            var activeClass = '';//alarmimg-active
            if (val.is_set_at_agenda == 'Yes') {
                activeClass = 'alarmimg-active';
            }
            htm += '<ons-list-item modifier="chevron" class="list-item-container list_item-chevron1 ' + bg + '">';
            htm += '<div class="list-item-right" onclick="sNavigator.pushPage()">';
            //if (val.is_set_at_agenda == 'Yes') {
            //  htm += '<div class="alarmimg-position"><i onclick="alreadyRegisterForAlert()" class="alarm-agenda-' + val.pr_id + ' small material-icons alarmimg ' + activeClass + '">alarm_on</i></div>';
            // } else {
            htm += '<div class="alarmimg-position"><i onclick="registerForAlert(' + val.pr_id + ')" class="alarm-agenda-' + val.pr_id + ' small material-icons alarmimg ' + activeClass + '">alarm_on</i></div>';
            //}
            htm += '<div class="list-item-content" style="    margin-left: 0px;" onclick="programDetails(' + val.pr_id + ')">';
            htm += '<span class="desc">' + val.pr_start_time + ' - ' + val.pr_end_time + '</span>';
            htm += '<div class="name">' + val.pr_title;
            htm += '</div>';
            if (val.pr_faculty != '') {
                htm += '<div class="name name_colour">' + val.pr_faculty;

                htm += '</div>';
            }
            htm += '</div>';
            htm += '</div>';
            htm += '</ons-list-item>';

        });
    } else {
        htm += '<ons-list-item class="list__item">';
        htm += 'Comming Soon...';
        htm += '</ons-list-item>';
    }
    htm += '';
    createElement('single_program_title', htmheader);
    createElement('single_program_list', htm);
}

function setDataByProgramIdForHall(data, singleData) {
    var htm = '<ons-list>';
    var htmheader = '';
    if (singleData !== '') {
        htmheader += '<span id="search-text">' + singleData.ph_title + '</span>';
    }
    //console.log(singleData);
    htm += singleData.ph_desc;
    if (data.length > 0) {
        $.each(data, function (key, val) {
            var bg = '';
            if (val.bg_flag == 'white') {
                bg = 'prog-tab-bgcolour';
            }
            var activeClass = '';//alarmimg-active
            if (val.is_set_at_agenda == 'Yes') {
                activeClass = 'alarmimg-active';
            }
            htm += '<ons-list-item modifier="chevron" class="list-item-container list_item-chevron1 ' + bg + '">';
            htm += '<div class="list-item-right" onclick="sNavigator.pushPage()">';
            //if (val.is_set_at_agenda == 'Yes') {
            //htm += '<div class="alarmimg-position"><i onclick=" alreadyRegisterForAlert()"  class="alarm-agenda-' + val.pr_id + ' alarm-agenda small material-icons alarmimg alarmimg-active">alarm_on</i></div>';
            //} else {
            htm += '<div class="alarmimg-position"><i onclick=" registerForAlert(' + val.pr_id + ')"  class="alarm-agenda-' + val.pr_id + ' alarm-agenda small material-icons alarmimg ' + activeClass + '">alarm_on</i></div>';
            //}
            htm += '<div class="list-item-content "  style="    margin-left: 0px;" onclick="programDetails(' + val.pr_id + ')">';
            htm += '<span class="desc">' + val.pr_start_time + ' - ' + val.pr_end_time + '</span>';
            htm += '<div class="name">' + val.pr_title;
            htm += '</div>';
            if (val.pr_faculty != '') {
                htm += '<div class="name name_colour ">' + val.pr_faculty;

                htm += '</div>';
            }
            htm += '</div>';
            htm += '</div>';
            htm += '</ons-list-item>';

        });
    } else {
        htm += '<ons-list-item class="list__item">';
        htm += 'Comming Soon...';
        htm += '</ons-list-item>';
    }
    htm += '</ons-list>';
    createElement('hall_program_title', htmheader);
    createElement('hall_program_list', htm);
}

function setMyagenda(data) {
    var htm = '';
    if (data.length > 0) {
        $.each(data, function (key, val) {
            htm += '<div class="row prog-tab-bgcolour reg_main_agenda">';
            htm += '<div class="agenda_date center" onclick="programDetails(' + val.pr_id + ');">';
            htm += '<b>' + val.d_date + '</b> <br>' + val.d_remain_date;
            htm += '</div>';
            htm += '<div class="col s10 agenda_time" onclick="programDetails(' + val.pr_id + ');">';
            htm += val.pr_title + '<br />';
            if (val.ph_title !== null) {
                htm += val.ph_title + '<br />';
            }
            htm += '<b>' + val.pr_start_time + ' to ' + val.pr_end_time + '</b>';
            htm += '<br>';
            htm += '</div>';
            htm += '<div class="s2" onclick="myAgendaRemove(' + val.cn_id + ');">';
            htm += '<button class="btn btn-danger btn-xs remove-agenda-btn-ar"><i class="fa fa-trash-o "></i></button>';
            htm += '</div>';
            htm += '</div>';
        });
    }

    htm += '';
    createElement('myagenda_list', htm);
}

function myAgenda() {

    menu.setMainPage('myagenda.html', {closeMenu: true});
    /* var options = {
     animation: 'slide',
     onTransitionEnd: function () {
     
     }
     };*/
    /* var params = '';
     params += "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
     callAjax("getMyagenda", params);
     menu.setMainPage('myagenda.html', {
     closeMenu: true
     });*/
}
function myAgendaRemove(cn_id) {
    ons.notification.confirm({
        message: 'Are you sure to remove?',
        callback: function (idx) {
            if (idx) {
                var params = "registrationId=" + getStorage("device_id");
                params += "&device_platform=" + getStorage("device_platform");
                params += "&cn_program_id=" + getStorage("program_id");
                params += "&cn_user_id=" + getStorage("user_id");
                params += "&cn_id=" + cn_id;
                params += "&title=Test title";
                params += "&message=Test message";
                params += "&datetime_notify=2016-09-21 09:00:00";
                callAjax("remove_reminder", params);
            } else {
                // onsenAlert(data.msg);
            }
        }
    });
}

function setProgramDetails(data) {
    console.log('setProgramDetails');
    var htm = '';
    var htmTitle = '';
    var facultyFlag = '';
    if (data.pr_faculty != '') {
        facultyFlag = 'Faculty Name : ';
    }
    var activeClass = '';
    if (data.is_set_at_agenda == 'Yes') {
        activeClass = 'rsvp-btn-ar';
    }
    setStorage('program_id', data.pr_id);
    htmTitle += '<span id="search-text">' + data.pr_title + '</span>';
    htm += '<div class="pr_title">';
    htm += data.pr_title + ' [' + data.pr_start_time + ' - ' + data.pr_end_time + ']';
    htm += '</div>';
    htm += '<div style="color:red">' + facultyFlag + data.pr_faculty + '</div>';
    htm += '<div>';
    htm += '<hr class="reg_hr1">';
    htm += '</div>';
    htm += '<div class="reg_data">';
    htm += '' + data.pr_desc + '';
    htm += '</div>';
    htm += '<br>';
    htm += '<br>';
    htm += '<div class="">';
    //if (data.is_set_at_agenda == 'Yes') {
    //htm += '<ons-button onclick="alreadyRegisterForAlert()" id="rsvp-btn-ar" class="rsvp-btn-ar">RSVP</ons-button>';
    //} else {
    htm += '<ons-button onclick="registerForAlert(' + data.pr_id + ')" id="rsvp-btn-ar" class="' + activeClass + '">RSVP</ons-button>';
    htm += '<ons-button style="margin-left:20px" onclick="ask_question(' + data.pr_id + ')">Ask Question</ons-button>';
    //}
    htm += '</div>';
    htm += '';

    createElement('program_id', 'Program Detail');
    createElement('program_main_deails', htm);
}

function ask_question(data) {
    if (isLogin()) {
        if (typeof dialogaskque === "undefined" || dialogaskque == null || dialogaskque == "") {
            ons.createDialog('ask_question.html').then(function (dialog) {
                dialog.show();
                translatePage();
                translateValidationForm();
                setStorage('pq_program_id', data);
                //$("#pq_quetion").val(data);
                //alert($("#pq_quetion").val());
            });

        } else {
            dialogaskque.show();
        }

    } else {
        menu.setMainPage('prelogin.html', {
            closeMenu: true
        })
    }
}
function mail_person() {
    //alert(type);

    if (typeof dialogmail_person === "undefined" || dialogmail_person == null || dialogmail_person == "") {
        ons.createDialog('mail_person.html').then(function (dialog) {
            dialog.show();
            translatePage();
            translateValidationForm();
            //$("#pq_quetion").val(data);
            //alert($("#pq_quetion").val());
        });

    } else {
        dialogmail_person.show();
    }
}


function setDataByProgramIdHall(data, singleDetails) {
    var htm = '';
    var htmTitle = singleDetails.pd_title;
    if (data.length > 0) {
        $.each(data, function (key, val) {
            htm += '<ons-list-item modifier="chevron" id="hd-linehight"  onclick="prgramByHall(' + val.ph_id + ')">';
            htm += val.ph_title;
            htm += '</ons-list-item>';
        });
    } else {
        htm += '<ons-list-item class="list__item">';
        htm += 'Comming Soon...';
        htm += '</ons-list-item>';
    }
    htm += '';
    createElement('all_hall_dynamic', htm);
    createElement('hall_title', htmTitle);
}

function prgramByHall(dateId) {
//console.log(dateId);
    //console.log(programType);
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {
            var params = '';
            params += "&pd_type=1&pd_id=" + dateId + "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
            callAjax("getprogramsByDateIdhall", params);
        }
    };

    sNavigator.pushPage("agenda_hall_program.html", options);

}

function programDetails(pr_id) {
    //console.log(pr_id);
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {
            //console.log('end');
            var params = '';
            params += "&pr_id=" + pr_id + "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
            callAjax("getProgramDetails", params);
        }
    };
    //console.log('outside');
    sNavigator.pushPage("my_program_details.html", options);

}

function showProg_out() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    console.log('showProg_out');
    var params = '';
    params += "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
    callAjax("getprgramdate", params);
    sNavigator.pushPage("Prog_out.html", options);
}

function prgramBydate(dateId, programType) {
    //console.log(dateId);
    //console.log(programType);
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {
            var params = '';
            params += "&pd_type=" + programType + "&pd_id=" + dateId + "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
            callAjax("getprogramsByDateId", params);
        }
    };

    if (programType == '1') {
        sNavigator.pushPage("agenda_26jan.html", options);
    } else if (programType == '0') {
        sNavigator.pushPage("allhalls.html", options);
    }


}

function displayPollsDetailsByIdisAnswerd(data) {
    console.log(data);
    var htm = '';

    htm += '<ons-list><div modifier="chevron" class="list-item-container">';
    htm += '<div class="list-item-left">';
    htm += '</div>';
    htm += '<div class="list-item-right ">';
    htm += '<div class="left prog-out-head2text1">';
    htm += '<span id="search-text"><b>';
    htm += data.pollData.p_name;
    htm += '<b></span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</div></ons-list>';
    htm += '<ons-scroller style="height:100%; width: 100%" class="scrollerpad">';
    htm += '<form action="#">';
    if (data.details.length > 0) {
        $.each(data.details, function (key, val) {
            htm += '<div class="formcolour" >';
            htm += '<input type="checkbox" name="r_question_id" id="chk_' + val.q_id + '" onchange="submitAns(' + val.q_id + ',' + data.pollData.p_id + ')" />';
            htm += '<label class="lblclass" for="chk_' + val.q_id + '">' + val.q_title + '</label>';
            htm += '</div>';
        });
    }
    htm += '</form></ons-scroller>';
    htm += '';
    createElement('setpollsDetails', htm);

}


function displayPollsDetailsByIdisReviewed(data) {
    console.log(data);
    var htm = '';

    htm += '<ons-list><div modifier="chevron" class="list-item-container">';
    htm += '<div class="list-item-left">';
    htm += '</div>';
    htm += '<div class="list-item-right ">';
    htm += '<div class=" prog-out-head2text1">';
    htm += '<span id="search-text"><b>';
    htm += data.pollData.p_name;
    htm += '<b></span>';
    htm += '</div>';
    htm += '</div>';
    htm += '</div></ons-list>';
    htm += '<ons-scroller style="height:100%; width: 100%" class="scrollerpad">';
    htm += '<form action="#" class="formPadding">';
    if (data.details.length > 0) {
        $.each(data.details, function (key, val) {
            var stylew = val.count_perc;
            var widths = '';
            console.log(stylew);
            if (stylew == 0) {
                widths = '';
            } else {
                widths = 'width:' + number_format(val.count_perc, 0, '', '') + '%';
            }
            console.log(widths);
            htm += '<div class="progress progbar prog2colour ">';
            htm += '<div class="determinate prog1colour" style="' + widths + '">';
            htm += '<div class="lblclassp2" >';
            //htm += '<input type="checkbox" checked id="chk_' + val.q_id + '" />';
            htm += '<label class="lblclass" for="chk_' + val.q_id + '">[ ' + val.q_title + ' ] ' + val.count_status + '</label>';
            htm += '</div>';
            htm += '</div>';
            htm += '<div class="pull-right fullprogressbar" >';
            htm += '<span style="margin-right: 10px;">' + number_format(val.count_perc, 0, '', '') + '%</span>';
            htm += '</div>';
            htm += '</div>';
        });
    }
    htm += '</form></ons-scroller>';
    htm += '';
    createElement('setpollsDetailsAnswerd', htm);

}


function pollsdetails(poll_id, statusFlag) {
    setStorage('statusFlag', statusFlag);
    setStorage('poll_id', poll_id);
    sNavigator.pushPage("pollsdetails.html");
}

function backtoallpolls(res) {
    var params = '';
    params += "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
    callAjax("getallpolls", params);
    sNavigator.popPage("polls.html");
    if (res == '1') {
        onsenAlert('Answer submited', 'Success');
    }
}

function submitAns(question_id, poll_id) {
    if ($('[type="checkbox"]').is(":checked")) {
        ons.notification.confirm({
            message: 'Are you sure you want to submit?',
            callback: function (idx) {
                if (idx) {
                    var params = '';
                    params += "&question_id=" + question_id + "&poll_id=" + poll_id + "&statusFlag=" + getStorage("statusFlag") + "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
                    callAjax("submitanswer", params);
                } else {
                    var params = '';
                    params += "&poll_id=" + getStorage("poll_id") + "&statusFlag=" + getStorage("statusFlag") + "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform") + '&user_id=' + getStorage("user_id");
                    callAjax("pollsdetails", params);
                }
            }
        });
    } else {

    }
}

/*mycallajax*/
function callAjax(action, params) {
    if (!hasConnection()) {
        if (action != "registerMobile") {
            onsenAlert(getTrans("CONNECTION LOST", 'connection_lost'));
        }
        return;
    }
    /*add language use parameters*/
    params += "&lang_id=" + getStorage("default_lang");
    params += "&device_token_main=" + getStorage("device_id");
    params += "&device_type_main=" + getStorage("device_platform");

    dump(ajax_url + action + '&' + params);
    ajax_request = $.ajax({
        url: ajax_url + action,
        data: params,
        type: 'POST',
        async: false,
        dataType: 'jsonp',
        timeout: 6000,
        crossDomain: true,
        beforeSend: function () {
            if (ajax_request != null) {
                /*abort ajax*/
                hideAllModal();
                ajax_request.abort();
            } else {
                /*show modal*/
                switch (action) {
                    case "registerMobile":
                        break;
                    case "getLanguageSettings":
                        loaderLang.show();
                        break;
                    default:
                        loader.show();
                        break;
                }
            }
        },
        complete: function (data) {
            ajax_request = null;
            hideAllModal();
        },
        success: function (data) {
            appdata.response = data;
            dump(data);
            if (data.code == 0) {
                switch (action) {
                    case "signup":
                        //  console.log('At signup');
                        setStorage("client_token", data.details.u_id);
                        setStorage("user_id", data.details.u_id);
                        setStorage("full_name", data.details.u_name);
                        setStorage("email", data.details.u_email);
                        menu.setMainPage('mainmenu.html', {
                            closeMenu: true
                        });
                        onsenAlert("Thank you for Ragistration at AICOG ", 'Success!');
                        break;
                    case "getallpolls":
                        displayAllPolls(data.details);
                        break;
                    case "getprgramdate":
                        attchProgramDate(data.details, data.singleDetails);
                        break;
                    case "getprogramsByDateId":
                        // console.log('AR-'+data.singleDetails.program_date_string);
                        if (data.singleDetails.pd_type == '1') {
                            setDataByProgramIdSimple(data.details, data.singleDetails);
                        } else {
                            setDataByProgramIdHall(data.details, data.singleDetails);
                        }
                        break;
                    case "getprogramsByDateIdhall":
                        setDataByProgramIdForHall(data.details, data.singleDetails);

                        break;
                    case "getProgramDetails":
                        setProgramDetails(data.details);
                        break;
                    case "getMyagenda":
                        setMyagenda(data.details);
                        break;
                    case "remove_reminder":
                        myAgenda();
                        break;
                    case "checkReminder":
                        var params = "registrationId=" + getStorage("device_id");
                        params += "&device_platform=" + getStorage("device_platform");
                        params += "&cn_program_id=" + getStorage("program_id");
                        params += "&cn_user_id=" + getStorage("user_id");
                        params += "&title=Test title";
                        params += "&message=Test message";
                        params += "&datetime_notify=2016-09-21 09:00:00";
                        callAjax("reminder_notify", params);
                        break;
                    case "reminder_notify":
                        var pr_id = getStorage("program_id");
                        console.log('AR' + pr_id);
                        $('.alarm-agenda-' + pr_id).addClass('alarmimg-active');
                        $('#rsvp-btn-ar').addClass('rsvp-btn-ar');
                        if (data.status == '1') {
                            ons.createDialog('mydialog.html').then(function (dialog) {
                                $(".mydialog-title").html('Aicog 2017 Ahmedabad');
                                $(".mydialog-message").html(data.message);
                                dialog.show();
                            });
                        } else {
                            ons.createDialog('mydialog.html').then(function (dialog) {
                                $(".mydialog-title").html('Aicog 2017 Ahmedabad');
                                $(".mydialog-message").html('You will be notify before 30 min when this event will be start.');
                                dialog.show();
                            });
                        }
                        break;
                    case "pollsdetails":
                        //
                        if (data.statusFlag == '1') {
                            displayPollsDetailsByIdisAnswerd(data);
                        } else if (data.statusFlag == '2') {
                            displayPollsDetailsByIdisReviewed(data);
                        }
                        break;
                    case "submitanswer":
                        backtoallpolls('1');
                        break;
                    case "getProfile":
                        $(".first_name").val(data.details.user_fname);
                        $(".last_name").val(data.details.user_lname);
                        $(".email_profile").val(data.details.user_email);
                        appdata.userInfo = data.details;
                        break;

                    case "registerUsingFb":
                        break;

                    case "events":
                        displayAllEvents(data.details);
                        break;
                    case "myschedule":
                        displayMySchedule(data.details);
                        break;

                    case "event_detail":
                        displayEventDetail(data.details);
                        break;


                    case "arrangeMeeting":
                        //showEvent(getStorage('event_id'));
                        onsenAlert(data.msg);
                        break;


                    case "releaseMeeting":
                        onsenAlert("Metting canceled successfully.");
                        callAjax("myschedule", "user_id=" + getStorage("user_id"));
                        break;

                    case "login":
                        console.log('At login');
                        setStorage("client_token", data.details.u_id);
                        setStorage("user_id", data.details.u_id);
                        setStorage("full_name", data.details.u_name);
                        setStorage("email", data.details.u_email);
                        menu.setMainPage('mainmenu.html', {
                            closeMenu: true
                        });
                        onsenAlert("Welcome At AICOG", 'Login Success!');
                        break;
                    case "forgotPassword":
                        onsenAlert(data.msg);
                        dialogForgotPass.hide();
                        break;
                    case "registerMobile":
                        /*silent */
                        break;

                    case "getLanguageSelection":
                        displayLanguageSelection(data.details);
                        break;
                    case "getLanguageSettings":
                        setStorage("translation", JSON.stringify(data.details.translation));
                        var device_set_lang = getStorage("default_lang");
                        dump("device_set_lang=>" + device_set_lang);
                        if (empty(device_set_lang)) {
                            dump('proceed');
                            if (!empty(data.details.settings.default_lang)) {
                                setStorage("default_lang", data.details.settings.default_lang);
                            } else {
                                setStorage("default_lang", "");
                            }
                        }
                        translatePage();
                        break;
                    case "ask_prog_question":
                        //dialog.close();

                        onsenAlert('Successfully Submitted');
                    case "sendContactMail":
                        //dialog.close();

                        onsenAlert('Successfully Submitted');
                        break;
                    default:
                        //onsenAlert("Sorry but something went wrong during processing your request");
                        onsenAlert(data.msg);
                        break;
                }
            } else {
                /*failed condition*/
                console.log(data.msg);
                console.log(action);
                switch (action) {

                    case "getProfile":
                        dump('show login form')
                        menu.setMainPage('prelogin.html', {
                            closeMenu: true
                        });
                        break;
                    case "registerMobile":
                    case "checkReminder":
                        ons.notification.confirm({
                            message: data.msg,
                            callback: function (idx) {
                                if (idx) {
                                    var params = "registrationId=" + getStorage("device_id");
                                    params += "&device_platform=" + getStorage("device_platform");
                                    params += "&cn_program_id=" + getStorage("program_id");
                                    params += "&cn_user_id=" + getStorage("user_id");
                                    params += "&title=Test title";
                                    params += "&message=Test message";
                                    params += "&datetime_notify=2016-09-21 09:00:00";
                                    callAjax("reminder_notify", params);
                                } else {
                                    // onsenAlert(data.msg);
                                }
                            }
                        });
                        break;
                    case "getSettings":
                    case "getLanguageSettings":
                        /*silent */
                        break;
                    default:
                        onsenAlert(data.msg);
                        break;
                }
            }
        },
        error: function (request, error) {
            hideAllModal();
            if (action == "getLanguageSettings" || action == "registerMobile") {
            } else {
                onsenAlert(getTrans("Network error has occurred please try again!", 'network_error'));
            }
        }
    });
}

function setHome() {
    dump("setHome");
    var options = {
        closeMenu: true,
        animation: 'slide',
        callback: setHomeCallback
    };
    menu.setMainPage('home.html', options);
}

function setHomeCallback() {
    refreshConnection();
}


function empty(data) {
    if (typeof data === "undefined" || data == null || data == "") {
        return true;
    }
    return false;
}
/*end ready*/

/*sliding menu*/
ons.ready(function () {
    console.log("On ready stage");

    menu.on('preopen', function () {
        console.log("Menu page is going to open");

        translatePage();
    });
});

function showProfile() {
    if (isLogin()) {
        menu.setMainPage('profile.html', {
            closeMenu: true
        });
    } else {
        menu.setMainPage('prelogin.html', {
            closeMenu: true
        })
    }
}


function showEvent(event_id) {
    appdata.event_id = event_id;
    setStorage("event_id", event_id);
    dump(event_id);
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {
        }
    };
    sNavigator.pushPage("event_detail.html", options);
}


function saveProfile() {
    $.validate({
        form: '#frm-profile',
        borderColorOnError: "#FF0000",
        onError: function () {
        },
        onSuccess: function () {
            var params = $("#frm-profile").serialize();
            params += "&client_token=" + getStorage("client_token");
            callAjax("saveProfile", params);
            return false;
        }
    });
}

function changepassword() {
    $.validate({
        form: '#frm-changepassword',
        borderColorOnError: "#FF0000",
        onError: function () {
        },
        onSuccess: function () {
            var params = $("#frm-changepassword").serialize();
            params += "&client_token=" + getStorage("client_token");
            callAjax("changepassword", params);
            return false;
        }
    });
}
function login() {
    console.log('login function call');
    $.validate({
        form: '#frm-login',
        borderColorOnError: "#FF0000",
        onError: function () {
            console.log('login function call err');
        },
        onSuccess: function () {
            console.log('login function call succ');
            var params = $("#frm-login").serialize();
            //params += "&device_id=" + getStorage("device_id");
            callAjax("login", params);
            return false;
        }
    });
}


function signup() {
    console.log('signup function call');
    $.validate({
        form: '#frm-signup',
        borderColorOnError: "#FF0000",
        onError: function () {
            console.log('signup function call err');
        },
        onSuccess: function () {
            console.log('signup function call succ');
            var params = $("#frm-signup").serialize();
            params += "&device_token=" + getStorage("device_id") + '&device_type=' + getStorage("device_platform");
            callAjax("signup", params);
            return false;
        }
    });
}


function logout() {
    removeStorage("client_token");
    removeStorage("user_id");
    onsenAlert(getTrans("Your are now logout", 'you_are_now_logout'));
    menu.setMainPage('prelogin.html', {
        closeMenu: true
    });
}

function isLogin() {
    if (!empty(getStorage("client_token"))) {
        return true;
    }
    return false;
}

function showLogin(next_steps) {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {
            if (!empty(next_steps)) {
                $(".page-login-fb").show();
                $(".next_steps").val(getStorage("transaction_type"));
            } else {
                $(".page-login-fb").hide();
                $(".next_steps").val('');
            }
        }
    };
    sNavigator.pushPage("login.html", options);
}

function showForgotPass() {
    $(".email_address").val('');
    if (typeof dialogForgotPass === "undefined" || dialogForgotPass == null || dialogForgotPass == "") {
        ons.createDialog('forgotPassword.html').then(function (dialog) {
            dialog.show();
            translatePage();
            translateValidationForm();
            $(".email_address").attr("placeholder", getTrans('Email Address', 'email_address'));
        });
    } else {
        dialogForgotPass.show();
    }
}

function forgotPassword() {
    $.validate({
        form: '#frm-forgotpass',
        borderColorOnError: "#FF0000",
        onError: function () {
        },
        onSuccess: function () {
            var params = $("#frm-forgotpass").serialize();
            callAjax("forgotPassword", params);
            return false;
        }
    });
}


function ask_question_detail() {
    dialogaskque.hide();
    $.validate({
        form: '#frm-ask_que',
        borderColorOnError: "#FF0000",
        onError: function () {
        },
        onSuccess: function () {

            var params = $("#frm-ask_que").serialize();
            params += "&pq_program_id=" + getStorage("pq_program_id") + '&pq_u_id=' + getStorage("user_id");
            callAjax("ask_prog_question", params);
            return false;
        }
    });
}
function send_mail_to_person() {
    dialogmail_person.hide();
    $.validate({
        form: '#frm-mail-person',
        borderColorOnError: "#FF0000",
        onError: function () {
        },
        onSuccess: function () {

            var params = $("#frm-mail-person").serialize();
            // params += "&receiver_email=hardik4hardik@gmail.com" +  '&type=' + getStorage("mail_type")+  '&u_id=' + getStorage("user_id")+  '&id=' + getStorage("mail_id");
            params += "&receiver_email=" + getStorage("mail") + '&type=' + getStorage("mail_type") + '&u_id=' + getStorage("user_id") + '&id=' + getStorage("mail_id");
            callAjax("sendContactMail", params);
            return false;
        }
    });
}
function contact_return() {
    if (isLogin()) {
        menu.setMainPage('mainmenu.html', {
            closeMenu: true
        });
    } else {
        menu.setMainPage('prelogin.html', {
            closeMenu: true
        });
    }

}
function showMySchedule() {
    if (isLogin()) {
        menu.setMainPage('myschedule.html', {
            closeMenu: true
        });
    } else {
        menu.setMainPage('prelogin.html', {
            closeMenu: true
        });
    }
}

function showCalander() {
    if (isLogin()) {
        menu.setMainPage('calanders.html', {
            closeMenu: true
        });
    } else {
        menu.setMainPage('prelogin.html', {
            closeMenu: true
        });
    }
}

function SignUpShow() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("signup.html", options);
}

function showPolls() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("polls.html", options);
}

function showSponsorship() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("Sponsorship.html", options);
}
function showPolls1() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("polls1.html", options);
}
function showregistration() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("registration.html", options);
}
function showPolls2() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("polls2.html", options);
}
function showAccommodation() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("Accommodation.html", options);
}
function showabstractsub() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("abstractsub.html", options);
}

function showContact_us() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("Contact_us.html", options);
}
function showentertainment() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("entertainment.html", options);
}
function showDownload() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("Download.html", options);
}
function showVenue() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("Venue.html", options);
}

function showImp_date() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("Imp_date.html", options);
}


function ShowPrograms() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("programs.html", options);
}
function showfrontpage() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("frontpage.html", options);
}
function showfrontpageform() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("frontpageform.html", options);
}
function showfrontpageformreg() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("frontpageformreg.html", options);
}
function showaboutguj() {
    var options = {
        animation: 'slide',
        onTransitionEnd: function () {

        }
    };
    sNavigator.pushPage("aboutguj.html", options);
}

function initFacebook() {
    dump('initFacebook');
    if (!empty(krms_config.facebookAppId)) {
        $(".fb-loginbutton").show();
        openFB.init({
            appId: krms_config.facebookAppId
        });
    } else {
        $(".fb-loginbutton").hide();
    }
    /*$.ajaxSetup({ cache: true });
     $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
     FB.init({
     appId: '191654534503876',
     version: 'v2.3' // or v2.0, v2.1, v2.2, v2.3
     });
     });*/
}

function myFacebookLogin() {
    /*FB.getLoginStatus(function(response) {
     if (response.status === 'connected') {
     dump('already login');
     getFbInfo();
     } else {
     FB.login(function(response){
     dump(response);
     if ( response.status=="connected"){
     getFbInfo();
     } else {
     onsenAlert("Login failed.");
     }
     }, {scope: 'public_profile,email'});
     }
     });	*/
    openFB.login(
            function (response) {
                if (response.status === 'connected') {
                    //alert('Facebook login succeeded, got access token: ' + response.authResponse.token);
                    getFbInfo();
                } else {
                    alert('Facebook login failed: ' + response.error);
                }
            }, {
        scope: 'public_profile,email'
    });
}

function getFbInfo() {
    openFB.api({
        path: '/me',
        params: {
            fields: "email,first_name,last_name"
        },
        success: function (data) {
            dump(data);
            var params = "&email=" + data.email;
            params += "&first_name=" + data.first_name;
            params += "&last_name=" + data.last_name;
            params += "&fbid=" + data.id;
            params += "&device_id=" + getStorage("device_id");
            if ($(".next_steps").exists()) {
                params += "&next_steps=" + $(".next_steps").val();
            }
            callAjax("registerUsingFb", params);
        },
        error: fbErrorHandler
    });
    /*FB.api('/me?fields=email,name', function(response) {
     dump(response);
     var params="&email="+ response.email;
     params+="&name="+response.name;
     params+="&fbid="+response.id;
     if ( $(".next_steps").exists()){
     params+="&next_steps="+ $(".next_steps").val();
     }
     callAjax("registerUsingFb",params);
     });*/
}

function fbErrorHandler(error) {
    alert("ERROR=> " + error.message);
}

function FBlogout() {
    /*FB.logout(function(response) {
     dump(response);
     });*/
    openFB.logout(
            function () {
                onsenAlert('Logout successful');
            },
            fbErrorHandler);
}

function showNotification(title, message) {
    if (typeof pushDialog === "undefined" || pushDialog == null || pushDialog == "") {
        ons.createDialog('pushNotification.html').then(function (dialog) {
            $(".push-title").html(title);
            $(".push-message").html(message);
            if (data.push_type == 'agenda') {
                $('#push-view-btn').html('<ons-button class="trn button green-btn button--large" onclick="myAgenda()" data-trn-key="view">View</ons-button>');
            } else {
                $('#push-view-btn').html('<ons-button class="trn button green-btn button--large" onclick="pushDialog.hide();" data-trn-key="view">View</ons-button>');
            }
            dialog.show();
        });
    } else {
        $(".push-title").html(title);
        $(".push-message").html(message);
        pushDialog.show();
    }
}

function saveSettings() {
    setStorage("country_code_set", $(".country_code_set").val());
    var params = $("#frm-settings").serialize();
    params += "&client_token=" + getStorage("client_token");
    params += "&device_id=" + getStorage("device_id");
    callAjax("saveSettings", params);
}

function showNotificationCampaign(title, message) {
    if (typeof pushcampaignDialog === "undefined" || pushcampaignDialog == null || pushcampaignDialog == "") {
        ons.createDialog('pushNotificationCampaign.html').then(function (dialog) {
            $("#page-notificationcampaign .push-title").html(title);
            $("#page-notificationcampaign .push-message").html(message);
            dialog.show();
        });
    } else {
        $("#page-notificationcampaign .push-title").html(title);
        $("#page-notificationcampaign .push-message").html(message);
        pushcampaignDialog.show();
    }
}

function number_format(number, decimals, dec_point, thousands_sep) {
    number = (number + '')
            .replace(/[^0-9+\-Ee.]/g, '');
    var n = !isFinite(+number) ? 0 : +number,
            prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
            sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
            dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
            s = '',
            toFixedFix = function (n, prec) {
                var k = Math.pow(10, prec);
                return '' + (Math.round(n * k) / k)
                        .toFixed(prec);
            };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
            .split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '')
            .length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1)
                .join('0');
    }
    return s.join(dec);
}
var translator;
var dictionary;

function getLanguageSettings() {
    if (!hasConnection()) {
        return;
    }
    // callAjax("getLanguageSettings", '');
}

function translatePage() {
    dump("TranslatePage");

    if (isLogin()) {
        console.log("login ok");
        $(".logout-menu").show();
        $(".login-menu").hide();
    } else {
        console.log("not looged in ");
        $(".logout-menu").hide();
        $(".login-menu").show();
    }

    //if (getStorage("translation")!="undefined"){
    if (typeof getStorage("translation") === "undefined" || getStorage("translation") == null || getStorage("translation") == "") {
        return;
    } else {
        dictionary = JSON.parse(getStorage("translation"));
    }
    if (!empty(dictionary)) {
        //dump(dictionary);
        var default_lang = getStorage("default_lang");
        //dump(default_lang);
        if (default_lang != "undefined" && default_lang != "") {
            dump("INIT TRANSLATE");
            translator = $('body').translate({
                lang: default_lang,
                t: dictionary
            });
        }
    }
    appdata.ontranslationComplete();
}

function getTrans(words, words_key) {
    var temp_dictionary = '';
    /*dump(words);
     dump(words_key);	*/
    if (getStorage("translation") != "undefined") {
        temp_dictionary = JSON.parse(getStorage("translation"));
    }
    if (!empty(temp_dictionary)) {
        //dump(temp_dictionary);
        var default_lang = getStorage("default_lang");
        //dump(default_lang);
        if (default_lang != "undefined" && default_lang != "") {
            //dump("OK");
            if (array_key_exists(words_key, temp_dictionary)) {
                //dump('found=>' + words_key +"=>"+ temp_dictionary[words_key][default_lang]);
                return temp_dictionary[words_key][default_lang];
            }
        }
    }
    return words;
}

function array_key_exists(key, search) {
    if (!search || (search.constructor !== Array && search.constructor !== Object)) {
        return false;
    }
    return key in search;
}

function translateValidationForm() {
    $.each($(".has_validation"), function () {
        var validation_type = $(this).data("validation");
        switch (validation_type) {
            case "number":
                $(this).attr("data-validation-error-msg", getTrans("The input value was not a correct number", 'validation_numeric'));
                break;
            case "required":
                $(this).attr("data-validation-error-msg", getTrans("this field is mandatory!", 'validaton_mandatory'));
                break;
            case "email":
                $(this).attr("data-validation-error-msg", getTrans("You have not given a correct e-mail address!", 'validation_email'));
                break;
        }
    });
}

function showLanguageList() {
    if (typeof languageOptions === "undefined" || languageOptions == null || languageOptions == "") {
        ons.createDialog('languageOptions.html').then(function (dialog) {
            dialog.show();
            translatePage();
        });
    } else {
        languageOptions.show();
    }
}

function displayLanguageSelection(data) {
    var selected = getStorage("default_lang");
    dump("selected=>" + selected);
    var htm = '';
    htm += '<ons-list>';
    htm += '<ons-list-header class="list-header trn" data-trn-key="language">Language</ons-list-header>';
    $.each(data, function (key, val) {
        dump(val.lang_id);
        ischecked = '';
        if (val.lang_id == selected) {
            ischecked = 'checked="checked"';
        }
        htm += '<ons-list-item modifier="tappable" onclick="setLanguage(' + "'" + val.lang_id + "'" + ');">';
        htm += '<label class="radio-button checkbox--list-item">';
        htm += '<input type="radio" name="country_code" class="country_code" value="' + val.lang_id + '" ' + ischecked + ' >';
        htm += '<div class="radio-button__checkmark checkbox--list-item__checkmark"></div>';
        htm += ' ' + val.language_code;
        htm += '</label>';
        htm += '</ons-list-item>';
    });
    htm += '</ons-list>';
    createElement('language-options-list', htm);
    translatePage();
}


function setLanguage(lang_id) {
    //removeStorage("translation");
    dump(getStorage("translation"));
    if (typeof getStorage("translation") === "undefined" || getStorage("translation") == null || getStorage("translation") == "") {
        languageOptions.hide();
        ons.notification.confirm({
            message: 'Language file has not been loaded, would you like to reload?',
            title: dialog_title_default,
            buttonLabels: ['Yes', 'No'],
            animation: 'none',
            primaryButtonIndex: 1,
            cancelable: true,
            callback: function (index) {
                if (index == 0 || index == "0") {
                    getLanguageSettings();
                }
            }
        });
        return;
    }
    if (getStorage("translation").length <= 5) {
        onsenAlert("Translation file is not yet ready.");
        return;
    }
    if (!empty(lang_id)) {
        setStorage("default_lang", lang_id);
        if (!empty(translator)) {
            translator.lang(lang_id);
        } else {
            translator = $('body').translate({
                lang: lang_id,
                t: dictionary
            });
        }
    }
}


$.extend($.expr[':'], {
    'containsi': function (elem, i, match, array) {
        return (elem.textContent || elem.innerText || '').toLowerCase()
                .indexOf((match[3] || "").toLowerCase()) >= 0;
    }
});
String.prototype.replaceAll = function (search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};
var appdata = {
    search2: function (string) {
        if (string) {
            $('[modifier="tappable"]').removeClass('insearch').find('.restauran-title:containsi("' + string + '")').closest('[modifier="tappable"]').show().addClass('insearch');
            $('[modifier="tappable"]').find('.item_description:containsi("' + string + '")').closest('[modifier="tappable"]').show().addClass('insearch');
            $('[modifier="tappable"]').not('.insearch').hide();
            $('.my-row-bdr-nn-outer').addClass('my-row-bdr-nn-no');
        } else {
            $('#searhMenuInput').val('');
            $('[modifier="tappable"]').show();
            $('.my-row-bdr-nn-outer').removeClass('my-row-bdr-nn-no');
        }
    },
    pagename: '',
    ontranslationComplete: function () {

        var t = 0;
        if (this.pagename == 'page-home' || this.pagename == '') {

            $(document).on("keyup", ".search-input", function () {
                $('.pac-container').addClass('needsclick');
                $('.pac-item').addClass('needsclick');
            });
        }
        console.log(this.pagename);
        if (this.pagename == 'page-signup') {
            $('[name=contact_phone]').mask('(000)-000-0000');
        }

    },
    allHtml: '',
    texthide: function (obj) {
        $(obj).find('i').toggle();
        var target = $(obj).prev();
        if (target.hasClass('ellipsis')) {
            target.removeClass('ellipsis');
            target.css('white-space', 'normal');
            $('.navigation-bar__center').css('height', 'auto');
            $('.navigation-bar').css('height', 'auto');
        } else {
            target.addClass('ellipsis');
            $('.navigation-bar').css('height', '44px');
        }
    },
    shortText: function (obj) {
        var maxLength = 10;
        this.allHtml = obj.html();
        // if(this.allHtml.length>maxLength){
        if (!obj.hasClass('ellipsis')) {
            // obj.addClass('ellipsis').after('<span class="morebtn" onclick="popUpAddressSearh();"><i class="fa fa-pencil" style="font-size: 18px;"></i></span>');
        }
        //}
    },
    htmlTemplate: '',
    renderHtml: function (html, object) {
        $.each(object, function (index, value) {
            html = html.replaceAll(index, value);
        });
        return html;
    },
    creteHtml: function (template, data) {
        this.htmlTemplate = $('#' + template).html();
        if (this.htmlTemplate) {
            return this.renderHtml(this.htmlTemplate, data);
        }
    },
    creteHtmldata: function (template, data) {
        this.htmlTemplate = $('#' + template).html();
        var html = '';
        if (this.htmlTemplate) {
            $.each(data, function (index, value) {
                html = html + appdata.renderHtml(appdata.htmlTemplate, value);
            });
        }
        return html;
    },
    dataToHtml: function (html, object) {
        $.each(object, function (index, value) {
            html = html.replaceAll('_' + index + '_', value || '');
        });
        return html;
    },
    renderHtmldata: function (template, data) {
        this.htmlTemplate = $('#' + template).html();
        var html = '';
        if (this.htmlTemplate) {
            $.each(data, function (index, value) {
                html = html + appdata.dataToHtml(appdata.htmlTemplate, value);
            });
        }
        return html;
    }
}


jQuery(document).ready(function () {

});