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

	editor.mouseDispatsher = {
		status: {
			startTarget: undefined,
			finishTarge: undefined,
			eventType: undefined,
		},
		startWatch: function(e){
			console.log('mouseDispatsher.startWatch(), '+e.target.id);

		},
		endWatch: function(e){
			console.log('mouseDispatsher.endWatch(), '+e.target.id);
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
		//editor.showEventInfo(e);
		editor.mouseDispatsher.startWatch(e);
	});
	editor.on('mouseup', function(e){
		//editor.showEventInfo(e);
		editor.mouseDispatsher.endWatch(e);
	});
}