(function () {
	var ready = function () {
	  
		//Adds Platforms
		venomousmodAPI.addPlatform();
		
	    //Adds Topics
		venomousmodAPI.addTopics();
		
		//Adds Events
		venomousmodAPI.addEventThunderstorm();
		venomousmodAPI.addEventThief();
		venomousmodAPI.addEventCharlieDay();
		venomousmodAPI.addEventDalekInvasion();
		venomousmodAPI.addEventMeTube();
		venomousmodAPI.addEventGamePort();
		venomousmodAPI.addEventIGN();
		venomousmodAPI.addEventGamingMarket();
		venomousmodAPI.addEventGovodoreTrouble();
		venomousmodAPI.addEventSabotage();
		venomousmodAPI.addEventMboxOneRumours();
		
		//Adds Researches
		venomousmodAPI.addResearch();
		
		//Adds Marketing
		venomousmodAPI.addMarketing();
		
	};

	var error = function () {
	};

	GDT.loadJs(['mods/gdt-modAPI/helpers/checks.js',
	'mods/gdt-modAPI/api/persistence.js',
	'mods/gdt-modAPI/api/events.js',
	'mods/gdt-modAPI/api/platforms.js',
	'mods/gdt-modAPI/api/topics.js',
	'mods/gdt-modAPI/api/research.js',
	'mods/gdt-modAPI/examples/examples.js',
	'mods/venomous-modAPI/source.js',
	'mods/venomous-modAPI/api/Marketing.js'
	], ready, error);
})();