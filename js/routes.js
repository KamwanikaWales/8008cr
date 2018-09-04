angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.welcomeToLakeOfStars2018', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/welcomeToLakeOfStars2018.html',
        controller: 'welcomeToLakeOfStars2018Ctrl'
      }
    }
  })

  .state('menu.cart', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cart.html',
        controller: 'cartCtrl'
      }
    }
  })

  .state('menu.cloud', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cloud.html',
        controller: 'cloudCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('festivalProgramme', {
    url: '/page4',
    templateUrl: 'templates/festivalProgramme.html',
    controller: 'festivalProgrammeCtrl'
  })

  .state('accomodation', {
    url: '/page5',
    templateUrl: 'templates/accomodation.html',
    controller: 'accomodationCtrl'
  })

  .state('restaurants', {
    url: '/page6',
    templateUrl: 'templates/restaurants.html',
    controller: 'restaurantsCtrl'
  })

  .state('carRentals', {
    url: '/page7',
    templateUrl: 'templates/carRentals.html',
    controller: 'carRentalsCtrl'
  })

  .state('shuttleServices', {
    url: '/page8',
    templateUrl: 'templates/shuttleServices.html',
    controller: 'shuttleServicesCtrl'
  })

  .state('safaris', {
    url: '/page9',
    templateUrl: 'templates/safaris.html',
    controller: 'safarisCtrl'
  })

  .state('carRentalSView', {
    url: '/page10',
    templateUrl: 'templates/carRentalSView.html',
    controller: 'carRentalSViewCtrl'
  })

  .state('dAY1FRIDAY28SEPTEMBER', {
    url: '/page11',
    templateUrl: 'templates/dAY1FRIDAY28SEPTEMBER.html',
    controller: 'dAY1FRIDAY28SEPTEMBERCtrl'
  })

  .state('dAY2SATURDAY29SEPTEMBER', {
    url: '/page12',
    templateUrl: 'templates/dAY2SATURDAY29SEPTEMBER.html',
    controller: 'dAY2SATURDAY29SEPTEMBERCtrl'
  })

  .state('dAY3FRIDAY30SEPTEMBER', {
    url: '/page13',
    templateUrl: 'templates/dAY3FRIDAY30SEPTEMBER.html',
    controller: 'dAY3FRIDAY30SEPTEMBERCtrl'
  })

  .state('accomodationView', {
    url: '/page14',
    templateUrl: 'templates/accomodationView.html',
    controller: 'accomodationViewCtrl'
  })

  .state('carRentalView', {
    url: '/page15',
    templateUrl: 'templates/carRentalView.html',
    controller: 'carRentalViewCtrl'
  })

  .state('shuttleServiceDAY1', {
    url: '/page16',
    templateUrl: 'templates/shuttleServiceDAY1.html',
    controller: 'shuttleServiceDAY1Ctrl'
  })

  .state('shuttleServiceDAY2', {
    url: '/page17',
    templateUrl: 'templates/shuttleServiceDAY2.html',
    controller: 'shuttleServiceDAY2Ctrl'
  })

  .state('shuttleServiceDAY3', {
    url: '/page18',
    templateUrl: 'templates/shuttleServiceDAY3.html',
    controller: 'shuttleServiceDAY3Ctrl'
  })

  .state('shuttleServiceView', {
    url: '/page19',
    templateUrl: 'templates/shuttleServiceView.html',
    controller: 'shuttleServiceViewCtrl'
  })

  .state('sAFARISTOURS', {
    url: '/page20',
    templateUrl: 'templates/sAFARISTOURS.html',
    controller: 'sAFARISTOURSCtrl'
  })

  .state('safariView', {
    url: '/page21',
    templateUrl: 'templates/safariView.html',
    controller: 'safariViewCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});