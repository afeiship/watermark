(function () {
  'use strict';

  angular.module('nx.widget')
    .directive('nxPreventBodyMove', ['$timeout',function ($timeout) {
      return {
        restrict: 'A',
        link: function (scope,elem,attrs) {
          elem.on('touchmove selectstart',function(inEvent){
            inEvent.preventDefault();
            inEvent.stopPropagation();
            return false;
          });
        }
      };
    }]);


})();
