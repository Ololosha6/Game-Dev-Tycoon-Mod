var venomous-modAPI = {};
(function () {	
	
	/* Platforms */
	venomous-modAPI.addPlatform = function () {
		var icon = './mods/jason-modAPI/examples/img/codeco.png';
		GDT.addPlatform(
			{
				id: 'Codeovision',
				name: 'Codecovision',
				company: 'Codeco',
				startAmount: 0.300,
				unitsSold: 0.600,
				licencePrize: 5000,
				published: '1/1/1',
				platformRetireDate: '2/6/2',
				developmentCosts: 16500,
				genreWeightings: [1, 0.8, 0.9, 1, 1, 0.7],
				audienceWeightings: [0.8, 0.9, 1],
				techLevel: 1,
				iconUri: icon,
				events: [
					{
						id: '12111996-00-00-001-JASONMODIF',
						date: '3/6/2',
						getNotification: function (company) {
							return new Notification({
								header: "Industry News".localize(),
								text: "Today, Codeco announced that due to poor sales, the Codecovision will soon be pulled from the market.".localize().format(General.getETADescription('2/1/2', '3/1/3')),
								image: icon
							});
						}
					}
				]
			});
			
	};
	/*  */
	
	
	      
})();