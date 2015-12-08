/**
 * Created by Jack on 2015/11/28.
 */
(function (window) {
    'use strict';
    var myapp = window.myapp;

    myapp.controller('mainCtrol', ['$scope', '$location', function ($scope, $location) {
        //首页
        var showIndex = function (type, step) {
            //$scope.type = type;
            //$scope.step = step;
        };

        //人物列表
        var showPersonList = function (type, step) {
            //$scope.type = type;
            //$scope.step = step;
        };

        //商品列表
        var showCommodityList = function (type, step) {
            //$scope.type = type;
            //$scope.step = step;
        };

        //视频列表
        var showVedioList = function (type, step) {
            //$scope.type = type;
            //$scope.step = step;
        };

        var showBrandList = function(type, step) {
            //$scope.type = type;
            //$scope.step = step;
        };

        /**
         * @description 主类型，初始化位首页
         * @type {string}
         */
        $scope.type = 'index';
        /**
         * @description 场景1，初始化为场景1
         * @type {number}
         */
        $scope.step = 1;

        /**
         * @description 好友数据
         * @type {Array}
         */
        $scope.personDatas = [{
            id: 0,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-0",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 1,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-1",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 2,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-2",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 3,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-3",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 4,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-4",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 5,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-5",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 6,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-6",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 7,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-7",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 8,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-8",
            name: "刘德华",
            job: "歌手"
        }, {
            id: 9,
            src: 'app/style/images/person-1.png',
            praise: 192,
            tread: 150,
            message: "3D打印巧克力玫瑰-9",
            name: "梁朝伟",
            job: "演员"
        }, {
            id: 10,
            src: 'app/style/images/person-1.png',
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
            src: 'app/style/images/demo-2.jpg',
            price: 200,
            praise: 192,
            tread: 150,
            title: "百诺3D打印巧克力玫瑰-21",
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
            id: 1,
            src: 'app/style/images/demo-2.jpg',
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
            src: 'app/style/images/demo-2.jpg',
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
            src: 'app/style/images/demo-2.jpg',
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
            src: 'app/style/images/demo-2.jpg',
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
            src: 'app/style/images/demo-2.jpg',
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
            src: 'app/style/images/demo-2.jpg',
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
            src: 'app/style/images/demo-2.jpg',
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
         * @param state {'step': 2, 'type': type}
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
         * @param state {'step': 2, 'type': type}
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
         * @param state {'step': 3, 'type': type}
         */
        $scope.showDetailsInfo = function (data, state) {
            $scope.detailsInfo = data;
            $scope.$emit("changeScene", state);
        }

        /**
         * @description 代言人详情页
         * @param data {message: '代言人详细介绍'}
         * @param state {'step': 3, 'type': type}
         */
        $scope.showPersonInfo = function (data, state) {
            $scope.detailsInfo = data;
            $scope.$emit("changeScene", state);
        }

        /**
         * @description 立即购买（下订单）
         * @param data 当前商品信息
         * @param state {'step': 2, 'type': type}
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
         * @description 场景1，底部工具条
         * @param data {'type':'person', 'step': 1}
         */
        $scope.showRankingList = function (data) {
            data.step = data.step || 1;
            switch (data.type) {
                case "index":
                    showIndex(data.type);
                    break;
                case "person":
                    showPersonList(data.type);
                    break;
                case "commodity":
                    showCommodityList(data.type);
                    break;
                case "vedio":
                    showVedioList(data.type);
                    break;
                case "brand":
                    showBrandList(data.type);
                    break;
            }
            //
            $scope.$emit("changeScene", data);
        };

        /**
         *
         */
        $scope.showVideo = function () {
            $scope.type = 'index';
        }

        /**
         * @description 二级导航
         */
        $scope.toggerNavs = function(state){
            if(state === true || state === false){
                $scope.navSate = state;
                return true;
            }
            if($scope.navSate){
                $scope.navSate = false;
            }else{
                $scope.navSate = true;
            }
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
        $scope.$on("changeScene", function (event, data) {
            $scope.toggerNavs(false);
            $scope.step = data.step;
            $scope.type = data.type;
        });

        /**
         * @description init
         */
        $scope.init = function () {
            //二级导航
            $scope.navSate = false;

        }
        $scope.init();
    }]);
})(window);
