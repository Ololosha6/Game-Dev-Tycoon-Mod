(function () {
	var ready = function () {
	
		//venomousmodAPI.addTopic();
		venomousmodAPI.addPlatform();
		//venomousmodAPI.addEventCelebration();
		//venomousmodAPI.addEventCuriosity();
		//venomousmodAPI.addEventVac();
	};

	requireLoad(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/venomousmodAPI/examples/source.js',
		], ready);
})();