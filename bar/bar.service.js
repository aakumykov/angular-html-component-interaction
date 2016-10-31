'use strict';

angular.module('App').
factory('barService', function(){
	this.name = 'Прямоугольная служба.';
	var self = this;
	this.getName = function(){ return self.name; }
});
