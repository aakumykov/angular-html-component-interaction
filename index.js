'use strict';

window.addEventListener('load', function(){
	if ( angular.bootstrap(document, ['App']) ) {
		console.debug('Программа загружена.');
	} else {
		console.debug('Ошибка инициализации приложения.');
	}
});
