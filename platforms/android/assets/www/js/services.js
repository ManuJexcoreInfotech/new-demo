function Service($rootScope, $http, $ionicPopup,Config) {

    var api = {
        website: 'webservice/api/websiteinfo',
        store: 'webservice/api/storeinfo',
        getStaticBlock: '/restconnect/index/getstaticblock',
        getBannerBlock: '/restconnect/index/getbannerblock',
        user: '/restconnect/customer/statusData',
        forgotpwd: '/restconnect/customer/forgotpwd',
        menus: '/restconnect/?cmd=menu',
        products: '/restconnect/',
        login: 'webservice/api/login',
        logout: 'webservice/api/logout',
        register: 'webservice/api/register',
        search: '/restconnect/search',
        certGet: '/clnews/api/article',
        searchAdvField: '/restconnect/searchadv/getfield',
        searchAdv: '/restconnect/searchadv/index',
        searchAgent: '/storelocator/index/city',
        productDetail: '/restconnect/products/getproductdetail',
        productImg: '/restconnect/products/getPicLists',
        productOption: '/restconnect/products/getcustomoption',
        cart: '/restconnect/cart/getCartInfo',	//获�?�购物车内容
        cartGetQty: '/restconnect/cart/getQty',	//
        cartGetTotal: '/restconnect/cart/getTotal',	//
        cartAdd: '/restconnect/cart/add'	//直接post到这个接�?�就返回�?�数
    }, showError = false;

    $rootScope.service = {
        get: function (key, params, success, error) {
			
            if (typeof params === 'function') {
                error = success;
                success = params;
                params = null;
            }       
			
			
            var url = Config.WebUrl  + api[key] ;
			
            $http.get(url, {
                params: params,
                timeout: 20000
            }).then(function (res) {
                success(res.data);
            }, handleError(error));
        },
        post: function (key, params, success, error) {
            if (typeof params === 'function') {
                callback = params;
                params = null;
            }
			
			var userData=[];
			console.log(params);
			
            var url = Config.WebUrl+ api[key];
			//Object.keys(params).forEach(function(key) {
			//	userData.push(params[key]);
            //});
			//params={test:'gfgfg'};
			//console.log(params);
             $http.post(url,params).then(function (res) {
                success(res.data);
            }, handleError(error));
        },
        sendSms: function (params, success, error) {
            if (typeof params === 'function') {
                error = success;
                success = params;
                params = null;
            }

            var url = Config.WebUrl + 'smsapi/SendTemplateSMS.php';
            $http.get(url, {
                params: params
            }).then(function (res) {
                success(res.data);
            }, handleError(error));
        }
    };

    function handleError(error) {
        return function (err) {
            if (error) error(err);
            if (showError) {
                return;
            }
            showError = true;
            alert($rootScope.translations.network_error+'\r\n'+$rootScope.translations.check_network);
            
            $ionicPopup.alert({
                title: $rootScope.translations.network_error,
                template: $rootScope.translations.check_network,
                buttons: [{
                    text: $rootScope.translations.ok,
                    onTap: function () {
                        showError = false;
                    }
                }]
            });
            
        };
    }
}
