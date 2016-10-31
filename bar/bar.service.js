'use strict';

angular.module('Bar').
factory('dispatcher', function(){
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
		target: undefined,
		start: undefined,
		end: undefined,
		path: []
	}


	var self = this;

	this.mousedown = function(ev){
		console.log('dispatcher.mousedown('+self.name+')');
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

		self.processInfo();
	}
	this.processInfo = function(){
		console.debug('dispatcher.processInfo()');

		var target1 = self.info.start.target;
		var target2 = self.info.end.target;

		if (target1===target2) {
			self.info.target = target1;
			
			self.info.start = {
				x: self.info.start.x,
				y: self.info.start.y,
			}
			
			self.info.end = {
				x: self.info.end.x,
				y: self.info.end.y,
			}
		}
	}

	return this;
});
