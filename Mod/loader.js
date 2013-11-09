(function () {
	var ready = function () {
	
		Mod.addTopic();
		Mod.addPlatform();
		Mod.addEventThunderstorm();
		Mod.addEventSuperhero();
		Mod.addEventCake();
		Mod.addEventNational();
		Mod.addEventGirlScouts();
		Mod.addEventHypeGame();
	};

	requireLoad(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/Mod/mod.js'
	], ready);
})();