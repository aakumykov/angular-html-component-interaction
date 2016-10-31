'use strict';

function BarController(dispatcher){
	this.name = dispatcher.getName();
	this.test1 = function(){ console.log('BarController.test1()'); }
	
	angular.element('bar').on('mousedown', function(ev){
		dispatcher.mousedown(ev);
	});
	angular.element('bar').on('mousemove', function(ev){
		dispatcher.mousemove(ev);
	});
	angular.element('bar').on('mouseup', function(ev){
		dispatcher.mouseup(ev);
	});
}

angular.module('Bar',[]).
component('bar',{
	template: `
		<div 
			id='bar' 
			class='bar' 
			//ng-click='barCtrl.test1()' 
		>{{barCtrl.name}}</div>
	`,
	controller: BarController,
	controllerAs: 'barCtrl',
});