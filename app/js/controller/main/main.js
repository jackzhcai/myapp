/**
 * Created by Jack on 2015/11/28.
 */
(function (window) {
    'use strict';
    var myapp = window.myapp;

    myapp.controller('mainCtrol', ['$scope', '$window', '$location', '$timeout', function ($scope, $window, $location, $timeout) {
        /**
         *
         * @param options
         * @returns {HttpPromise}
         */
        var query = function(options){
            return $http(options);
        };

        /**
         * @description 获取首页列表数据
         */
        var showIndex = function (type, step) {
        };

        /**
         * @description 获取人物列表数据
         */
        var showPersonList = function (type, step) {
        };

        /**
         * @description 获取商品列表数据
         */
        var showCommodityList = function (type, step) {
        };

        /**
         * @description 获取视频列表数据
         */
        var showVedioList = function (type, step) {
        };

        /**
         * @description 获取品牌列表数据
         */
        var showBrandList = function() {
        };

        /**
         * @description 主类型，初始化位首页
         * @type {string}
         */
        //$scope.type = 'index';

        /**
         * @description 好友数据
         * @type {Array}
         */
        $scope.personDatas = [{
            id: 0,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-0",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 1,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-1",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 2,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-2",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 3,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-3",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 4,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-4",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 5,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-5",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 6,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-6",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 7,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-7",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 8,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-8",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 9,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-9",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 10,
            src: '../app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-10",
            name: "刘德华",
            job: "歌手"
        }];

        /**
         * @description 商品数据
         * @type {Array}
         */
        $scope.commodityDatas = [{
            id: 0,
            src: '../app/style/images/demo-2.jpg',
            price: 200,
            praise: 192,
            tread: 150,
            title: "百诺3D打印巧克力玫瑰-21",
            author: "小虎",
            buyed: 210,
            endorsements: [{
                name: "james",
                message: "very od-1",
                praise: 190
            }, {
                name: "james",
                message: "very good-2",
                praise: 190
            }, {
                name: "james",
                message: "very good-3",
                praise: 190
            }, {
                name: "james",
                message: "very good-4",
                praise: 190
            }, {
                name: "james",
                message: "very good-5",
                praise: 190
            }]
        }, {
            id: 1,
            src: '../app/style/images/demo-2.jpg',
            price: 200,
            praise: 192,
            tread: 150,
            title: "百诺3D打印巧克力玫瑰-22",
            author: "小虎",
            buyed: 210,
            endorsements: [{
                name: "james",
                message: "very good-1",
                praise: 190
            }, {
                name: "james",
                message: "very good-2",
                praise: 190
            }, {
                name: "james",
                message: "very good-3",
                praise: 190
            }, {
                name: "james",
                message: "very good-4",
                praise: 190
            }, {
                name: "james",
                message: "very good-5",
                praise: 190
            }]

        }, {
            id: 2,
            src: '../app/style/images/demo-2.jpg',
            price: 200,
            praise: 192,
            tread: 150,
            title: "百诺3D打印巧克力玫瑰-23",
            author: "小虎",
            buyed: 210,
            endorsements: [{
                name: "james",
                message: "very good-1",
                praise: 190
            }, {
                name: "james",
                message: "very good-2",
                praise: 190
            }, {
                name: "james",
                message: "very good-3",
                praise: 190
            }, {
                name: "james",
                message: "very good-4",
                praise: 190
            }, {
                name: "james",
                message: "very good-5",
                praise: 190
            }]
        }, {
            id: 3,
            src: '../app/style/images/demo-2.jpg',
            price: 200,
            praise: 192,
            tread: 150,
            title: "百诺3D打印巧克力玫瑰-24",
            buyed: 210,
            endorsements: [{
                name: "james",
                message: "very good-1",
                praise: 190
            }, {
                name: "james",
                message: "very good-2",
                praise: 190
            }, {
                name: "james",
                message: "very good-3",
                praise: 190
            }, {
                name: "james",
                message: "very good-4",
                praise: 190
            }, {
                name: "james",
                message: "very good-5",
                praise: 190
            }]
        }, {
            id: 4,
            src: '../app/style/images/demo-2.jpg',
            price: 200,
            praise: 192,
            tread: 150,
            title: "百诺3D打印巧克力玫瑰-25",
            author: "小虎",
            buyed: 210,
            endorsements: [{
                name: "james",
                message: "very good-1",
                praise: 190
            }, {
                name: "james",
                message: "very good-2",
                praise: 190
            }, {
                name: "james",
                message: "very good-3",
                praise: 190
            }, {
                name: "james",
                message: "very good-4",
                praise: 190
            }, {
                name: "james",
                message: "very good-5",
                praise: 190
            }]
        }, {
            id: 5,
            src: '../app/style/images/demo-2.jpg',
            price: 200,
            praise: 192,
            tread: 150,
            title: "百诺3D打印巧克力玫瑰-26",
            author: "小虎",
            buyed: 210,
            endorsements: [{
                name: "james",
                message: "very good-1",
                praise: 190
            }, {
                name: "james",
                message: "very good-2",
                praise: 190
            }, {
                name: "james",
                message: "very good-3",
                praise: 190
            }, {
                name: "james",
                message: "very good-4",
                praise: 190
            }, {
                name: "james",
                message: "very good-5",
                praise: 190
            }]
        }, {
            id: 6,
            src: '../app/style/images/demo-2.jpg',
            price: 200,
            praise: 192,
            tread: 150,
            title: "百诺3D打印巧克力玫瑰-27",
            author: "小虎",
            buyed: 210,
            endorsements: [{
                name: "james",
                message: "very good-1",
                praise: 190
            }, {
                name: "james",
                message: "very good-2",
                praise: 190
            }, {
                name: "james",
                message: "very good-3",
                praise: 190
            }, {
                name: "james",
                message: "very good-4",
                praise: 190
            }, {
                name: "james",
                message: "very good-5",
                praise: 190
            }]
        }, {
            id: 7,
            src: '../app/style/images/demo-2.jpg',
            price: 200,
            praise: 192,
            tread: 150,
            title: "百诺3D打印巧克力玫瑰-28",
            author: "小虎",
            buyed: 210,
            endorsements: [{
                name: "james",
                message: "very good-1",
                praise: 190
            }, {
                name: "james",
                message: "very good-2",
                praise: 190
            }, {
                name: "james",
                message: "very good-3",
                praise: 190
            }, {
                name: "james",
                message: "very good-4",
                praise: 190
            }, {
                name: "james",
                message: "very good-5",
                praise: 190
            }]
        }];

        /**
         * @description 显示选定商品
         * @param data {commodity: commodity, id: commodity.id}
         * @param state {'step': 2}
         */
        $scope.showDetails = function (data, state) {
            var commodityData = {};
            //获取当前商品的数据
            if (data.commodity) {
                commodityData = data.commodity;
            } else if (data.id) {
                commodityData = (_.filter($scope.commodityDatas || [], {"id": data.id}))[0];
            }
            //
            $scope.commodityData = commodityData;
            //切换场景
            $scope.$emit("changeScene", state);
        };


        /**
         * @description 显示选定代言人
         * @param data {'person': person, 'id': commodity.id}
         * @param state {'step': 2}
         */
        $scope.showPerson = function (data, state) {
            var personData = {}
            //获取当前商品的数据
            if (data.person) {
                personData = data.person;
            } else if (data.id) {
                personData = (_.filter($scope.personDatas || [], {"id": data.id}))[0];
            }
            //
            $scope.personData = _.extend(personData, {"steptitle": "代言人"});
            //切换场景
            $scope.$emit("changeScene", state);
        }

        /**
         * @description 商品详情页
         * @param data {message: '商品详细介绍'}
         * @param state {'step': 3}
         */
        $scope.showDetailsInfo = function (data, state) {
            $scope.detailsInfo = data;
            $scope.$emit("changeScene", state);
        }

        /**
         * @description 代言人详情页
         * @param data {message: '代言人详细介绍'}
         * @param state {'step': 3}
         */
        $scope.showPersonInfo = function (data, state) {
            $scope.detailsInfo = data;
            $scope.$emit("changeScene", state);
        }

        /**
         * @description 立即购买（下订单）
         * @param data 当前商品信息
         * @param state {'step': 2}
         */
        $scope.submitOrder = function(data, state){
            if(angular.isObject(data)){
                $scope.selectDatas = [data];
            }else if(angular.isArray(data)){
                $scope.selectDatas = data;
            }else{
                return false;
            }
            //
            $scope.$emit("changeScene", state);
        }

        $scope.nowBuy = function(){

        }

        /**
         * @description 回退
         */
        $scope.goBack = function (state) {
            $scope.$emit("changeScene", state);
        }

        /**
         * @description 底部工具条
         * @param data {'step': 1, 'tabType': 'brand'}
         */
        $scope.showRankingList = function (data) {
            //获取对应模块数据
            switch (data.tabType) {
                case 'index':
                    showIndex();
                    break;
                case 'person':
                    showPersonList();
                    break;
                case 'commodity':
                    showCommodityList();
                    break;
                case 'vedio':
                    showVedioList();
                    break;
                case 'brand':
                    showBrandList();
                    break;
            }
            //
            $scope.tabType = data.tabType;
            //显示对应模块
            $scope.$emit("changeScene", {'step': data.step});
        };

        /**
         *
         */
        $scope.showVideo = function () {
            console.log("getVedioData");
        }

        /**
         * @description 二级导航
         */
        $scope.toggerNavs = function(state){
            //强制设置二级导航状态
            if(state === true || state === false){
                $scope.navSate = state;
                return true;
            }
            //切换二级导航是否展示
            $scope.navSate = !$scope.navSate;

        }

        /**
         * @description 查看购物车
         */
        $scope.showShppingCart = function(){

        }

        /**
         * @description 进入我的太酷
         */
        $scope.showMyTecu = function(){

        }

        /**
         * @description 切换场景
         * @param onject {step: 2, type: 'index'}
         */
        $scope.$on("changeScene", function (event, state) {
            $scope.toggerNavs(false);
            //重置场景，使滚动条还原
            $scope.step = 0;
            $timeout(function(){
                $scope.step = state.step;
            }, 5)
        });

        /**
         * @description init
         */
        $scope.init = function () {
            //默认展示首页
            $scope.step = 1;
            $scope.tabType = 'index';
            //默认二级导航
            $scope.navSate = false;

        }
        $scope.init();
    }]);
})(window);
