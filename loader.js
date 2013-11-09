(function () {
	var ready = function () {
	
		ModPack.addTopic();
		ModPack.addPlatform();
		ModPack.addEventThunderstorm();
		ModPack.addEventSuperhero();
		ModPack.addEventCake();
		ModPack.addEventNational();
		ModPack.addEventGirlScouts();
	};

	requireLoad(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/Game-Dev-Tycoon-Mod/game-dev-tycoon-mod.js'
	], ready);
})();