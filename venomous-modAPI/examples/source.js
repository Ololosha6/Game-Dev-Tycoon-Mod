var venomous-modAPI = {};
(function () {	
	
	/* Platforms */
	venomous-modAPI.addPlatform = function () {
		var icon = 'mods/venomous-modAPI/examples/img/SuperBox.png';
		GDT.addPlatform({
		id : 'SuperBox',
		name : 'SuperBox',
		company : 'Supersonic Games',
		startAmount : 0.15,
		unitsSold : 0.358,
		licencePrize : 5000,
		published : '1/3/4',
		platformRetireDate : '5/6/4',
		developmentCosts : 10000,
		genreWeightings : [0.9, 1, 1, 0.9, 1, 0.7],
		audienceWeightings : [0.9, 1.0, 0.8],
		techLevel : 1,
		iconUri : icon,
		events : [{
			id : '10537DA1-58F1-4F23-8854-F1E2621933BF',
			date : '1/2/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Coming out of nowhere a company called Supersonic Games has announced that they will publish a new game console called the SuperBox {0}.".localize().format(General.getETADescription('1/2/1', '1/3/4')),
					image : icon
				});
				}
			}
		}
	]
});
			
	};
	/*  */
	
	
	      
})();