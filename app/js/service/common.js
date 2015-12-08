/**
 * Created by jack on 15/12/2.
 */

;(function(window){
    var myapp = window.myapp;
    myapp.service("queryService", ['$http', function($http){
        var query = function(options){
            return $http(options);
        };
        var post = function(){

        };
        var get = function(){

        };
        return {
            get: get,
            post: post,
            query: query
        }
    }]);

})(window);
