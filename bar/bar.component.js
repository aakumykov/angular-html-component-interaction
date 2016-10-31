'use strict';

function BarController(dispatcher){
	//this.name = 'Прямоугольник';
	this.name = 'Прямоугольник';
}

angular.module('Bar',[]).
component('bar',{
	template: `<div class='bar'>{{barCtrl.name}}</div>`,
	controller: BarController,
	controllerAs: 'barCtrl',
});