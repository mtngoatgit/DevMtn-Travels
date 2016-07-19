angular.module("devmtnTravel", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html"
            })
            .state('adventurers',{
                url:'/adventurers',
                parent:'home',
                templateUrl: "../views/about-adventurers.html"
            })
            // these are nested views
            .state('contact',{
                url:'/contact',
                //if you comment out URL, it disables the cursor, but you are still able
                //to click on it and it takes you to the view, and doesn't alter the address line
                //odd
                parent:'home',
                templateUrl: "../views/contact.html"
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html",
                controller: 'packageCtrl',
                controllerAs: 'vm'
            })
            .state('booked',{
                url:'/booked/:id',
                templateUrl: "../views/booked.html",
                controller: 'bookedCtrl',
                controllerAs: 'vm'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'locationsCtrl',
                controllerAs: 'vm'
            });
            // 'vm' stands for "view model"--so it's say, us the controller as the view model
            // what would happen if we didn't state this? No noticeable effect.


        $urlRouterProvider
            .otherwise('/');
    });
