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
		var icon1 = './mods/venomous-modAPI/img/Vindows 1.0.png';
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
				iconUri: icon1,
				events: [
					{
						id: '31638DA2-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '1/2/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has announced that Vindows 1.0, the new operating system for PC, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('1/2/1', '1/2/2')),
								image: icon1
							});
						}
					}
				]
			});
		var icon2 = './mods/venomous-modAPI/img/Vac OS X Public Beta.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X Public Beta',
				name: 'Vac OS X Public Beta',
				company: 'Grapple',
				startAmount: 0.150,
				unitsSold: 0.678,
				licencePrize: 6000,
				published: '1/2/2',
				platformRetireDate: '3/2/2',
				developmentCosts: 12000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.8],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 1,
				iconUri: icon2,
				events: [
					{
						id: '31638DB2-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '1/2/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple wants to compete with Mirconoft's Vindows operating system, so they have announced that Vac OS X Public Beta, the new operating system for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('1/2/1', '1/2/2')),
								image: icon2
							});
						}
					}
				]
			});
		var icon3 = './mods/venomous-modAPI/img/matari5200.png';
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
				iconUri: icon3,
				events: [
					{
						id: '21638DA5-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '2/5/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Matari Inc., has announced that their console called the Matari 5200 was a massive flop and will retire {0}.".localize().format(General.getETADescription('2/5/2', '2/6/2')),
								image: icon3
							});
						}
					}
				]
			});
		var icon4 = './mods/venomous-modAPI/img/matari7800.png';
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
				iconUri: icon4,
				events: [
					{
						id: '21638DA4-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '2/4/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Creators of the video game console flop, the Matari 5200, Matari Inc., have announced that their new console called the Matari 7800 will be released {0}.".localize().format(General.getETADescription('2/4/2', '2/6/2')),
								image: icon4
							});
						}
					}
				]
			});
		var icon5 = './mods/venomous-modAPI/img/matariSEGS.png';
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
				iconUri: icon5,
				events: [
					{
						id: '21648DA4-69G3-5G35-9966-Z1Z2621933ZZ',
						date: '4/12/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "After a few years of low marketshare, Matari Inc. have today announced their solution! The Matari SEGS is said to be more focused upon the PC side of power with a 64KB RAM!{n}The Matari SEGS will be released {0}.".localize().format(General.getETADescription('4/12/2', '5/5/2')),
								image: icon5
							});
						}
					}
				]
			});
		var icon6 = './mods/venomous-modAPI/img/mataripanther.png';
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
				iconUri: icon6,
				events: [
					{
						id: '21648DA5-69G3-5G35-9966-Z1Z2621933ZZ',
						date: '6/12/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "After 2 years, The marketshare is still low and Matari Inc. announced another solution! The Matari Panther is said to be more focused upon the PC side of graphical power with a 90KB RAM chip!{n}The Matari Panther will be released {0}.".localize().format(General.getETADescription('6/12/2', '7/5/2')),
								image: icon6
							});
						}
					}
				]
			});
		var icon7 = './mods/venomous-modAPI/img/SuperStar.png';
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
				iconUri: icon7,
				events: [
					{
						id: '21638DA3-69G3-5G35-9966-Z2Z2621933ZZ',
						date: '6/7/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperStar {0}. It has a cool new feature where it has 2 CD Drives. You can now play your favourite games and listen to music at the same time.".localize().format(General.getETADescription('6/7/1', '6/7/2')),
								image: icon7
							});
						}
					}
				]
			});	
		var icon8 = './mods/venomous-modAPI/img/Vindows 2.0.png';
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
				iconUri: icon8,
				events: [
					{
						id: '31638DA3-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '3/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft announced that Vindows 2.0, the new version of the Vindows operating system for PC, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('3/1/1', '3/2/2')),
								image: icon8
							});
						}
					}
				]
			});
		var icon9 = './mods/venomous-modAPI/img/Vindows 2.1.png';
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
				iconUri: icon9,
				events: [
					{
						id: '32638DA4-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '4/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft reacted and pounced on the bugs that Vindows 2.0 had in its coding. They released a patch for Vindows 2.0 called Vindows 2.1.  Vindows 2.1 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('4/1/1', '4/2/2')),
								image: icon9
							});
						}
					}
				]
			});
		var icon10 = './mods/venomous-modAPI/img/Vindows 3.0.png';
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
				iconUri: icon10,
				events: [
					{
						id: '32638DA5-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '6/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released a new version of their popular Vindows operating system for the PC called Vindows 3.0. Vindows 3.0 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('6/1/1', '6/2/2')),
								image: icon10
							});
						}
					}
				]
			});
		var icon11 = './mods/venomous-modAPI/img/SuperStar 2.0.png';
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
				iconUri: icon11,
				events: [
					{
						id: '21649DA4-69G4-5G36-9967-Z3Z2621933ZZ',
						date: '8/7/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperStar 2.0 {0}. It has a cool new feature where it has 2 CD Drives, a drink coaster in the special base under the CD Drives, and a advanced graphics engine. You can now play your favourite games, listen to music at the same time, and let your console hold your drink for you.".localize().format(General.getETADescription('8/7/1', '8/7/2')),
								image: icon11
							});
						}
					}
				]
			});	
		var icon12 = './mods/venomous-modAPI/img/Vindows 3.1.png';
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
				iconUri: icon12,
				events: [
					{
						id: '32638DA8-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '8/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released a new patch for Vindows 3.0 called Vindows 3.1. Vindows 3.1 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('8/1/3', '8/2/3')),
								image: icon12
							});
						}
					}
				]
			});
		var icon13 = './mods/venomous-modAPI/img/SuperStation.png';
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
				iconUri: icon13,
				events: [
					{
						id: '21651DB5-70G4-5G37-10968-Z4Z3732044ZZ',
						date: '10/7/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperStation {0}. It has everything the SuperStar 2.0 had. It has a better graphics engine than the SuperStar 2.0.".localize().format(General.getETADescription('10/7/1', '10/7/2')),
								image: icon13
							});
						}
					}
				]
			});	
		var icon14 = './mods/venomous-modAPI/img/Vindows 95.png';
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
				iconUri: icon14,
				events: [
					{
						id: '32638DA7-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '10/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has started a revolution in the PC operating system market, and released Vindows 95.  Vindows 95 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('10/1/3', '10/2/3')),
								image: icon14
							});
						}
					}
				]
			});
		var icon15 = './mods/venomous-modAPI/img/Vindows 98.png';
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
				iconUri: icon15,
				events: [
					{
						id: '32638DA9-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '13/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows 98, a new version of their Vindows operating system.  Vindows 98 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('13/1/3', '13/2/3')),
								image: icon15
							});
						}
					}
				]
			});
		var icon16 = './mods/venomous-modAPI/img/SuperStation 2.0.png';
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
				iconUri: icon16,
				events: [
					{
						id: '22762DB6-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '14/8/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperStation 2.0 {0}. It has everything the SuperStation had. It has a better graphics engine than the SuperStation and it comes with a thermostat to control how hot or cold the console gets.".localize().format(General.getETADescription('14/8/2', '14/8/3')),
								image: icon16
							});
						}
					}
				]
			});	
		var icon17 = './mods/venomous-modAPI/img/Vindows Me.png';
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
				iconUri: icon17,
				events: [
					{
						id: '32638DB1-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '15/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows Me, a new version of their Vindows operating system.  Vindows Me just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('15/1/3', '15/2/3')),
								image: icon17
							});
						}
					}
				]
			});
		var icon18 = './mods/venomous-modAPI/img/SuperRift.png';
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
				iconUri: icon18,
				events: [
					{
						id: '22662DB6-71G5-5G37-10968-Z4Z3732044ZZ',
						date: '24/7/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a gaming headset called the SuperRift {0}. The SuperRift is a virtual reality headset that takes you straight into your favourite gaming world.".localize().format(General.getETADescription('24/7/1', '24/7/2')),
								image: icon18
							});
						}
					}
				]
			});	
		var icon19 = './mods/venomous-modAPI/img/Vindows XP.png';
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
				iconUri: icon19,
				events: [
					{
						id: '32638DB2-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '16/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows XP, a revolutionary new version of their Vindows operating system with a more-graphically enhanced operating system UI.  Vindows XP just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('16/1/3', '16/2/3')),
								image: icon19
							});
						}
					}
				]
			});
		var icon20 = './mods/venomous-modAPI/img/Vindows Vista.png';
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
				iconUri: icon20,
				events: [
					{
						id: '32638DB3-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '22/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows Vista, a revolutionary new version of their Vindows operating system with a more-graphically enhanced operating system UI.  Vindows Vista just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('22/1/3', '22/2/3')),
								image: icon20
							});
						}
					}
				]
			});
		var icon21 = './mods/venomous-modAPI/img/Vindows 7.png';
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
				iconUri: icon21,
				events: [
					{
						id: '32638DB4-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '24/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows 7, a revolutionary new version of their popular Vindows operating system with a more-graphically enhanced operating system UI.  Vindows 7 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('24/1/3', '24/2/3')),
								image: icon21
							});
						}
					}
				]
			});
		var icon22 = './mods/venomous-modAPI/img/Skindle Fire.png';
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
				iconUri: icon22,
				events: [
					{
						id: '32638DB13-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '28/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Samazon Inc, the owner of the popular shopping website, Samazon.com, has just released a new gaming tablet called the Skindle Fire. The Skindle Fire will be in stores {0}.".localize().format(General.getETADescription('28/1/3', '28/2/3')),
								image: icon22
							});
						}
					}
				]
			});
		var icon23 = './mods/venomous-modAPI/img/Skindle Fire HD.png';
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
				iconUri: icon23,
				events: [
					{
						id: '32638DB12-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '29/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Samazon Inc, the owner of the popular shopping website, Samazon.com, has just released a new version of their gaming tablet, Skindle Fire, called the Skindle Fire HD. The Skindle Fire HD will be in stores {0}.".localize().format(General.getETADescription('29/1/3', '29/2/3')),
								image: icon23
							});
						}
					}
				]
			});
		var icon24 = './mods/venomous-modAPI/img/Vindows 8.png';
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
				iconUri: icon24,
				events: [
					{
						id: '32638DB5-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '29/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has released Vindows 8. Vindows 8 comes with a new Metro-UI, that is very confusing to use. Vindows 8 also comes with touch-screen compatibility, when you install it on a PC or Mirconoft tablet. Vindows 8 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('29/1/3', '29/2/3')),
								image: icon24
							});
						}
					}
				]
			});
		var icon25 = './mods/venomous-modAPI/img/Vindows 8.1.png';
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
				iconUri: icon25,
				events: [
					{
						id: '32638DB11-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '30/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "OH NO, everybody hates Mirconoft's latest Vindows operating system, Vindows 8! Mirconoft has coded up a possible solution for those Vindows 8 haters. The solution is called Vindows 8.1. Vindows 8.1 includes fan-requested changes and features, such as the return of Start Button with a Metro design. Vindows 8.1 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('30/1/3', '30/2/3')),
								image: icon25
							});
						}
					}
				]
			});
		var icon26 = './mods/venomous-modAPI/img/Skindle Fire HDX.png';
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
				iconUri: icon26,
				events: [
					{
						id: '32638DB10-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '30/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Samazon Inc, the owner of the popular shopping website, Samazon.com, has just released a new version of their gaming tablet, Skindle Fire HD, called the Skindle Fire HDX. The Skindle Fire HDX has a brand new feature, where you can call Samazon's customer service any-time, 24/7. The Skindle Fire HDX will be in stores {0}.".localize().format(General.getETADescription('30/1/3', '30/2/3')),
								image: icon26
							});
						}
					}
				]
			});
		var icon27 = './mods/venomous-modAPI/img/Zeeboz.png';
		GDT.addPlatform(
			{
				id: 'Zeeboz',
				name: 'Zeeboz',
				company: 'Zeeboz Inc.',
				startAmount: 2.124,
				unitsSold: 2.140,
				licencePrize: 60000,
				published: '16/5/3',
				platformRetireDate: '18/5/3',
				developmentCosts: 90000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 10,
				iconUri: icon27,
				events: [
					{
						id: '32638DB14-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '16/3/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Zeeboz Inc wanted to try in the video gaming market, by publishing their own console, Zeeboz. Zeeboz will be in stores {0}.".localize().format(General.getETADescription('16/3/3', '16/4/3')),
								image: icon27
							});
						}
					}
				]
			});
		var icon28 = './mods/venomous-modAPI/img/Vac OS X 10.0.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X 10.0',
				name: 'Vac OS X 10.0',
				company: 'Grapple',
				startAmount: 0.450,
				unitsSold: 0.878,
				licencePrize: 12000,
				published: '3/2/2',
				platformRetireDate: '4/2/2',
				developmentCosts: 14000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 2,
				iconUri: icon28,
				events: [
					{
						id: '31638DA15-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '3/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X 10.0, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('3/1/1', '3/2/2')),
								image: icon28
							});
						}
					}
				]
			});
		var icon29 = './mods/venomous-modAPI/img/Vac OS X 10.1.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X 10.1',
				name: 'Vac OS X 10.1',
				company: 'Grapple',
				startAmount: 0.550,
				unitsSold: 0.978,
				licencePrize: 14000,
				published: '4/2/2',
				platformRetireDate: '7/2/2',
				developmentCosts: 18000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 3,
				iconUri: icon29,
				events: [
					{
						id: '31638DA16-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '4/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X 10.1, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('4/1/1', '4/2/2')),
								image: icon29
							});
						}
					}
				]
			});
		var icon30 = './mods/venomous-modAPI/img/Vac OS X 10.2.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X 10.2',
				name: 'Vac OS X 10.2',
				company: 'Grapple',
				startAmount: 0.750,
				unitsSold: 1.978,
				licencePrize: 210000,
				published: '7/2/2',
				platformRetireDate: '10/2/2',
				developmentCosts: 220000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 4,
				iconUri: icon30,
				events: [
					{
						id: '31638DA17-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '7/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X 10.2, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('7/1/1', '7/2/2')),
								image: icon30
							});
						}
					}
				]
			});
		var icon31 = './mods/venomous-modAPI/img/Vac OS X Panther.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X Panther',
				name: 'Vac OS X Panther',
				company: 'Grapple',
				startAmount: 2.250,
				unitsSold: 2.978,
				licencePrize: 220000,
				published: '10/2/2',
				platformRetireDate: '12/2/2',
				developmentCosts: 240000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 5,
				iconUri: icon31,
				events: [
					{
						id: '31638DA18-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '10/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Panther, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('10/1/1', '10/2/2')),
								image: icon31
							});
						}
					}
				]
			});
		var icon32 = './mods/venomous-modAPI/img/Vac OS X Tiger.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X Tiger',
				name: 'Vac OS X Tiger',
				company: 'Grapple',
				startAmount: 3.250,
				unitsSold: 3.978,
				licencePrize: 240000,
				published: '12/2/2',
				platformRetireDate: '14/2/2',
				developmentCosts: 270000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 6,
				iconUri: icon32,
				events: [
					{
						id: '31638DA19-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '12/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Tiger, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('12/1/1', '12/2/2')),
								image: icon32
							});
						}
					}
				]
			});
		var icon33 = './mods/venomous-modAPI/img/Vac OS X Leopard.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X Leopard',
				name: 'Vac OS X Leopard',
				company: 'Grapple',
				startAmount: 4.250,
				unitsSold: 4.978,
				licencePrize: 250000,
				published: '14/2/2',
				platformRetireDate: '16/2/2',
				developmentCosts: 280000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 7,
				iconUri: icon33,
				events: [
					{
						id: '31638DA20-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '14/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Leopard, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('14/1/1', '14/2/2')),
								image: icon33
							});
						}
					}
				]
			});
		var icon34 = './mods/venomous-modAPI/img/Vac OS X Snow Leopard.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X Snow Leopard',
				name: 'Vac OS X Snow Leopard',
				company: 'Grapple',
				startAmount: 4.250,
				unitsSold: 4.978,
				licencePrize: 280000,
				published: '16/2/2',
				platformRetireDate: '19/2/2',
				developmentCosts: 320000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 8,
				iconUri: icon34,
				events: [
					{
						id: '31638DA21-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '16/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Snow Leopard, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('16/1/1', '16/2/2')),
								image: icon34
							});
						}
					}
				]
			});
		var icon35 = './mods/venomous-modAPI/img/Vac OS X Lion.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X Lion',
				name: 'Vac OS X Lion',
				company: 'Grapple',
				startAmount: 5.250,
				unitsSold: 5.978,
				licencePrize: 290000,
				published: '19/2/2',
				platformRetireDate: '21/2/2',
				developmentCosts: 330000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 9,
				iconUri: icon35,
				events: [
					{
						id: '31638DA22-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '19/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Lion, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('19/1/1', '19/2/2')),
								image: icon35
							});
						}
					}
				]
			});
		var icon36 = './mods/venomous-modAPI/img/Vac OS X Mountain Lion.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X Mountain Lion',
				name: 'Vac OS X Mountain Lion',
				company: 'Grapple',
				startAmount: 6.250,
				unitsSold: 6.978,
				licencePrize: 330000,
				published: '21/2/2',
				platformRetireDate: '23/2/2',
				developmentCosts: 400000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 10,
				iconUri: icon36,
				events: [
					{
						id: '31638DA23-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '21/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Mountain Lion, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('21/1/1', '21/2/2')),
								image: icon36
							});
						}
					}
				]
			});
		var icon37 = './mods/venomous-modAPI/img/Vac OS X Mavericks.png';
		GDT.addPlatform(
			{
				id: 'Vac OS X Mavericks',
				name: 'Vac OS X Mavericks',
				company: 'Grapple',
				startAmount: 7.250,
				unitsSold: 7.978,
				licencePrize: 430000,
				published: '23/2/2',
				platformRetireDate: '50/2/2',
				developmentCosts: 500000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 11,
				iconUri: icon37,
				events: [
					{
						id: '31638DA24-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '23/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Mavericks, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('23/1/1', '23/2/2')),
								image: icon37
							});
						}
					}
				]
			});
		var icon38 = './mods/venomous-modAPI/img/SuperFox.png';
		GDT.addPlatform(
			{
				id: 'SuperFox',
				name: 'SuperFox',
				company: 'Supersonic Games',
				startAmount: 3.222,
				unitsSold: 3.999,
				licencePrize: 25000,
				published: '18/8/2',
				platformRetireDate: '21/8/4',
				developmentCosts: 40000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 6,
				iconUri: icon38,
				events: [
					{
						id: '33873ES7-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '18/8/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperFox {0}. The SuperFox is smarter, better, strong, and more powerful than any other console in the history of video game consoles. The SuperFox has a brand new, custom graphics chip that has been custom-made for the console. The chip can do 2D Graphics and 3D Graphics of previous consoles easily in the SuperFox. It can also do a higher level of graphics power that hasn't been seen in a console before.".localize().format(General.getETADescription('18/8/2', '18/8/3')),
								image: icon38
							});
						}
					}
				]
			});	
		var icon39 = './mods/venomous-modAPI/img/SuperFox 360.png';
		GDT.addPlatform(
			{
				id: 'SuperFox 360',
				name: 'SuperFox 360',
				company: 'Supersonic Games',
				startAmount: 4.222,
				unitsSold: 7.999,
				licencePrize: 45000,
				published: '21/8/4',
				platformRetireDate: '50/8/4',
				developmentCosts: 70000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 7,
				iconUri: icon39,
				events: [
					{
						id: '33873ES8-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '21/8/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Supersonic Games has announced that they are publishing a shiny, new game console called the SuperFox 360 {0}. The SuperFox 360 is smarter, better, strong, and more powerful than any other console in the history of video game consoles. The SuperFox 360 has a brand new, custom graphics chip that has been custom-made for the console. The chip can do 2D Graphics and 3D Graphics of previous consoles easily in the SuperFox. It can also do a higher level of graphics power that hasn't been seen in a console before.".localize().format(General.getETADescription('21/8/2', '21/8/3')),
								image: icon39
							});
						}
					}
				]
			});	
	};
	
	venomousmodAPI.addResearchItem = function () {
	GDT.addResearchItem(
	{
		id: "UI Structure",
		name: "UI Structure".localize(),
		v: 4,
		canResearch: function (company) {
			return LevelCalculator.getMissionLevel('Level Design') < 5 //The 'Level Design' level has to 4 or lower
		},
		category: "Level Design",
		categoryDisplayName: "Level Design".localize()
	});
	GDT.addResearchItem(
		{
			id: "Animated Bosses",
			name: "Animated Bosses".localize(),
			v: 2,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') <3
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
		});
		GDT.addResearchItem(
		{
			id: "3D Graphics Version 8",
			name: "3D Graphics Version 8".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') >3
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
		});
		GDT.addResearchItem(
		{
			id: "3D Graphics Version 9",
			name: "3D Graphics Version 9".localize(),
			v: 9,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') >3
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
		});
};
	venomousmodAPI.addTopic = function () {
	GDT.addTopics([
		{
			id: "Tycoon",
	    	name: "Tycoon".localize("game topic"),
	    	genreWeightings: [1, 0.9, 0.8, 1, 1, 0.6],
	    	audienceWeightings: [0.8, 0.8, 0.6]
		}, {
	    	id: "Mash A To Win",
	    	name: "Mash A To Win".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
	    	id: "Exercise Cats",
	    	name: "Exercise Cats".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
	    	id: "Cat Fighting",
	    	name: "Cat Fighting".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
	    	id: "Cat Tag",
	    	name: "Cat Tag".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
	    	id: "Cat Sports",
	    	name: "Cat Sports".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
	    	id: "Angry Birds-Style",
	    	name: "Angry Birds-Style".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
	    	id: "Trivia",
	    	name: "Trivia".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Computer Dev",
	    	name: "Computer Dev".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Mod Dev",
	    	name: "Mod Dev".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Burnout-Style Racing",
	    	name: "Burnout-Style Racing".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Cop Chase",
	    	name: "Cop Chase".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Bean-Bag Toss",
	    	name: "Bean-Bag Toss".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Rescue Turtles",
	    	name: "Rescue Turtles".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Car Dodging",
	    	name: "Car Dodging".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Squirrel Dodging",
	    	name: "Squirrel Dodging".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Fish Fighting",
	    	name: "Fish Fighting".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Cat Treat Toss",
	    	name: "Cat Treat Toss".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Sandwich Making",
	    	name: "Sandwich Making".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}, {
			id: "Comic Book Development",
	    	name: "Comic Book Development".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8]
		}
	    ]);
	};
	 /*  */		       
})();