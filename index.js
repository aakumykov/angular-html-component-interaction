'use strict';

window.addEventListener('load', function(){
	if ( angular.bootstrap(document, ['App']) ) {
		console.debug('Программа загружена.');
	} else {
		console.debug('Ошибка инициализации приложения.');
	}

	initializeEditor();
});

function initializeEditor(){
	console.log('initializeEditor()');
	
	var editor = angular.element('#editor');

	var self = this;

	editor.mouseDispatsher = {
		status: {
			start: {
				target: undefined,
				coords: {
					x: undefined,
					y: undefined,
				}
			},
			end: {
				target: undefined,
				coords: {
					x: undefined,
					y: undefined,
				}
			},
		},
		startWatch: function(e){
			console.log('mouseDispatsher.startWatch(), '+e.target.id);
		},
		endWatch: function(e){
			console.log('mouseDispatsher.endWatch(), '+e.target.id);
		},
		updateStatus: function(mode, ev) {
			switch (mode) {
				case 'start':
					var storage = editor.mouseDispatsher.status.start;
					break;
				case 'end':
					var storage = editor.mouseDispatsher.status.end;
					break;
				default:
					console.error("неизвестный режим '"+mode+"'");
					return false;
			}

			storage.target = ev.target;
			storage.coords.x = ev.pageX;
			storage.coords.y = ev.pageY;
		}
	}

	editor.showEventInfo = function(ev){
		console.log('---------------- event info ----------------')
		for (var key in ev) {
			var value = ev[key];
			var valueType = typeof(value);
			if ('string'==valueType || 'number'==valueType || 'boolean'==valueType) {
				console.log(key+': '+value);
			}
		}
		console.log('---------------- event info ----------------')
	}

	editor.on('mousedown', function(e){
		editor.mouseDispatsher.updateStatus('start',e);
		//console.log('editor: '+editor.mouseDispatsher);
	});
	editor.on('mouseup', function(e){
		editor.mouseDispatsher.updateStatus('end',e);
		//console.log('editor: '+editor.mouseDispatsher);
	});
}