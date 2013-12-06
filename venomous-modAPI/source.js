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
								text: "Coming out of nowhere, a company called Supersonic Games has announced that they will publish a new game console called the SuperBox {0}.".localize().format(General.getETADescription('1/1/1', '1/2/1')),
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
				published: '1/2/1',
				platformRetireDate: '4/2/2',
				developmentCosts: 12000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.8],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 1,
				iconUri: icon1,
				events: [
					{
						id: '31638DA2-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '1/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mirconoft has announced that Vindows 1.0, the new operating system for PC, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('1/1/3', '1/2/1')),
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
				published: '2/2/1',
				platformRetireDate: '5/2/2',
				developmentCosts: 12000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.8],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 1,
				iconUri: icon2,
				events: [
					{
						id: '31638DB2-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '1/4/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple wants to compete with Mirconoft's Vindows operating system, so they have announced that Vac OS X Public Beta, the new operating system for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('1/4/4', '2/2/1')),
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
				published: '3/7/3',
				platformRetireDate: '6/7/2',
				developmentCosts: 1000,
				genreWeightings: [1, 0.8, 0.9, 0.8, 0.7, 0.8],
				audienceWeightings: [0.9, 1, 0.6],
				techLevel: 2,
				iconUri: icon3,
				events: [
					{
						id: '21638DA5-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '3/7/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Matari Inc., has announced that their console called the Matari 5200 was a massive flop and will retire {0}.".localize().format(General.getETADescription('3/7/2', '3/7/3')),
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
				published: '6/7/4',
				platformRetireDate: '8/4/2',
				developmentCosts: 35000,
				genreWeightings: [1, 0.8, 0.9, 0.8, 0.7, 0.6],
				audienceWeightings: [0.9, 1, 0.8],
				techLevel: 3,
				iconUri: icon4,
				events: [
					{
						id: '21638DA4-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '6/6/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Creators of the video game console flop, the Matari 5200, Matari Inc, have announced that their new console called the Matari 7800 will be released {0}.".localize().format(General.getETADescription('6/6/3', '6/7/4')),
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
				published: '8/5/2',
				platformRetireDate: '11/4/2',
				developmentCosts: 40000,
				genreWeightings: [1, 0.9, 0.7, 0.8, 0.8, 0.6],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 4,
				iconUri: icon5,
				events: [
					{
						id: '21648DA4-69G3-5G35-9966-Z1Z2621933ZZ',
						date: '8/3/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "After a few years of low market-share, Matari Inc. has announced their solution to their low market-share! The Matari SEGS is said to be more focused upon the PC side of power with a 64KB RAM!{n}The Matari SEGS will be released {0}.".localize().format(General.getETADescription('8/3/2', '8/5/2')),
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
				published: '11/5/2',
				platformRetireDate: '13/5/2',
				developmentCosts: 50000,
				genreWeightings: [1, 0.9, 0.7, 0.8, 0.8, 0.6],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 5,
				iconUri: icon6,
				events: [
					{
						id: '21648DA5-69G3-5G35-9966-Z1Z2621933ZZ',
						date: '11/3/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "After 2 years, The market-share is still low and Matari Inc. announced another solution! The Matari Panther is said to be more focused upon the PC side of graphical power with a 90KB RAM chip!{n}The Matari Panther will be released {0}.".localize().format(General.getETADescription('11/3/2', '11/5/2')),
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
								text: "Samazon Inc, the owner of the popular shopping website, Samazon.com, has just released a new version of their gaming tablet, the Skindle Fire, called the Skindle Fire HD. The Skindle Fire HD will be in stores {0}.".localize().format(General.getETADescription('29/1/3', '29/2/3')),
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
								text: "Mirconoft has released Vindows 8. Vindows 8 comes with a new Metro-UI, that is very confusing to use. Vindows 8 also comes with touch-screen compatibility when you install it on a PC with a touch-screen monitor or Mirconoft tablet. Vindows 8 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('29/1/3', '29/2/3')),
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
								text: "OH NO, everybody hates Mirconoft's latest Vindows operating system, Vindows 8! Mirconoft has coded up a possible solution for those Vindows 8 haters. The solution is called Vindows 8.1! Vindows 8.1 includes fan-requested changes and features, such as the return of Start Button with a Metro design. Vindows 8.1 just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('30/1/3', '30/2/3')),
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
								text: "Samazon Inc, the owner of the popular shopping website, Samazon.com, has just released a new version of their gaming tablet, the Skindle Fire HD, called the Skindle Fire HDX. The Skindle Fire HDX has a brand new feature, where you can call Samazon's customer service any-time, 24/7. The Skindle Fire HDX will be in stores {0}.".localize().format(General.getETADescription('30/1/3', '30/2/3')),
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
								text: "Zeeboz Inc wanted to try their hand at the video gaming market by publishing their own console, the Zeeboz. Zeeboz will be in stores {0}.".localize().format(General.getETADescription('16/3/3', '16/4/3')),
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
				published: '6/2/2',
				platformRetireDate: '8/2/2',
				developmentCosts: 14000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 2,
				iconUri: icon28,
				events: [
					{
						id: '31638DA15-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '6/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X 10.0, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('6/1/1', '6/2/2')),
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
				published: '9/2/2',
				platformRetireDate: '11/2/2',
				developmentCosts: 18000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 3,
				iconUri: icon29,
				events: [
					{
						id: '31638DA16-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '9/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X 10.1, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('9/1/1', '9/2/2')),
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
				published: '12/2/2',
				platformRetireDate: '14/2/2',
				developmentCosts: 220000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 4,
				iconUri: icon30,
				events: [
					{
						id: '31638DA17-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '12/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X 10.2, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('12/1/1', '12/2/2')),
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
				published: '14/3/2',
				platformRetireDate: '16/2/2',
				developmentCosts: 240000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 5,
				iconUri: icon31,
				events: [
					{
						id: '31638DA18-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '14/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Panther, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('14/1/1', '14/3/2')),
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
				published: '16/3/2',
				platformRetireDate: '18/2/2',
				developmentCosts: 270000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 6,
				iconUri: icon32,
				events: [
					{
						id: '31638DA19-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '16/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Tiger, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('16/1/1', '16/3/2')),
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
				published: '19/2/2',
				platformRetireDate: '21/2/2',
				developmentCosts: 280000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 7,
				iconUri: icon33,
				events: [
					{
						id: '31638DA20-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '19/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Leopard, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('19/1/1', '19/2/2')),
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
				published: '21/3/2',
				platformRetireDate: '24/2/2',
				developmentCosts: 320000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 8,
				iconUri: icon34,
				events: [
					{
						id: '31638DA21-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '21/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Snow Leopard, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('21/1/1', '21/3/2')),
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
				published: '24/3/2',
				platformRetireDate: '27/2/2',
				developmentCosts: 330000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 9,
				iconUri: icon35,
				events: [
					{
						id: '31638DA22-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '24/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Lion, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('24/1/1', '24/3/2')),
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
				published: '27/3/2',
				platformRetireDate: '30/2/2',
				developmentCosts: 400000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 10,
				iconUri: icon36,
				events: [
					{
						id: '31638DA23-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '27/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Mountain Lion, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('27/1/1', '27/3/2')),
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
				published: '30/3/2',
				platformRetireDate: '70/2/2',
				developmentCosts: 500000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 11,
				iconUri: icon37,
				events: [
					{
						id: '31638DA24-69G2-5G34-9965-Z1Z2621933ZZ',
						date: '30/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Grapple has announced that Vac OS X Mavericks, for Vac, just hit RTM, and it will be available in stores {0}.".localize().format(General.getETADescription('30/1/1', '30/3/2')),
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
		var icon40 = './mods/venomous-modAPI/img/Melstar.png';
		GDT.addPlatform(
			{
				id: 'Melstar',
				name: 'Melstar',
				company: 'Moleco',
				startAmount: 0.222,
				unitsSold: 2.999,
				licencePrize: 10000,
				published: '1/2/1',
				platformRetireDate: '5/9/4',
				developmentCosts: 12000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 1,
				iconUri: icon40,
				events: [
					{
						id: '33873ES9-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '1/1/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: " Moleco has announced that the Melstar, their new gaming console, is hitting store shelves {0}.".localize().format(General.getETADescription('21/8/2', '21/8/3')),
								image: icon40
							});
						}
					}
				]
			});	
		var icon41 = './mods/venomous-modAPI/img/CVIDIA Shield.png';
		GDT.addPlatform(
			{
				id: 'CVIDIA Shield',
				name: 'CVIDIA Shield',
				company: 'CVIDIA',
				startAmount: 0.222,
				unitsSold: 30.999,
				licencePrize: 6000,
				published: '23/9/1',
				platformRetireDate: '70/9/4',
				developmentCosts: 8000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 10,
				iconUri: icon41,
				events: [
					{
						id: '33873ES10-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '23/8/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: " CVIDIA, the most popular company that makes graphics cards for PC, has announced that they are making a new handheld gaming console called the CVIDIA Shield. The CVIDIA Shield is hitting store shelves {0}.".localize().format(General.getETADescription('23/8/3', '23/9/1')),
								image: icon41
							});
						}
					}
				]
			});	
		var icon42 = './mods/venomous-modAPI/img/Color MV Game.png';
		GDT.addPlatform(
			{
				id: 'Color MV Game',
				name: 'Color MV Game',
				company: 'Ninvento',
				startAmount: 0.222,
				unitsSold: 2.999,
				licencePrize: 10000,
				published: '1/1/1',
				platformRetireDate: '5/9/4',
				developmentCosts: 13000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 1,
				iconUri: icon42,
				events: [
					{
						id: '33873ES11-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '4/9/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: " Ninvento has decided to retire their console, the Color MV Game, that was exclusive to Japan. The Color MV Game is retiring off the store shelves in Japan {0}.".localize().format(General.getETADescription('4/9/4', '4/10/4')),
								image: icon42
							});
						}
					}
				]
			});	
		var icon43 = './mods/venomous-modAPI/img/Matari Pong.png';
		GDT.addPlatform(
			{
				id: 'Matari Pong',
				name: 'Matari Pong',
				company: 'Matari',
				startAmount: 0.222,
				unitsSold: 2.999,
				licencePrize: 10000,
				published: '1/1/1',
				platformRetireDate: '2/7/2',
				developmentCosts: 13000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 1,
				iconUri: icon43,
				events: [
					{
						id: '33873ES12-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '2/5/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: " Matari has decided to retire their console, the Matari Pong system. Matari Pong is retiring from the store shelves {0}.".localize().format(General.getETADescription('2/5/2', '2/5/3')),
								image: icon43
							});
						}
					}
				]
			});	
		var icon44 = './mods/venomous-modAPI/img/Matari 2600.png';
		GDT.addPlatform(
			{
				id: 'Matari 2600',
				name: 'Matari 2600',
				company: 'Matari',
				startAmount: 2.999,
				unitsSold: 4.999,
				licencePrize: 15000,
				published: '2/8/2',
				platformRetireDate: '5/7/2',
				developmentCosts: 16000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 2,
				iconUri: icon44,
				events: [
					{
						id: '33873ES13-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '2/7/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: " Matari has announced that their new console, the Matari 2600. Matari 2600 will be on the store shelves {0}.".localize().format(General.getETADescription('2/7/2', '2/7/3')),
								image: icon44
							});
						}
					}
				]
			});	
		var icon45 = './mods/venomous-modAPI/img/Mairchild Channel M.png';
		GDT.addPlatform(
			{
				id: 'Mairchild Channel M',
				name: 'Mairchild Channel M',
				company: 'Mairchild Semiconductor',
				startAmount: 2.999,
				unitsSold: 4.999,
				licencePrize: 15000,
				published: '1/1/1',
				platformRetireDate: '5/7/2',
				developmentCosts: 17000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 2,
				iconUri: icon45,
				events: [
					{
						id: '33873ES14-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '5/6/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: " Mairchild Semiconductor has announced that their console, the Mairchild Channel M, is soon retiring from the store shelves. The Mairchild Channel M will retire from the store shelves {0}.".localize().format(General.getETADescription('5/6/2', '5/6/3')),
								image: icon45
							});
						}
					}
				]
			});	
		var icon46 = './mods/venomous-modAPI/img/Cntellivision.png';
		GDT.addPlatform(
			{
				id: 'Cntellivision',
				name: 'Cntellivision',
				company: 'Cattel',
				startAmount: 2.999,
				unitsSold: 4.999,
				licencePrize: 30000,
				published: '1/1/1',
				platformRetireDate: '5/7/2',
				developmentCosts: 40000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 2,
				iconUri: icon46,
				events: [
					{
						id: '33873ES15-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '5/6/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: " Cattel has announced that their console, the Cntellivision is soon retiring from the store shelves. Cntellivision will retire from the store shelves {0}.".localize().format(General.getETADescription('5/6/4', '5/7/1')),
								image: icon46
							});
						}
					}
				]
			});
		var icon47 = './mods/venomous-modAPI/img/Mectrex.png';
		GDT.addPlatform(
			{
				id: 'Mectrex',
				name: 'Mectrex',
				company: 'Mestern Technologies',
				startAmount: 2.999,
				unitsSold: 4.999,
				licencePrize: 30000,
				published: '1/1/1',
				platformRetireDate: '5/7/2',
				developmentCosts: 50000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 2,
				iconUri: icon47,
				events: [
					{
						id: '33873ES16-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '5/7/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: " Mestern Technologies has announced that their console, the Mectrex is soon retiring from the store shelves. Mectrex will retire from the store shelves {0}.".localize().format(General.getETADescription('5/7/1', '5/7/2')),
								image: icon47
							});
						}
					}
				]
			});
		var icon48 = './mods/venomous-modAPI/img/Mrcadia.png';
		GDT.addPlatform(
			{
				id: 'Mrcadia',
				name: 'Mrcadia',
				company: 'Vmerson',
				startAmount: 2.999,
				unitsSold: 4.999,
				licencePrize: 20000,
				published: '1/1/1',
				platformRetireDate: '5/8/2',
				developmentCosts: 40000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 2,
				iconUri: icon48,
				events: [
					{
						id: '33873ES17-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '5/7/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Vmerson has announced that their console, the Mrcadia is soon retiring from the store shelves. The Mrcadia will retire from the store shelves {0}.".localize().format(General.getETADescription('5/7/2', '5/7/3')),
								image: icon48
							});
						}
					}
				]
			});
		var icon49 = './mods/venomous-modAPI/img/Mally Mastrocade.png';
		GDT.addPlatform(
			{
				id: 'Mally Mastrocade',
				name: 'Mally Mastrocade',
				company: 'Mally',
				startAmount: 2.999,
				unitsSold: 4.999,
				licencePrize: 10000,
				published: '1/1/1',
				platformRetireDate: '5/8/2',
				developmentCosts: 30000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [1.0, 1.0, 0.7],
				techLevel: 2,
				iconUri: icon49,
				events: [
					{
						id: '33873ES18-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '5/7/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mally has announced that their console, the Mally Mastrocade is soon retire from the store shelves. The Mally Mastrocade will retire from the store shelves {0}.".localize().format(General.getETADescription('5/7/4', '5/8/1')),
								image: icon49
							});
						}
					}
				]
			});
		var icon50 = './mods/venomous-modAPI/img/MTC One.png';
		GDT.addPlatform(
			{
				id: 'MTC One',
				name: 'MTC One',
				company: 'MTC',
				startAmount: 7.250,
				unitsSold: 7.978,
				licencePrize: 430000,
				published: '23/2/2',
				platformRetireDate: '50/2/2',
				developmentCosts: 500000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.7],
				techLevel: 11,
				iconUri: icon50,
				events: [
					{
						id: '33873ES19-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '23/1/1',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "MTC, a manufacturer of smart-phones and tablets, has announced a new gaming smart-phone called the MTC One. The MTC One will be available in stores {0}.".localize().format(General.getETADescription('23/1/1', '23/2/2')),
								image: icon50
							});
						}
					}
				]
			});
		var icon51 = './mods/venomous-modAPI/img/Mookia 3310.png';
		GDT.addPlatform(
			{
				id: 'Mookia 3310',
				name: 'Mookia 3310',
				company: 'Mookia',
				startAmount: 2.250,
				unitsSold: 2.978,
				licencePrize: 100000,
				published: '12/12/1',
				platformRetireDate: '16/2/2',
				developmentCosts: 300000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.6],
				techLevel: 5,
				iconUri: icon51,
				events: [
					{
						id: '33873ES20-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '12/10/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mookia, a manufacturer of cell phones and other technology, has announced a new cell phone called the Mookia 3310. The Mookia 3310 will be available in stores {0}.".localize().format(General.getETADescription('12/10/4', '12/12/1')),
								image: icon51
							});
						}
					}
				]
			});
		var icon52 = './mods/venomous-modAPI/img/Mookia Moomia.png';
		GDT.addPlatform(
			{
				id: 'Mookia Moomia',
				name: 'Mookia Moomia',
				company: 'Mookia',
				startAmount: 7.222,
				unitsSold: 9.320,
				licencePrize: 180000,
				published: '30/3/3',
				platformRetireDate: '50/3/3',
				developmentCosts: 190000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 10,
				iconUri: icon52,
				events: [
					{
						id: '33873ES21-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '30/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Mookia and Mirconoft have teamed up to make the Mookia Moomia. The Mookia Moomia runs a modified version of the mBox 360 and Vindows operating systems. The Mookia Moomia will be available in stores {0}.".localize().format(General.getETADescription('30/1/3', '30/3/3')),
								image: icon52
							});
						}
					}
				]
			});
		var icon53 = './mods/venomous-modAPI/img/GRID Machine.png';
		GDT.addPlatform(
			{
				id: 'GRID Machine',
				name: 'GRID Machine',
				company: 'GRID',
				startAmount: 7.222,
				unitsSold: 9.320,
				licencePrize: 180000,
				published: '30/3/3',
				platformRetireDate: '50/3/3',
				developmentCosts: 190000,
				genreWeightings: [0.9, 1.0, 1.0, 0.9, 1, 0.9],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 10,
				iconUri: icon53,
				events: [
					{
						id: '33873ES22-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '30/1/3',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "GRID, the most popular company that started the GRID platform for games, has announced that they are making a new gaming console called the GRID Machine. The GRID Machine runs on the GRID operating system, the same operating system that runs the GRID gaming platform. The GRID Machine will be available in stores {0}.".localize().format(General.getETADescription('30/1/3', '30/3/3')),
								image: icon53
							});
						}
					}
				]
			});
		var icon54 = './mods/venomous-modAPI/img/BFF MV Mun.png';
		GDT.addPlatform(
			{
				id: 'BFF MV Mun',
				name: 'BFF MV Mun',
				company: 'BFF Electronics',
				startAmount: 0.222,
				unitsSold: 2.222,
				licencePrize: 100,
				published: '1/1/1',
				platformRetireDate: '4/4/4',
				developmentCosts: 300,
				genreWeightings: [0.6, 0.6, 0.6, 1, 0.9, 1],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 1,
				iconUri: icon54,
				events: [
					{
						id: '33873ES23-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '4/2/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "The BFF MV Mun, a video game console from BFF Electronics, had a good run, but it wasn't good enough for the market. The BFF MV Mun will retire from store shelves {0}.".localize().format(General.getETADescription('4/2/4', '4/4/4')),
								image: icon54
							});
						}
					}
				]
			});
		var icon55 = './mods/venomous-modAPI/img/Sdyssey.png';
		GDT.addPlatform(
			{
				id: 'Sdyssey',
				name: 'Sdyssey',
				company: 'Sagnavox',
				startAmount: 0.222,
				unitsSold: 2.222,
				licencePrize: 200,
				published: '1/1/1',
				platformRetireDate: '5/4/4',
				developmentCosts: 400,
				genreWeightings: [0.6, 0.6, 0.6, 1, 0.9, 1],
				audienceWeightings: [0.9, 1.0, 0.9],
				techLevel: 1,
				iconUri: icon55,
				events: [
					{
						id: '33873ES24-70G5-5G38-11169-Z5Z4843155ZZ',
						date: '5/2/4',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Sagnavox is announcing that the Sdyssey is retiring soon. The Sdyssey will retire from store shelves {0}.".localize().format(General.getETADescription('5/2/4', '5/4/4')),
								image: icon55
							});
						}
					}
				]
			});
	};
	
		venomousmodAPI.addEventThunderstorm = function () {
		var eventId = "00000000000-0000-0000-0000-VENOMOUS";
		
		var Thunderstorm = {
			id: eventId,
			isRandom: true,
			maxTriggers: 1,
			trigger: function (company) {
				
				return company.currentLevel == 1 && company.isGameProgressBetween(0.4, 0.6);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "You were working on {0}! A huge thunderstorm has hit your city and your roof is starting to leak! You are scared that the rain will ruin your game!"
					.localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "Thunderstorm".localize(),
					text: msg,
					options: ["Protect Game!", "Continue Working"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Protect Game".localize(),
						text: "You cover your computer with a blanket, so the rain won't destroy your game."
					});
					n.adjustCash(+100, "Game is Safe");
					
					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "Destroyed Game".localize(),
						text: "You continue working on your game. the leak in your roof gets bigger and your garage is flooded. everything is destroyed including your computer."
					});
					n.adjustCash(-500, "Game is Destroyed");
					return;
				}
			}
		};
		GDT.addEvent(Thunderstorm);
	};
	
		venomousmodAPI.addEventThief = function () {
		var eventId = "00000000000-0000-0000-1111-VENOMOUS";

		var Thief= {
			id: eventId,
			isRandom: true,
			maxTriggers: 1,
			trigger: function (company) {
				return company.currenLevel == 1 && company.isGameProgressBetween(0.6, 0.7);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "While working on your game,{0}, you heard from a group of teenagers about a game thief named Eddie. Rumour has it, that Eddie, the game thief, is planning on breaking into your garage in a few weeks{n}How he can manage to do this is a big mystery. You could swear you were outside the entire time!\nHow do you want to react?\n\nYou could call the police, ignore the incident or install a security system."
					.localize().format(game.title);
				
				company.adjustHype(5 + 10 * company.getRandom());

				return new Notification({
					sourceId: eventId,
					header: "Eddie, the game thief".localize(),
					text: msg,
					options: ["Call Police", "Ignore incident", "Install Security System"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Eddie, the game thief".localize(),
						text: "Eddie breaks into your garage and steals your game code files from your computer. You call the police while your behind a book shelf. The police arrive at your garage and arrest Eddie."
					});
					n.adjustHype(5 + 10 * company.getRandom());
					n.adjustFans(1000);
					
					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "Eddie, the game thief".localize(),
						text: "Eddie breaks into your garage, and steals your game code files, while you were in the kitchen. Eddie smashes your computer in half, and sneaks out of the garage.\nUnfortunately you have to buy a new computer(-2000 cr.) - This might have been Eddie's big mistake",
						weeksUntilFired: 1 + 2 * company.getRandom()
					});
					n.adjustCash(-2000, "restoring computer");
					company.notifications.push(n);
					return;
				}
				if (decision === 2) {
					var n = new Notification({
						header: "Eddie, the game thief".localize(),
						text: "You install a security system on your house, so it calls the police when it gets disturbed. You can now work on your game in peace, without any distractions."
					});
					n.adjustHype(15 + 25 * company.getRandom());
					n.adjustFans(1000);
					
					company.activeNotifications.addRange(n.split());
					return;
				}
			}
		};

		GDT.addEvent(Thief);
	};
	
		venomousmodAPI.addEventCharlieDay = function () {
		var eventId = "00000000000-0000-1111-1111-VENOMOUS";
		
		var CharlieDay = {
			id: eventId,
			isRandom: true,
			maxTriggers: 1,
			trigger: function (company) {
				
				return company.currentLevel == 2 && company.isGameProgressBetween(0.1, 0.5);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "Today is National Charlie Day! Charlie and the other Greenheart Games developers have set up a special parade for National Charlie Day. Do you want to work on {0}, or go to the National Charlie Day parade?"
					.localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "National Charlie Day!".localize(),
					text: msg,
					options: ["Parade", "No Parade"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Parade".localize(),
						text: "You went to the National Charlie Day parade and made all of the Greenheart Games developers happy."
					});
					n.adjustCash(-500, "Parade");
					n.adjustHype(5 + 50 * company.getRandom());
					n.adjustFans(2000);
					
					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "No Parade".localize(),
						text: "You decided to not go to the parade, and work on {0} instead."
					});
					n.adjustCash(+500, "Continued Work On Game");
					return;
				}
			}
		};
		GDT.addEvent(CharlieDay);
	};
	
		venomousmodAPI.addEventDalekInvasion = function () {
		var eventId = "00000000000-0001-1111-1111-VENOMOUS";
		
		var DalekInvasion = {
			id: eventId,
			isRandom: true,
			maxTriggers: 2,
			trigger: function (company) {
				
				return company.currentLevel == 2 && company.isGameProgressBetween(0.5, 0.7);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "You were working happily on your game, {0}, and you hear a huge explosion at the TV. A army of Daleks appear out of the smoke and exterminate all of your staff. Do you want to run away, or fight the army of Daleks?"
					.localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "Dalek Invasion!".localize(),
					text: msg,
					options: ["Run Away", "Fight the Daleks"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Run Away".localize(),
						text: "You ran away, but you tripped and got exterminated by the Daleks."
					});
					n.adjustCash(-10000000, "Extermination");
					n.adjustHype(5 - 3000 * company.getRandom());
					n.adjustFans(-10000000);
					
					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "Fight the Daleks".localize(),
						text: "You take out your sonic screwdriver, and fight the Daleks to save your office. You defeated the Daleks with your sonic screwdriver."
					});
					n.adjustCash(10000000, "Saved the Day");
					n.adjustHype(5 + 3000 * company.getRandom());
					n.adjustFans(10000000);
					return;
				}
			}
		};
		GDT.addEvent(DalekInvasion);
	};
	
		venomousmodAPI.addEventMeTube = function () {
		var eventId = "00000000000-0011-1111-1111-VENOMOUS";
		
		var MeTube = {
			id: eventId,
			isRandom: true,
			maxTriggers: 2,
			trigger: function (company) {
				
				return company.currentLevel == 3 && company.isGameProgressBetween(0.9, 1.0);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "Boss, Let's Players are doing walkthroughs of our game, {0}, on MeTube, by recording gameplay footage from their review copies of the game, {0}. Should we Content Match their gameplay footage and get money, or should we flag every video and force MeTube to take them down?"
					.localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "MeTube!".localize(),
					text: msg,
					options: ["Content Match!", "Flag the Videos"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Content Match!".localize(),
						text: "You went on MeTube, and content matched every video that was related to your game, {0}."
					});
					n.adjustCash(+100000, "Content Match");
					n.adjustHype(5 + 200 * company.getRandom());
					n.adjustFans(100000);

					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "Flag the Videos".localize(),
						text: "You flagged every video that was related to your game, {0}, and you told MeTube to take the videos down for copyright."
					});
					n.adjustCash(+200000, "Flagged Videos");
					n.adjustHype(5 - 200 * company.getRandom());
					n.adjustFans(-100000);
					return;
				}
			}
		};
		GDT.addEvent(MeTube);
	};
	
		venomousmodAPI.addEventGamePort = function () {
		var eventId = "00000000000-0111-1111-1111-VENOMOUS";
		
		var GamePort = {
			id: eventId,
			isRandom: true,
			maxTriggers: 2,
			trigger: function (company) {
				
				return company.currentLevel == 3 && company.isGameProgressBetween(1.0, 1.0);
			},
			getNotification: function (company) {
				var game = company.currentGame;

				var msg = "Boss,Ninvento is doing a illegal port of our game, {0}, without our permission. Should we Sue Them or Warn Them?"
					.localize().format(game.title);
				return new Notification({
					sourceId: eventId,
					header: "Illegal Game Port".localize(),
					text: msg,
					options: ["Sue Them!", "Warn Them"]
				});
			},
			complete: function (decision) {
				var company = GameManager.company;

				if (decision === 0) {
					var n = new Notification({
						header: "Sue Them!".localize(),
						text: "You sued Ninvento in court for making a illegal port of your game, {0}. You won the case and Ninvento was considered guilty. They own your company the amount of money, they paid to port your game, {0}."
					});
					n.adjustCash(+10000000000000000000000, "Sued Ninvento");
					n.adjustHype(5 + 2000 * company.getRandom());
					n.adjustFans(-2000);

					company.activeNotifications.addRange(n.split());
					return;
				}
				if (decision === 1) {
					var n = new Notification({
						header: "Warn Them".localize(),
						text: "You warned Ninvento, for making a port of your game, {0}, without your permission."
					});
					n.adjustCash(+200000, "Warned Ninvento");
					n.adjustHype(5 + 2000 * company.getRandom());
					n.adjustFans(100);
					return;
				}
			}
		};
		GDT.addEvent(GamePort);
	};
	
		venomousmodAPI.addEventIGN = function () {
		var eventId = "00000000000-1111-1111-1111-VENOMOUS";
		
		var IGN = {
			id: eventId,
			isRandom: false,
			date: '3/7/4',
			ignoreGameLengthModifier: false,
			getNotification: function (company) {
            	var msg = "IGN, also known as Incredible Gaming Network, has offered to interview you about your games and your gaming company.{n} IGN interviews gaming companies to promote gaming and help gamers learn about different developers.\n\n Do you accept this interview? If yes, decide what stuff you would like to discuss with IGN.".localize();
				return new Notification({
					sourceId: eventId,
					header: "Interview".localize(),
					text: msg,
					options: ["Declined!", "Game Development", "Games"]
				});
			},
                       
			complete: function (decision) {
                       
				var company = GameManager.company;
                               
				if (decision === 0) {
					var n = new Notification({
						header: "Interview".localize(),
						text: "You declined the interview. IGN was disappointed that they didn't get to interview you."
					});    
					company.activeNotifications.addRange(n.split());
					return;                                                                                        
				}
				if (decision === 1) {
                	var n = new Notification({
                    header: "Interview".localize(),
                    text: "You tell IGN, that game development is going strong, and promise to develop more exciting games in the future. {n} The interviewer asked if you can predict the future of the video game market.\n\n You answered that in the future, technology will get better and gaming platforms will improve."
               	});
                   	n.adjustFans(500);
                    company.notifications.push(n);
                                       
                    var m = new Notification ({
                    	header: "GamerStop Sponsorship".localize(),
                    	text: "GamerStop loved your recent interview with IGN, when they streamed it on their TVs in the store. GamerStop contacted you and gave you some money as a little gift to boost your current game project. They hope that the sponsorship will boost sales for the game developers and GamerStop."
                    });
                	if (company.isGameProgressBetween(0.2, 0.9)) {
                    	m.adjustCash(60000, "GamerStop Sponsorship");
                    	m.adjustHype(5 + 25 * company.getRandom());
						m.adjustFans(500);
                    	company.notifications.push(m);
                    }
                    return;                        
                }
                if (decision === 2) {
                	var n = new Notification({
                    	header: "Interview".localize(),
                        text: "You tell IGN about your past games, and how they influenced the gaming market. \nYou say that your past games showed the gamers, how hard the developers worked on the game. You hope that in 4-6 years, the company will get bigger and you will be able to work on way more advanced and complex projects.{n} The interviewer asked if you can predict the future of the gaming industry.\n\n You answered that only God knows everything, and that God only knows what the future will bring."
                    });
                	n.adjustFans(500);
                	if (company.isGameProgressBetween(0.2, 0.9)) {
                    	n.adjustHype(5 + 25 * company.getRandom());
                    }
                    company.notifications.push(n);
                    return;             
               	}
			}
        };
        
        GDT.addEvent(IGN);
	};
	
		venomousmodAPI.addEventGamingMarket = function () {
		var eventId = "00000000001-1111-1111-1111-VENOMOUS";
		
		var GamingMarket = {
			id: eventId,
			isRandom: false,
			date: '1/1/1',
			ignoreGameLengthModifier: false,
			getNotification: function (company) {
            	var msg = "Welcome to the Gaming Market.{n} You will be competing against super popular companies such as Ninvento and Mirconoft to push out the best games ever.\n\n Have fun and start coding your games!".localize();
				return new Notification({
					sourceId: eventId,
					header: "Gaming Market".localize(),
					text: msg,
					options: ["Games", "Game Companies", "Fans"]
				});
			},
                       
			complete: function (decision) {
                       
				var company = GameManager.company;
                               
				if (decision === 0) {
					var n = new Notification({
						header: "Gaming Market".localize(),
						text: "In the Gaming Market, you will be learning about game development and what types of topics and genres can work with the game that you are developing."
					});    
					company.activeNotifications.addRange(n.split());
					return;                                                                                        
				}
				if (decision === 1) {
                	var n = new Notification({
                    header: "Gaming Market".localize(),
                    text: "In the Gaming Market, you will be competing against other game companies. {n} The other gaming companies will try to be better than you by making their own games. \n\n Have fun and remember to watch out for tricks and traps from the other gaming companies."
               	});
                   	n.adjustFans(500);
                    company.notifications.push(n);
                                       
                    var m = new Notification ({
                    	header: "Gaming Market".localize(),
                    	text: "The Gaming Market is the market that holds sales for every game in the Game Dev Tycoon universe."
                    });
                	if (company.isGameProgressBetween(0.0, 0.0)) {
                    	m.adjustCash(60000, "GamerStop Sponsorship");
                    	m.adjustHype(5 + 25 * company.getRandom());
						m.adjustFans(500);
                    	company.notifications.push(m);
                    }
                    return;                        
                }
                if (decision === 2) {
                	var n = new Notification({
                    	header: "Gaming Market".localize(),
                        text: "In The Gaming Market, you will get fans, if your game is good enough. \nFans will like your company if the game is awesome."
                    });
                	n.adjustFans(500);
                	if (company.isGameProgressBetween(0.0, 0.0)) {
                    	n.adjustHype(5 + 25 * company.getRandom());
                    }
                    company.notifications.push(n);
                    return;             
               	}
			}
        };
        
        GDT.addEvent(GamingMarket);
	};
	
		venomousmodAPI.addEventGovodoreTrouble = function () {
		var eventId = "00000000011-1111-1111-1111-VENOMOUS";
		
		var GovodoreTrouble = {
			id: eventId,
			isRandom: false,
			date: '2/1/1',
			ignoreGameLengthModifier: false,
			getNotification: function (company) {
            	var msg = "We just got reports of Govodore G64's breaking down around the world.{n} Govodore's mail systems were being attacked by tons and tons of reports of their Govodore G64 overheating and getting blue screens of death.\n\n What will Govodore do?".localize();
				return new Notification({
					sourceId: eventId,
					header: "Govodore Trouble".localize(),
					text: msg,
					options: ["Ignore the Problems", "Fix the Problems", "Apologize!"]
				});
			},
                       
			complete: function (decision) {
                       
				var company = GameManager.company;
                               
				if (decision === 0) {
					var n = new Notification({
						header: "Govodore Trouble".localize(),
						text: "Govodore ignores the problems of the Govodore G64 and they throw away every mail piece related to the problem."
					});    
					company.activeNotifications.addRange(n.split());
					return;                                                                                        
				}
				if (decision === 1) {
                	var n = new Notification({
                    header: "Govodore Trouble".localize(),
                    text: "Govodore fixes the problems in the Govodore G64, and they make every fan happy."
               	});
                   	n.adjustFans(500);
                    company.notifications.push(n);
                                       
                    var m = new Notification ({
                    	header: "Govodore Trouble".localize(),
                    	text: "IGN wrote a article on their website about the problems of the Govodore G64, and how they were fixed."
                    });
                	if (company.isGameProgressBetween(0.1, 0.9)) {
                    	m.adjustCash(60000, "Article");
                    	m.adjustHype(5 + 25 * company.getRandom());
						m.adjustFans(500);
                    	company.notifications.push(m);
                    }
                    return;                        
                }
                if (decision === 2) {
                	var n = new Notification({
                    	header: "Govodore Trouble".localize(),
                        text: "Govodore apologized to their fans about the trouble with the Govodore G64, and told everyone that the problems are not being fixed. \nFans are disappointed!"
                    });
                	n.adjustFans(100);
                	if (company.isGameProgressBetween(0.1, 0.9)) {
                    	n.adjustHype(5 + 25 * company.getRandom());
                    }
                    company.notifications.push(n);
                    return;             
               	}
			}
        };
        
        GDT.addEvent(GovodoreTrouble);
	};
	
		venomousmodAPI.addEventSabotage = function () {
		var eventId = "00000001111-1111-1111-1111-VENOMOUS";
		
		var Sabotage = {
			id: eventId,
			isRandom: false,
			date: '4/1/1',
			ignoreGameLengthModifier: false,
			getNotification: function (company) {
            	var msg = "Cybermen have hacked into your computer network, the same computer network that you were using to code your games for your gaming company.{n} The computer starts going crazy, opening over 1000 tabs in a second, with a animation of a Cybermen laughing at you.\n\n What will you do to save your company?".localize();
				return new Notification({
					sourceId: eventId,
					header: "Sabotage".localize(),
					text: msg,
					options: ["Hack the Cybermen", "Smash the Computer", "Call the Doctor!"]
				});
			},
                       
			complete: function (decision) {
                       
				var company = GameManager.company;
                               
				if (decision === 0) {
					var n = new Notification({
						header: "Hack the Cybermen".localize(),
						text: "You attempted to hack the Cybermen back, but their firewall blocked your signal."
					});    
					company.activeNotifications.addRange(n.split());
					return;                                                                                        
				}
				if (decision === 1) {
                	var n = new Notification({
                    header: "Smash the Computer".localize(),
                    text: "You smashed the computer, because you got tired of the Cybermen messing up everything."
               	});
					n.adjustCash(-100000);
                    company.notifications.push(n);
                                       
                    var m = new Notification ({
                    	header: "Cybermen Proposal".localize(),
                    	text: "Cybermen have appeared on your computer screen, and proposed to you to join their army of Cybermen and help them take over the world."
                    });
                	if (company.isGameProgressBetween(0.1, 0.9)) {
                    	m.adjustCash(60000, "Proposal");
                    	m.adjustHype(5 + 35 * company.getRandom());
						m.adjustFans(-200);
                    	company.notifications.push(m);
                    }
                    return;                        
                }
                if (decision === 2) {
                	var n = new Notification({
                    	header: "Call the Doctor".localize(),
                        text: "The Doctor did a massive virus scan on your computer, and removed the Cybermen virus. \nFans are excited!"
                    });
                	n.adjustFans(1000);
					n.adjustCash(1000);
                	if (company.isGameProgressBetween(0.1, 0.9)) {
                    	n.adjustHype(5 + 25 * company.getRandom());
                    }
                    company.notifications.push(n);
                    return;             
               	}
			}
        };
        
        GDT.addEvent(Sabotage);
	};
	
		venomousmodAPI.addEventMboxOneRumours = function () {
		var eventId = "00000011111-1111-1111-1111-VENOMOUS";
		
		var MboxOneRumours = {
			id: eventId,
			isRandom: false,
			date: '22/9/2',
			ignoreGameLengthModifier: false,
			getNotification: function (company) {
            	var msg = "Rumours have been spread around the entire world about Mirconoft's next gen console. {n} Fans of the Mbox 360 have been nagging Mirconoft like crazy trying to retrieve info from them about the new console. \n\n All of the info, we have been getting are unconfirmed rumors.".localize();
				return new Notification({
					sourceId: eventId,
					header: "Mbox One Rumours".localize(),
					text: msg,
					options: ["Rumours", "Design", "Software"]
				});
			},
                       
			complete: function (decision) {
                       
				var company = GameManager.company;
                               
				if (decision === 0) {
					var n = new Notification({
						header: "Rumours".localize(),
						text: "There are several rumours for the Mbox One soaring around the world, such as the rumour for Blu-Ray Support for playback and games."
					});    
					company.activeNotifications.addRange(n.split());
					return;                                                                                        
				}
				if (decision === 1) {
                	var n = new Notification({
                    header: "Design".localize(),
                    text: "We heard a rumour about the design of the Mbox One. The Mbox One was supposed to be a massive version of the Mbox 360."
               	});
                   	company.notifications.push(n);
                                       
                    var m = new Notification ({
                    	header: "Mbox One Rumours Response".localize(),
                    	text: "IGN responded that those rumours were blasphemy and didn't make sense at all."
                    });
                	if (company.isGameProgressBetween(0.4, 0.9)) {
                    	m.adjustCash(70000, "Article");
                    	m.adjustHype(5 + 30 * company.getRandom());
						m.adjustFans(600);
                    	company.notifications.push(m);
                    }
                    return;                        
                }
                if (decision === 2) {
                	var n = new Notification({
                    	header: "Software".localize(),
                        text: "The Mbox One's software will be extraordinary with epic graphics and a epic storage of 25 GB on a Blu-Ray Disc."
                    });
                	n.adjustFans(100);
                	if (company.isGameProgressBetween(0.1, 0.9)) {
                    	n.adjustHype(5 + 25 * company.getRandom());
                    }
                    company.notifications.push(n);
                    return;             
               	}
			}
        };
        
        GDT.addEvent(MboxOneRumours);
	};
	
	venomousmodAPI.addResearch = function () {
	GDT.addResearchItem(
	{
		id: "UI Structure",
		name: "UI Structure".localize(),
		v: 4,
		canResearch: function (company) {
			return LevelCalculator.getMissionLevel('Level Design') > 3 //The 'Level Design' level has to 4 or lower
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
				return LevelCalculator.getMissionLevel('Graphic') > 1
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
				return LevelCalculator.getMissionLevel('Graphic') > 7
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
		});
		GDT.addResearchItem(
		{
			id: "3D Graphics Version 9",
			name: "3D Graphics Version 9".localize(),
			v: 10,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 8
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
		});
		GDT.addResearchItem(
		{
			id: "3D Graphics Version 10",
			name: "3D Graphics Version 10".localize(),
			v: 12,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 9
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "3D Graphics Version 11",
			name: "3D Graphics Version 11".localize(),
			v: 14,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 10
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "2K HD Graphics",
			name: "2K HD Graphics".localize(),
			v: 12,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 10
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "4K HD Graphics",
			name: "4K HD Graphics".localize(),
			v: 14,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 10
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "Techno Music",
			name: "Techno Music".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 7
			},
			category: "Sound",
			categoryDisplayName: "Sound"
	});
	GDT.addResearchItem(
		{
			id: "Arcade Graphics",
			name: "Arcade Graphics".localize(),
			v: 1,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 0
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "Simple Story",
			name: "Simple Story".localize(),
			v: 2,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Story/Quests') > 1
			},
			category: "Story/Quests",
			categoryDisplayName: "Story/Quests"
	});
	GDT.addResearchItem(
		{
			id: "Advanced Story",
			name: "Advanced Story".localize(),
			v: 6,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Story/Quests') > 4
			},
			category: "Story/Quests",
			categoryDisplayName: "Story/Quests"
	});
	GDT.addResearchItem(
		{
			id: "Difficult Quests",
			name: "Difficult Quests".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Story/Quests') > 7
			},
			category: "Story/Quests",
			categoryDisplayName: "Story/Quests"
	});
	GDT.addResearchItem(
		{
			id: "Model Shading",
			name: "Model Shading".localize(),
			v: 4,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 3
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "HD Sound",
			name: "HD Sound".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 7
			},
			category: "Sound",
			categoryDisplayName: "Sound"
	});
	GDT.addResearchItem(
		{
			id: "Advanced AI",
			name: "Advanced A.I.".localize(),
			v: 6,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('AI') > 5
			},
			category: "AI",
			categoryDisplayName: "A.I."
	});
	GDT.addResearchItem(
		{
			id: "Boost",
			name: "Boost".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 7
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay"
	});
	GDT.addResearchItem(
		{
			id: "No Loading Screens",
			name: "No Loading Screens".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 7
			},
			category: "Engine",
			categoryDisplayName: "Engine"
	});
	GDT.addResearchItem(
		{
			id: "HD Dialogues",
			name: "HD Dialogues".localize(),
			v: 8,
			canResearch: function (company) {
			return LevelCalculator.getMissionLevel('Dialogs') > 7
			},
			category: "Dialogs",
			categoryDisplayName: "Dialogues"
	});
	GDT.addResearchItem(
		{
			id: "Cyborg Music",
			name: "Cyborg Music".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 7
			},
			category: "Sound",
			categoryDisplayName: "Sound"
	});
	GDT.addResearchItem(
		{
			id: "Dalek Music",
			name: "Dalek Music".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 7
			},
			category: "Sound",
			categoryDisplayName: "Sound"
	});
	GDT.addResearchItem(
		{
			id: "Main Menu",
			name: "Main Menu".localize(),
			v: 1,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 0
			},
			category: "Engine",
			categoryDisplayName: "Engine"
	});
	GDT.addResearchItem(
		{
			id: "Advanced Main Menu",
			name: "Advanced Main Menu".localize(),
			v: 4,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 3
			},
			category: "Engine",
			categoryDisplayName: "Engine"
	});
	GDT.addResearchItem(
		{
			id: "Animated Main Menu",
			name: "Animated Main Menu".localize(),
			v: 6,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 5
			},
			category: "Engine",
			categoryDisplayName: "Engine"
	});
	GDT.addResearchItem(
		{
			id: "Day/Night Main Menu",
			name: "Day/Night Main Menu".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 7
			},
			category: "Engine",
			categoryDisplayName: "Engine"
	});
	GDT.addResearchItem(
		{
			id: "Realistic Graphical Worlds",
			name: "Realistic Graphical Worlds".localize(),
			v: 10,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 9
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "Warzones",
			name: "Warzones".localize(),
			v: 12,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 11
			},
			category: "Engine",
			categoryDisplayName: "Engine"
	});
	GDT.addResearchItem(
		{
			id: "Advanced Warzones",
			name: "Advanced Warzones".localize(),
			v: 14,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 13
			},
			category: "Engine",
			categoryDisplayName: "Engine"
	});
	GDT.addResearchItem(
		{
			id: "PVP",
			name: "PVP".localize(),
			v: 10,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 9
			},
			category: "Engine",
			categoryDisplayName: "Engine"
	});
	GDT.addResearchItem(
		{
			id: "Realistic Bosses",
			name: "Realistic Bosses".localize(),
			v: 14,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 13
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "SD Sound Quality",
			name: "SD Sound Quality".localize(),
			v: 6,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 4
			},
			category: "Sound",
			categoryDisplayName: "Sound"
	});
	GDT.addResearchItem(
		{
			id: "Cartoon World",
			name: "Cartoon World".localize(),
			v: 6,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('World Design') > 4
			},
			category: "World Design",
			categoryDisplayName: "World Design"
	});
	GDT.addResearchItem(
		{
			id: "Animated Cartoon World",
			name: "Animated Cartoon World".localize(),
			v: 8,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('World Design') > 7
			},
			category: "World Design",
			categoryDisplayName: "World Design"
	});
	GDT.addResearchItem(
		{
			id: "Animated Textures-1",
			name: "Animated Textures".localize(),
			v: 10,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 8
			},
			category: "Level Design",
			categoryDisplayName: "Level Design"
	});
	GDT.addResearchItem(
		{
			id: "Advanced Animated Textures-1",
			name: "Advanced Animated Textures".localize(),
			v: 12,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 10
			},
			category: "Level Design",
			categoryDisplayName: "Level Design"
	});
	GDT.addResearchItem(
		{
			id: "Perfect Animated Textures-1",
			name: "Perfect Animated Textures".localize(),
			v: 14,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 12
			},
			category: "Level Design",
			categoryDisplayName: "Level Design"
	});
	GDT.addResearchItem(
		{
			id: "Super-Realistic AI",
			name: "Super-Realistic AI".localize(),
			v: 12,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('AI') > 10
			},
			category: "AI",
			categoryDisplayName: "A.I."
	});
	GDT.addResearchItem(
		{
			id: "TES Graphics",
			name: "TES Graphics".localize(),
			v: 2,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 1
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "TES 64 Graphics",
			name: "TES 64 Graphics".localize(),
			v: 4,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 3
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	GDT.addResearchItem(
		{
			id: "Game-Sphere Graphics",
			name: "Game-Sphere Graphics".localize(),
			v: 6,
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 5
			},
			category: "Graphic",
			categoryDisplayName: "Graphic"
	});
	};
	
	venomousmodAPI.addMarketing = function () {
	GDT.addMarketing(
		{
			id: "MagazineMarketing-1",
			name: "Advertise in Magazines".localize(),
			shortName: "Magazine News Article".localize("short name"),
			description: "Write a news article in a magazine to introduce the game to the public.".localize(),
			marketingFactor: 0.5,
			cost: 100000
		});
	};
	
	venomousmodAPI.addTopic = function () {
	GDT.addTopics([
		{
			id: "Tycoon",
	    	name: "Tycoon".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 1, 0.9],
	    	audienceWeightings: [0.8, 0.8, 0.6],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
	    	id: "Button Masher",
	    	name: "Button Masher".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
	    	id: "Exercise Cats",
	    	name: "Exercise Cats".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
	    	id: "Cat Fighting",
	    	name: "Cat Fighting".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
	    	id: "Cat Tag",
	    	name: "Cat Tag".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
	    	id: "Cat Sports",
	    	name: "Cat Sports".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
	    	id: "Angry Birds-Style",
	    	name: "Angry Birds-Style".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
	    	id: "Trivia",
	    	name: "Trivia".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Computer Dev",
	    	name: "Computer Dev".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Mod Dev",
	    	name: "Mod Dev".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Arcade Racing",
	    	name: "Arcade Racing".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Cop Chase",
	    	name: "Cop Chase".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Bean-Bag Toss",
	    	name: "Bean-Bag Toss".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Rescue Turtles",
	    	name: "Rescue Turtles".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Car Dodging",
	    	name: "Car Dodging".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Squirrel Dodging",
	    	name: "Squirrel Dodging".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Fish Fighting",
	    	name: "Fish Fighting".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Cat Treat Toss",
	    	name: "Cat Treat Toss".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Sandwich Making",
	    	name: "Sandwich Making".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Comic Book Development",
	    	name: "Comic Book Development".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Sandbox",
	    	name: "Sandbox".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.6, 0.6, 1],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Smashing",
	    	name: "Smashing".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Platformer",
	    	name: "Platformer".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Pinball",
	    	name: "Pinball".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "First-Person Shooter",
	    	name: "First-Person Shooter".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Visual Novel",
	    	name: "Visual Novel".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Third-Person Shooter",
	    	name: "Third-Person Shooter".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Japanese RPG",
	    	name: "Japanese RPG".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Western RPG",
	    	name: "Western RPG".localize("game topic"),
	    	genreWeightings: [0.8, 1, 0.6, 1, 1, 0.8],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Social",
	    	name: "Social".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Lion Tackle",
	    	name: "Lion Tackle".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Waterfall Jumping",
	    	name: "Waterfall Jumping".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Hedgehog Bowling",
	    	name: "Hedgehog Bowling".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.8, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Robot Smashing",
	    	name: "Robot Smashing".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Doctor Who-Style",
	    	name: "Doctor Who-Style".localize("game topic"),
	    	genreWeightings: [0.8, 0.8, 0.9, 1, 0.8, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Combat",
	    	name: "Combat".localize("game topic"),
	    	genreWeightings: [0.8, 0.8, 0.8, 1, 0.8, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Defense",
	    	name: "Defense".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Flight",
	    	name: "Flight".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Light Gun",
	    	name: "Light Gun".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Rogue",
	    	name: "Rogue".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Ball Rollan Games",
	    	name: "Ball Rollan Games".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "FMV",
	    	name: "FMV".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Adult",
	    	name: "Adult".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.6, 0.6, 1],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Advergame",
	    	name: "Advergame".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Art",
	    	name: "Art".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Turkey Baking",
	    	name: "Turkey Baking".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.8, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Potato Mashing",
	    	name: "Potato Mashing".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.8, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Fuzzy Brushing",
	    	name: "Fuzzy Brushing".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Mountain Skating",
	    	name: "Mountain Skating".localize("game topic"),
	    	genreWeightings: [0.6, 0.6, 0.6, 1, 0.7, 1],
			audienceWeightings: [0.8, 1, 0.8],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Halloween",
	    	name: "Halloween".localize("game topic"),
	    	genreWeightings: [1, 1, 1, 1, 1, 1],
			audienceWeightings: [0.6, 1, 1],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Thanksgiving",
	    	name: "Thanksgiving".localize("game topic"),
	    	genreWeightings: [1, 1, 1, 1, 1, 1],
			audienceWeightings: [0.8, 0.9, 1],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Christmas",
	    	name: "Christmas".localize("game topic"),
	    	genreWeightings: [1, 1, 1, 1, 1, 1],
			audienceWeightings: [0.6, 1, 1],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Sonic the Hedgehog",
	    	name: "Sonic the Hedgehog".localize("game topic"),
	    	genreWeightings: [1, 1, 1, 1, 1, 1],
			audienceWeightings: [1, 1, 0.6],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Mario",
	    	name: "Mario".localize("game topic"),
	    	genreWeightings: [1, 1, 1, 1, 1, 1],
			audienceWeightings: [1, 1, 0.6],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}, {
			id: "Legend of Zelda",
	    	name: "Legend of Zelda".localize("game topic"),
	    	genreWeightings: [1, 1, 1, 1, 1, 1],
			audienceWeightings: [1, 1, 0.6],
			missionOverrides: [
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[0.7, 0.6, 0.7, 0.7, 0.7, 0.7, 0.8, 0.7, 0.7],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8],
			[1, 0.9, 0.6, 0.6, 0.9, 1, 1, 0.9, 0.8]],
		}
	    ]);
	};

	/*  */		       
})();