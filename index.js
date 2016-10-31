'use strict';

window.addEventListener('load', function(){
	if ( angular.bootstrap(document, ['MyApp']) ) {
		console.debug('Программа загружена.');
	} else {
		console.debug('Ошибка инициализации приложения.');
	}
});
