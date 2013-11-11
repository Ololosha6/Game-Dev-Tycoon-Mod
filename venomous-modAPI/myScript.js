(function () {
	var ready = function () {
	  
		//Adds Platforms
		venomousmodAPI.addPlatform();
		
	};

	requireLoad(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/venomous-modAPI/source.js',
		], ready);
})();