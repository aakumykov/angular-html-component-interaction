'use strict';

angular.module('Bar').
factory('dispatcher', function(){
	var self = this;
	
	this.name = 'Диспетчер';
	this.getName = function(){ return self.name; }

	this.pressed = false;

	this.info = {
		start: {
			target: undefined,
			x: undefined,
			y: undefined,
		},
		end: {
			target: undefined,
			x: undefined,
			y: undefined,
		},
		path: [],
	}

	this.mousedown = function(ev){
		console.log('dispatcher.mousedown()');
		self.pressed = true;
		self.info.start.target = ev.target;
		self.info.start.x = ev.clientX;
		self.info.start.y = ev.clientY;
	}
	this.mousemove = function(ev){
		if (self.pressed) console.log('dispatcher.mousemove('+ev.clientX+','+ev.clientY+')');
		// self.info.path.push({
		// 	x: ev.clientX, 
		// 	y: ev.clientY
		// })
	}
	this.mouseup = function(ev){
		console.log('dispatcher.mouseup()');
		self.pressed = false;
		self.info.end.target = ev.target;
		self.info.end.x = ev.clientX;
		self.info.end.y = ev.clientY;
	}

	return this;
});
