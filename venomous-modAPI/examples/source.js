var venomousmodAPI = {};
(function () {	
	
	/* Platforms */
	venomousmodAPI.addPlatform = function () {
		var icon = './mods/venomous-modAPI/examples/img/SuperBox.png';
		GDT.addPlatform(
			{
				id: 'SuperBox',
				name: 'SuperBox',
				company: 'Supersonic Games',
				startAmount: 0.150,
				unitsSold: 0.678,
				licencePrize: 5000,
				published: '1/2/1',
				platformRetireDate: '6/6/4',
				developmentCosts: 10000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.7],
				audienceWeightings: [0.9, 1.0, 0.8],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '21638DA2-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '1/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Coming out of nowhere a company called Supersonic Games has announced that they will publish a new game console called the SuperBox {0}.".localize().format(General.getETADescription('1/1/1', '1/2/1')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/Vindows 1.0.png';
		GDT.addPlatform(
			{
				id: 'Vindows 1.0',
				name: 'Vindows 1.0',
				company: 'Mirconoft',
				startAmount: 0.150,
				unitsSold: 0.678,
				licencePrize: 6000,
				published: '1/2/2',
				platformRetireDate: '3/2/2',
				developmentCosts: 12000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.8],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '31638DA2-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '1/2/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has announced that Vindows 1.0, the new operating system for PC, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('1/2/1', '1/2/2')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/matari5200.png';
		GDT.addPlatform(
			{
				id: 'Matari 5200',
				name: 'Matari 5200',
				company: 'Matari Inc.',
				startAmount: 0.100,
				unitsSold: 0.200,
				licencePrize: 200,
				published: '1/1/1',
				platformRetireDate: '2/7/2',
				developmentCosts: 1000,
				genreWeightings: [1, 0.8, 0.9, 0.8, 0.7, 0.8],
				audienceWeightings: [0.9, 1, 0.6],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '21638DA5-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '2/5/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Matari Inc., has announced that their console called the Matari 5200 was a massive flop and will retire {0}.".localize().format(General.getETADescription('2/5/2', '2/6/2')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/matari7800.png';
		GDT.addPlatform(
			{
				id: 'Matari 7800',
				name: 'Matari 7800',
				company: 'Matari Inc.',
				startAmount: 0.300,
				unitsSold: 0.400,
				licencePrize: 80000,
				published: '2/7/2',
				platformRetireDate: '5/4/2',
				developmentCosts: 35000,
				genreWeightings: [1, 0.8, 0.9, 0.8, 0.7, 0.6],
				audienceWeightings: [0.9, 1, 0.8],
				techLevel: 2,
				iconUri: icon,
				events: [
					{
						id: '21638DA4-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '2/4/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Creators of the video game console flop, the Matari 5200, Matari Inc., have announced that their new console called the Matari 7800 will be released {0}.".localize().format(General.getETADescription('2/4/2', '2/6/2')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/matariSEGS.png';
		GDT.addPlatform(
			{
				id: 'Matari SEGS',
				name: 'Matari SEGS',
				company: 'Matari Inc.',
				startAmount: 0.450,
				unitsSold: 0.320,
				licencePrize: 120000,
				published: '5/5/2',
				platformRetireDate: '7/4/2',
				developmentCosts: 40000,
				genreWeightings: [1, 0.9, 0.7, 0.8, 0.8, 0.6],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 3,
				iconUri: icon,
				events: [
					{
						id: '21648DA4-69G3-5G35-9966-Z1Z2621933ZZ',
						date: '4/12/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "After a few years of low marketshare, Matari Inc. have today announced their solution! The Matari SEGS is said to be more focused upon the PC side of power with a 64KB RAM!{n}The Matari SEGS will be released {0}.".localize().format(General.getETADescription('4/12/2', '5/5/2')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/mataripanther.png';
		GDT.addPlatform(
			{
				id: 'Matari Panther',
				name: 'Matari Panther',
				company: 'Matari Inc.',
				startAmount: 0.550,
				unitsSold: 0.420,
				licencePrize: 130000,
				published: '7/5/2',
				platformRetireDate: '9/5/2',
				developmentCosts: 50000,
				genreWeightings: [1, 0.9, 0.7, 0.8, 0.8, 0.6],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 4,
				iconUri: icon,
				events: [
					{
						id: '21648DA5-69G3-5G35-9966-Z1Z2621933ZZ',
						date: '6/12/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "After 2 years, The marketshare is still low and Matari Inc. announced another solution! The Matari Panther is said to be more focused upon the PC side of graphical power with a 90KB RAM chip!{n}The Matari Panther will be released {0}.".localize().format(General.getETADescription('6/12/2', '7/5/2')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/SuperStar.png';
		GDT.addPlatform(
			{
				id: 'SuperStar',
				name: 'SuperStar',
				company: 'Supersonic Games',
				startAmount: 0.200,
				unitsSold: 1.211,
				licencePrize: 9000,
				published: '6/7/4',
				platformRetireDate: '8/6/4',
				developmentCosts: 12000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.8],
				audienceWeightings: [1.0, 1.0, 0.6],
				techLevel: 2,
				iconUri: icon,
				events: [
					{
						id: '21638DA3-69G3-5G35-9966-Z2Z2621933ZZ',
						date: '6/7/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperStar {0}. It has a cool new feature where it has 2 CD Drives. You can now play your favourite games and listen to music at the same time.".localize().format(General.getETADescription('6/7/1', '6/7/2')),
								image: icon
							});
						}
					}
				]
			});	
		var icon = './mods/venomous-modAPI/examples/img/Vindows 2.0.png';
		GDT.addPlatform(
			{
				id: 'Vindows 2.0',
				name: 'Vindows 2.0',
				company: 'Mirconoft',
				startAmount: 0.450,
				unitsSold: 0.878,
				licencePrize: 12000,
				published: '3/2/2',
				platformRetireDate: '4/2/2',
				developmentCosts: 14000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 2,
				iconUri: icon,
				events: [
					{
						id: '31638DA3-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '3/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft announced that Vindows 2.0, the new version of the Vindows operating system for PC, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('3/1/1', '3/2/2')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/Vindows 2.1.png';
		GDT.addPlatform(
			{
				id: 'Vindows 2.1',
				name: 'Vindows 2.1',
				company: 'Mirconoft',
				startAmount: 0.480,
				unitsSold: 0.880,
				licencePrize: 13000,
				published: '4/2/2',
				platformRetireDate: '6/2/2',
				developmentCosts: 14000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 2,
				iconUri: icon,
				events: [
					{
						id: '32638DA4-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '4/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft reacted and pounced on the bugs that Vindows 2.0 had in its coding. They released a patch for Vindows 2.0 called Vindows 2.1.  Vindows 2.1 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('4/1/1', '4/2/2')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/Vindows 3.0.png';
		GDT.addPlatform(
			{
				id: 'Vindows 3.0',
				name: 'Vindows 3.0',
				company: 'Mirconoft',
				startAmount: 1.110,
				unitsSold: 1.310,
				licencePrize: 15000,
				published: '6/2/3',
				platformRetireDate: '8/2/3',
				developmentCosts: 17000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 3,
				iconUri: icon,
				events: [
					{
						id: '32638DA5-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '6/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released a new version of their popular Vindows operating system for the PC called Vindows 3.0. Vindows 3.0 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('6/1/1', '6/2/2')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/SuperStar 2.0.png';
		GDT.addPlatform(
			{
				id: 'SuperStar 2.0',
				name: 'SuperStar 2.0',
				company: 'Supersonic Games',
				startAmount: 1.000,
				unitsSold: 1.333,
				licencePrize: 14000,
				published: '8/7/4',
				platformRetireDate: '10/6/4',
				developmentCosts: 16000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.8],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 3,
				iconUri: icon,
				events: [
					{
						id: '21649DA4-69G4-5G36-9967-Z3Z2621933ZZ',
						date: '8/7/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperStar 2.0 {0}. It has a cool new feature where it has 2 CD Drives, a drink coaster in the special base under the CD Drives, and a advanced graphics engine. You can now play your favourite games, listen to music at the same time, and let your console hold your drink for you.".localize().format(General.getETADescription('8/7/1', '8/7/2')),
								image: icon
							});
						}
					}
				]
			});	
		var icon = './mods/venomous-modAPI/examples/img/Vindows 3.1.png';
		GDT.addPlatform(
			{
				id: 'Vindows 3.1',
				name: 'Vindows 3.1',
				company: 'Mirconoft',
				startAmount: 1.121,
				unitsSold: 1.320,
				licencePrize: 17000,
				published: '8/2/3',
				platformRetireDate: '10/2/3',
				developmentCosts: 19000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 3,
				iconUri: icon,
				events: [
					{
						id: '32638DA8-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '8/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released a new patch for Vindows 3.0 called Vindows 3.1. Vindows 3.1 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('8/1/3', '8/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/SuperStation.png';
		GDT.addPlatform(
			{
				id: 'SuperStation',
				name: 'SuperStation',
				company: 'Supersonic Games',
				startAmount: 2.000,
				unitsSold: 1.555,
				licencePrize: 18000,
				published: '10/7/4',
				platformRetireDate: '15/7/4',
				developmentCosts: 20000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.8],
				audienceWeightings: [1.0, 1.0, 0.8],
				techLevel: 4,
				iconUri: icon,
				events: [
					{
						id: '21651DB5-70G4-5G37-10968-Z4Z3732044ZZ',
						date: '10/7/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperStation {0}. It has everything the SuperStar 2.0 had. It has a better graphics engine than the SuperStar 2.0.".localize().format(General.getETADescription('10/7/1', '10/7/2')),
								image: icon
							});
						}
					}
				]
			});	
		var icon = './mods/venomous-modAPI/examples/img/Vindows 95.png';
		GDT.addPlatform(
			{
				id: 'Vindows 95',
				name: 'Vindows 95',
				company: 'Mirconoft',
				startAmount: 1.221,
				unitsSold: 1.420,
				licencePrize: 19000,
				published: '10/2/3',
				platformRetireDate: '13/2/3',
				developmentCosts: 21000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 4,
				iconUri: icon,
				events: [
					{
						id: '32638DA7-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '10/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has started a revolution in the PC operating system market, and released Vindows 95.  Vindows 95 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('10/1/3', '10/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/examples/img/SuperStation 2.0.png';
		GDT.addPlatform(
			{
				id: 'SuperStation 2.0',
				name: 'SuperStation 2.0',
				company: 'Supersonic Games',
				startAmount: 2.222,
				unitsSold: 2.111,
				licencePrize: 21000,
				published: '15/8/2',
				platformRetireDate: '18/8/4',
				developmentCosts: 25000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 5,
				iconUri: icon,
				events: [
					{
						id: '22762DB6-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '14/8/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperStation 2.0 {0}. It has everything the SuperStation had. It has a better graphics engine than the SuperStation and it comes with a thermostat to control how hot or cold the console gets.".localize().format(General.getETADescription('14/8/2', '14/8/3')),
								image: icon
							});
						}
					}
				]
			});	
		var icon = './mods/venomous-modAPI/examples/img/SuperRift.png';
		GDT.addPlatform(
			{
				id: 'SuperRift',
				name: 'SuperRift',
				company: 'Supersonic Games',
				startAmount: 8.000,
				unitsSold: 6.999,
				licencePrize: 80000,
				published: '25/7/4',
				platformRetireDate: '45/7/4',
				developmentCosts: 100000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.8],
				audienceWeightings: [1.0, 1.0, 0.6],
				techLevel: 7,
				iconUri: icon,
				events: [
					{
						id: '22662DB6-71G5-5G37-10968-Z4Z3732044ZZ',
						date: '24/7/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a gaming headset called the SuperRift {0}. The SuperRift is a virtual reality headset that takes you straight into your favourite gaming world.".localize().format(General.getETADescription('24/7/1', '24/7/2')),
								image: icon
							});
						}
					}
				]
			});	
	};
	/*  */
 
})();