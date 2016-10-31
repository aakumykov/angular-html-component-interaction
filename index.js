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
	//var editor = angular.element('#editor');
	var editor = document.getElementById('editor');
		editor.addEventListener('click', function(e){
		console.debug(e.target);
		console.debug('e.screenX: '+e.screenX);
		console.debug('e.screenY: '+e.screenY);
		console.debug('e.clientX: '+e.clientX);
		console.debug('e.clientY: '+e.clientY);
	});
}