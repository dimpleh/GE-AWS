'use strict';

/**
 * Route configuration.
 */
angular.module('GE-AWS').config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
    function($stateProvider, $urlRouterProvider, $httpProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
            .state('case', {
                url: '/',
                templateUrl: 'scripts/component/case/create.html'
            })
            .state('test', {
                url: '/test',
                templateUrl: 'scripts/component/test/test.html'
            });

            //$httpProvider.interceptors.push('APIInterceptor');
    }

    
    
]);