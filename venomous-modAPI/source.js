var venomousmodAPI = {};
(function () {	
	
	/* Platforms */
	venomousmodAPI.addPlatform = function () {
		var icon = './mods/venomous-modAPI/img/SuperBox.png';
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
		var icon = './mods/venomous-modAPI/img/Vindows 1.0.png';
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
		var icon = './mods/venomous-modAPI/img/matari5200.png';
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
		var icon = './mods/venomous-modAPI/img/matari7800.png';
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
		var icon = './mods/venomous-modAPI/img/matariSEGS.png';
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
		var icon = './mods/venomous-modAPI/img/mataripanther.png';
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
		var icon = './mods/venomous-modAPI/img/SuperStar.png';
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
		var icon = './mods/venomous-modAPI/img/Vindows 2.0.png';
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
		var icon = './mods/venomous-modAPI/img/Vindows 2.1.png';
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
		var icon = './mods/venomous-modAPI/img/Vindows 3.0.png';
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
		var icon = './mods/venomous-modAPI/img/SuperStar 2.0.png';
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
		var icon = './mods/venomous-modAPI/img/Vindows 3.1.png';
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
		var icon = './mods/venomous-modAPI/img/SuperStation.png';
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
		var icon = './mods/venomous-modAPI/img/Vindows 95.png';
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
		var icon = './mods/venomous-modAPI/img/Vindows 98.png';
		GDT.addPlatform(
			{
				id: 'Vindows 98',
				name: 'Vindows 98',
				company: 'Mirconoft',
				startAmount: 1.422,
				unitsSold: 1.620,
				licencePrize: 21000,
				published: '13/3/3',
				platformRetireDate: '15/3/3',
				developmentCosts: 24000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 5,
				iconUri: icon,
				events: [
					{
						id: '32638DA9-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '13/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows 98, a new version of their Vindows operating system.  Vindows 98 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('13/1/3', '13/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/img/SuperStation 2.0.png';
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
		var icon = './mods/venomous-modAPI/img/Vindows Me.png';
		GDT.addPlatform(
			{
				id: 'Vindows Me',
				name: 'Vindows Me',
				company: 'Mirconoft',
				startAmount: 1.522,
				unitsSold: 1.720,
				licencePrize: 24000,
				published: '15/3/3',
				platformRetireDate: '16/3/3',
				developmentCosts: 25000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 6,
				iconUri: icon,
				events: [
					{
						id: '32638DB1-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '15/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows Me, a new version of their Vindows operating system.  Vindows Me just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('15/1/3', '15/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/img/SuperRift.png';
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
		var icon = './mods/venomous-modAPI/img/Vindows XP.png';
		GDT.addPlatform(
			{
				id: 'Vindows XP',
				name: 'Vindows XP',
				company: 'Mirconoft',
				startAmount: 1.722,
				unitsSold: 1.920,
				licencePrize: 25000,
				published: '16/3/3',
				platformRetireDate: '22/3/3',
				developmentCosts: 28000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 7,
				iconUri: icon,
				events: [
					{
						id: '32638DB2-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '16/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows XP, a revolutionary new version of their Vindows operating system with a more-graphically enhanced operating system UI.  Vindows XP just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('16/1/3', '16/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/img/Vindows Vista.png';
		GDT.addPlatform(
			{
				id: 'Vindows Vista',
				name: 'Vindows Vista',
				company: 'Mirconoft',
				startAmount: 1.922,
				unitsSold: 2.020,
				licencePrize: 28000,
				published: '22/3/3',
				platformRetireDate: '24/3/3',
				developmentCosts: 30000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 8,
				iconUri: icon,
				events: [
					{
						id: '32638DB3-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '22/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows Vista, a revolutionary new version of their Vindows operating system with a more-graphically enhanced operating system UI.  Vindows Vista just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('22/1/3', '22/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/img/Vindows 7.png';
		GDT.addPlatform(
			{
				id: 'Vindows 7',
				name: 'Vindows 7',
				company: 'Mirconoft',
				startAmount: 2.022,
				unitsSold: 2.120,
				licencePrize: 30000,
				published: '24/3/3',
				platformRetireDate: '29/3/3',
				developmentCosts: 50000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 9,
				iconUri: icon,
				events: [
					{
						id: '32638DB4-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '24/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows 7, a revolutionary new version of their popular Vindows operating system with a more-graphically enhanced operating system UI.  Vindows 7 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('24/1/3', '24/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/img/Skindle Fire.png';
		GDT.addPlatform(
			{
				id: 'Skindle Fire',
				name: 'Skindle Fire',
				company: 'Samazon Inc.',
				startAmount: 2.044,
				unitsSold: 2.140,
				licencePrize: 50000,
				published: '28/3/3',
				platformRetireDate: '29/3/3',
				developmentCosts: 80000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 9,
				iconUri: icon,
				events: [
					{
						id: '32638DB6-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '28/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Samazon Inc, the owner of the popular shopping website, Samazon.com, has just released a new gaming tablet called the Skindle Fire. The Skindle Fire will be in stores {0}.".localize().format(General.getETADescription('28/1/3', '28/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/img/Skindle Fire HD.png';
		GDT.addPlatform(
			{
				id: 'Skindle Fire HD',
				name: 'Skindle Fire HD',
				company: 'Samazon Inc.',
				startAmount: 2.124,
				unitsSold: 2.140,
				licencePrize: 60000,
				published: '29/3/3',
				platformRetireDate: '30/3/3',
				developmentCosts: 90000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 10,
				iconUri: icon,
				events: [
					{
						id: '32638DB7-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '29/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Samazon Inc, the owner of the popular shopping website, Samazon.com, has just released a new version of their gaming tablet, Skindle Fire, called the Skindle Fire HD. The Skindle Fire HD will be in stores {0}.".localize().format(General.getETADescription('29/1/3', '29/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/img/Vindows 8.png';
		GDT.addPlatform(
			{
				id: 'Vindows 8',
				name: 'Vindows 8',
				company: 'Mirconoft',
				startAmount: 2.122,
				unitsSold: 2.220,
				licencePrize: 50000,
				published: '29/3/3',
				platformRetireDate: '30/3/3',
				developmentCosts: 80000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 10,
				iconUri: icon,
				events: [
					{
						id: '32638DB5-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '29/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows 8. Vindows 8 comes with a new Metro-UI, that is very confusing to use. Vindows 8 also comes with touch-screen compatibility, when you install it on a PC or Mirconoft tablet. Vindows 8 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('29/1/3', '29/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/img/Vindows 8.1.png';
		GDT.addPlatform(
			{
				id: 'Vindows 8.1',
				name: 'Vindows 8.1',
				company: 'Mirconoft',
				startAmount: 2.222,
				unitsSold: 2.320,
				licencePrize: 80000,
				published: '30/3/3',
				platformRetireDate: '50/3/3',
				developmentCosts: 90000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 10,
				iconUri: icon,
				events: [
					{
						id: '32638DB6-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '30/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "OH NO, everybody hates Mirconoft's latest Vindows operating system, Vindows 8! Mirconoft has coded up a possible solution for those Vindows 8 haters. The solution is called Vindows 8.1. Vindows 8.1 includes fan-requested changes and features, such as the return of Start Button with a Metro design. Vindows 8.1 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('30/1/3', '30/2/3')),
								image: icon
							});
						}
					}
				]
			});
		var icon = './mods/venomous-modAPI/img/Skindle Fire HDX.png';
		GDT.addPlatform(
			{
				id: 'Skindle Fire HDX',
				name: 'Skindle Fire HDX',
				company: 'Samazon Inc.',
				startAmount: 2.124,
				unitsSold: 2.140,
				licencePrize: 60000,
				published: '30/3/3',
				platformRetireDate: '50/3/3',
				developmentCosts: 90000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 10,
				iconUri: icon,
				events: [
					{
						id: '32638DB7-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '30/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Samazon Inc, the owner of the popular shopping website, Samazon.com, has just released a new version of their gaming tablet, Skindle Fire HD, called the Skindle Fire HDX. The Skindle Fire HDX has a brand new feature, where you can call Samazon's customer service any-time, 24/7. The Skindle Fire HDX will be in stores {0}.".localize().format(General.getETADescription('30/1/3', '30/2/3')),
								image: icon
							});
						}
					}
				]
			});
	};
	/*  */
 
})();