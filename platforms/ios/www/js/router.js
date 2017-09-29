app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  	//sidebar
    .state('news', {
      url: "/news",
      abstract: true,
      templateUrl: "templates/sidebar-menu.html"
    })
	 // Blog page
	 .state('news.home', {
      url: "/home",
		cache : false,
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/home.html",
		  		controller: "HomeCtrl"
        }
      }
    })
	.state('news.login', {
      url: "/login",
		cache : false,
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/login.html",
		  		controller: "LoginCtrl"
        }
      }
    })
	  // articles page wordpress
	 .state('news.post', {
      url: "/post/:catId/:offset/:index/:type",
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/post.html",
		  		controller: "PostCtrl"
        }
      }
    })
	 // Blog page
	 .state('news.categories', {
      url: "/categories",
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/categories.html",
		  		controller: "CategoriesCtrl"
        }
      }
    })
	 // Blog page
	 .state('news.category', {
      url: "/category/:category/:categoryName",
		cache : false,
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/home.html",
		  		controller: "CategoryCtrl"
        }
      }
    })
	 // Blog page
	 .state('news.search', {
      url: "/search",
		cache : false,
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/search.html",
		  		controller: "SearchCtrl"
        }
      }
    })
	 .state('news.settings', {
      url: "/settings",
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/settings.html",
		  		controller: "SettingsCtrl"
        }
      }
    })
	 .state('news.contact', {
      url: "/contact",
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/contact.html",
			controller: "ContactCtrl"
        }
      }
    })
	 .state('news.about', {
      url: "/about",
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/about.html",
		  		controller: "AboutCtrl"
        }
      }
    })
	 .state('news.admob', {
      url: "/admob",
      views: {
        'menuWorPress' :{
          	templateUrl: "templates/admob.html",
		  		controller: "AdmobCtrl"
        }
      }
    })
  	$urlRouterProvider.otherwise("/news/login");
})