/**
 * Created by Jack on 2015/11/29.
 */
(function (window) {
    'use strict';

    var myapp = window.angular.module('myapp', [
        'ngRoute'
        , 'ngTouch'
        //, 'ui.bootstrap',
        //, 'ngAnimate'
    ]);

    myapp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            redirectTo: '/mian'
        }).when('/main/', {
            redirectTo: '/main'
        }).when('/main', {
            templateUrl: '../app/js/template/main/main.html',
            controller: 'mainCtrol'
        }).when('/login', {
            templateUrl: '../app/js/template/login/login.html',
            controller: 'loginCtrol'
        }).when('/logout', {
            redirectTo: function () {
                location.href = urls.logout;
            }
        }).otherwise({
            redirectTo: '/main'
        });
    }]);

    window.myapp = myapp;

})(window);
