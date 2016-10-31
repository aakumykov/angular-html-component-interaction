'use strict';

angular.module('Bar').
factory('dispatcher', function(){
	this.name = 'Диспетчер';
	var self = this;
	this.getName = function(){ return self.name; }
	return this;
});
